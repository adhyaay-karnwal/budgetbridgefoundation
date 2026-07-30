import Image from "next/image";
import { teamMemberImage, type TeamMember } from "@/lib/content";
import { MEDIA } from "@/lib/media";

type TeamMemberCardProps = TeamMember & {
  bio?: string;
};

export function TeamMemberCard({ name, role, image, bio }: TeamMemberCardProps) {
  const src = teamMemberImage({ name, role, image });
  const isPlaceholder = src === MEDIA.team.placeholder.src;

  return (
    <article>
      <div className="relative mb-5 aspect-[4/5] overflow-hidden rounded-[2px] bg-[#ececec]">
        <Image
          src={src}
          alt={name}
          fill
          className={isPlaceholder ? "object-contain p-8" : "object-cover"}
          sizes="(max-width: 640px) 100vw, 25vw"
        />
      </div>
      <h3 className="text-[17px] font-medium text-[#161514]">{name}</h3>
      <p className="mt-1 text-[14px] text-[#a3a3a3]">{role}</p>
      {bio ? (
        <p className="mt-3 text-[15px] leading-6 text-[#717071]">{bio}</p>
      ) : null}
    </article>
  );
}
