# Media library

Organized assets for reuse across the site (homepage graphics, inner pages, etc.).

```
public/media/
  cta/                 Full-bleed closing image (bbf-cta-new.png)
  founders/            Group + individual headshots
  advocacy/
    photos/            BOE / advocacy gallery
    videos/            (streamed via HLS — see src/lib/media.ts)
    bills/             S3497 & A4764 PDFs + screenshots
  programs/            GameClass screenshot, etc.
  events/              Conference / event photos
```

Video testimony streams are catalogued in `src/lib/media.ts` and play from Squarespace HLS (same source as the original site).
