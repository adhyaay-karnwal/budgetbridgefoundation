import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { PageHero, PageSection } from "@/components/PageChrome";
import { BLOG, type BlogPost } from "@/lib/content";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: `Blog · ${SITE.name}`,
  description: BLOG.title,
};

function CoverImage({
  cover,
  frameClassName,
  sizes,
  priority = false,
}: {
  cover: BlogPost["cover"];
  frameClassName: string;
  sizes: string;
  priority?: boolean;
}) {
  return (
    <div
      className={`relative overflow-hidden rounded-[2px] bg-[#ececec] ${frameClassName}`}
    >
      <Image
        src={cover.src}
        alt={cover.alt}
        fill
        className="object-cover transition-transform duration-500 group-hover:scale-[1.02]"
        sizes={sizes}
        priority={priority}
      />
    </div>
  );
}

export default function BlogPage() {
  const featured = BLOG.posts[0];
  const rest = BLOG.posts.slice(1);

  return (
    <main className="bg-white">
      <PageHero label={BLOG.label} title={BLOG.title} />

      {featured ? (
        <PageSection className="content-gutter-x pb-16 pt-4">
          <Link href={`/blog/${featured.slug}`} className="group block">
            <CoverImage
              cover={featured.cover}
              frameClassName="aspect-[21/9] min-h-[240px] w-full"
              sizes="100vw"
              priority
            />
            <div className="mt-8 flex flex-wrap items-baseline justify-between gap-3">
              <h2 className="max-w-3xl text-[32px] font-medium leading-tight tracking-tight text-[#161514] transition-colors group-hover:text-[#717071] sm:text-[40px]">
                {featured.title}
              </h2>
              <span className="text-[15px] text-[#a3a3a3]">
                {featured.dateShort}
              </span>
            </div>
            <p className="mt-4 max-w-2xl text-[15px] leading-6 text-[#717071]">
              {featured.excerpt}
            </p>
            <p className="mt-3 text-[14px] text-[#a3a3a3]">{featured.author}</p>
          </Link>
        </PageSection>
      ) : null}

      {rest.length > 0 ? (
        <PageSection className="content-gutter-x pb-24 pt-4">
          <div className="grid gap-12 md:grid-cols-2">
            {rest.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group block"
              >
                <CoverImage
                  cover={post.cover}
                  frameClassName="aspect-[16/10]"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="mt-5 flex items-baseline justify-between gap-3">
                  <h2 className="text-[22px] font-medium leading-snug text-[#161514] transition-colors group-hover:text-[#717071]">
                    {post.title}
                  </h2>
                  <span className="shrink-0 text-[14px] text-[#a3a3a3]">
                    {post.dateShort}
                  </span>
                </div>
                <p className="mt-2 text-[14px] text-[#a3a3a3]">{post.author}</p>
              </Link>
            ))}
          </div>
        </PageSection>
      ) : null}
    </main>
  );
}
