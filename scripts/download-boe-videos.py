#!/usr/bin/env python3
"""Download Squarespace HLS → local MP4 via rewritten playlists (ffmpeg decrypts AES)."""

from __future__ import annotations

import re
import ssl
import subprocess
import tempfile
import urllib.parse
import urllib.request
from pathlib import Path

MEDIA = Path(__file__).resolve().parents[1] / "public/media/advocacy/videos"
LIB = "68a0e8914499697065fd3cc6"
CTX = ssl.create_default_context()

# Prefer ~720p-ish: pick stream closest to this bandwidth
TARGET_BANDWIDTH = 1_500_000

VIDEOS = [
    ("abf8ae77-5708-4e15-8520-7e9269cc5bce", "randolph-shubh.mp4"),
    ("f903aed5-a6fc-4cca-a1c9-2a97fc33f45d", "randolph-rohit.mp4"),
    ("efdc39f7-1780-4937-8020-414954d5dc95", "randolph-avi.mp4"),
    ("e0298846-9b85-44f8-8eb4-d3553f815ad3", "parsippany-evan.mp4"),
]


def fetch(url: str) -> bytes:
    req = urllib.request.Request(url, headers={"User-Agent": "Mozilla/5.0"})
    with urllib.request.urlopen(req, context=CTX, timeout=90) as response:
        return response.read()


def pick_video_stream(master: str) -> str:
    streams = re.findall(
        r"#EXT-X-STREAM-INF:BANDWIDTH=(\d+)[^\n]*\n(https://\S+)", master
    )
    ranked = sorted(
        ((abs(int(b) - TARGET_BANDWIDTH), int(b), u) for b, u in streams),
        key=lambda t: t[0],
    )
    print("  streams:", ", ".join(f"{b}" for _, b, _ in ranked), flush=True)
    return ranked[0][2]


def write_media_playlist(url: str, dest: Path, work: Path) -> None:
    text = fetch(url).decode("utf-8", errors="replace")
    out: list[str] = []
    seg_i = 0
    for line in text.splitlines():
        stripped = line.strip()
        if stripped.startswith("#EXT-X-KEY") and "URI=" in stripped:
            match = re.search(r'URI="([^"]+)"', stripped)
            if not match:
                out.append(line)
                continue
            key_name = f"{dest.stem}-key.bin"
            (work / key_name).write_bytes(fetch(match.group(1)))
            out.append(re.sub(r'URI="[^"]+"', f'URI="{key_name}"', stripped))
        elif stripped and not stripped.startswith("#"):
            seg_url = (
                stripped
                if stripped.startswith("http")
                else urllib.parse.urljoin(url, stripped)
            )
            seg_name = f"{dest.stem}-seg-{seg_i:05d}.ts"
            seg_i += 1
            print(f"  {seg_name}", flush=True)
            (work / seg_name).write_bytes(fetch(seg_url))
            out.append(seg_name)
        else:
            out.append(line)
    dest.write_text("\n".join(out) + "\n")


def build_local_master(master_url: str, work: Path) -> Path:
    master = fetch(master_url).decode("utf-8", errors="replace")
    video_url = pick_video_stream(master)
    audio_match = re.search(r'#EXT-X-MEDIA:[^\n]*URI="(https://[^"]+)"', master)
    if not audio_match:
        raise RuntimeError("No audio URI in master playlist")

    write_media_playlist(video_url, work / "video.m3u8", work)
    write_media_playlist(audio_match.group(1), work / "audio.m3u8", work)

    # Minimal master pointing at local playlists
    local = work / "master.m3u8"
    local.write_text(
        "\n".join(
            [
                "#EXTM3U",
                "#EXT-X-VERSION:6",
                '#EXT-X-MEDIA:TYPE=AUDIO,GROUP-ID="audio",NAME="audio",DEFAULT=YES,URI="audio.m3u8"',
                '#EXT-X-STREAM-INF:BANDWIDTH=1500000,AUDIO="audio"',
                "video.m3u8",
                "",
            ]
        )
    )
    return local


def convert(master: Path, outfile: Path) -> None:
    subprocess.run(
        [
            "ffmpeg",
            "-y",
            "-allowed_extensions",
            "ALL",
            "-protocol_whitelist",
            "file,crypto,data",
            "-i",
            str(master),
            "-c",
            "copy",
            "-bsf:a",
            "aac_adtstoasc",
            "-movflags",
            "+faststart",
            str(outfile),
        ],
        check=True,
    )


def main() -> None:
    MEDIA.mkdir(parents=True, exist_ok=True)
    for vid_id, name in VIDEOS:
        print(f"=== {name} ===", flush=True)
        out = MEDIA / name
        if out.exists() and out.stat().st_size > 50_000:
            # Reject suspiciously huge files (bad prior downloads)
            if out.stat().st_size < 80_000_000:
                print("skip existing", out.stat().st_size, flush=True)
                continue
            print("removing oversized", out.stat().st_size, flush=True)
            out.unlink()

        with tempfile.TemporaryDirectory() as tmp:
            work = Path(tmp)
            master_url = (
                f"https://video.squarespace-cdn.com/content/v1/{LIB}/{vid_id}/playlist.m3u8"
            )
            master = build_local_master(master_url, work)
            convert(master, out)
            print("OK", out, out.stat().st_size, flush=True)
            # Sanity: testimony clips should be a few minutes, not tens
            probe = subprocess.run(
                [
                    "ffprobe",
                    "-v",
                    "error",
                    "-show_entries",
                    "format=duration",
                    "-of",
                    "default=noprint_wrappers=1:nokey=1",
                    str(out),
                ],
                capture_output=True,
                text=True,
                check=True,
            )
            duration = float(probe.stdout.strip())
            print(f"  duration={duration:.1f}s", flush=True)
            if duration > 600:
                out.unlink(missing_ok=True)
                raise RuntimeError(f"{name} duration too long: {duration}s")


if __name__ == "__main__":
    main()
