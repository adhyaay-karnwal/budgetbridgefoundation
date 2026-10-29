import Image from "next/image";
import Link from "next/link";
import { PageHero, PageSection } from "@/components/PageChrome";
import { Reveal } from "@/components/playful/Reveal";
import {
  BLOG,
  getBlogPostsSorted,
  type BlogPost,
} from "@/lib/content";
import { pageMetadata } from "@/lib/metadata";
import { TONES, toneAt } from "@/lib/tones";

export const metadata = pageMetadata({
  title: "Blog",
  description: `${BLOG.title}. Articles on personal finance, financial literacy policy, youth money education, and nonprofit financial education from Budget Bridge Foundation.`,
  path: "/blog",
  keywords: ["financial literacy blog", "personal finance articles", "youth financial education"],
});

function CoverImage({
  cover,
  frameClassName,
  sizes,
  preload = false,
}: {
  cover: BlogPost["cover"];
  frameClassName: string;
  sizes: string;
  preload?: boolean;
}) {
  return (
    <div
      className={`relative overflow-hidden rounded-[24px] border-2 border-ink bg-paper ${frameClassName}`}
    >
      <Image
        src={cover.src}
        alt={cover.alt}
        fill
        className="object-cover transition-transform duration-700 group-hover:scale-105"
        sizes={sizes}
        preload={preload}
      />
    </div>
  );
}

function PostMeta({ post }: { post: BlogPost }) {
  return (
    <p className="text-[13px] font-medium uppercase tracking-[0.12em] text-ink-soft">
      {post.author} · {post.date}
    </p>
  );
}

export default function BlogPage() {
  const posts = getBlogPostsSorted();
  const featured = posts[0];
  const rest = posts.slice(1);

  return (
    <main>
      <PageHero label={BLOG.label} title={BLOG.title} tone="lilac" doodle="bulb" />

      {featured ? (
        <PageSection className="content-gutter-x pb-16 pt-4">
          <Link
            href={`/blog/${featured.slug}`}
            className="group grid items-center gap-8 lg:grid-cols-[1.3fr_1fr] lg:gap-14"
          >
            <CoverImage
              cover={featured.cover}
              frameClassName="aspect-[16/10] w-full shadow-sticker"
              sizes="(max-width: 1024px) 100vw, 60vw"
              preload
            />
            <div>
              <span className="inline-flex rounded-full border-2 border-ink bg-marigold px-3 py-1 text-[12px] font-medium uppercase tracking-[0.14em]">
                Latest
              </span>
              <h2 className="font-display mt-5 text-[36px] leading-[1.08] text-ink transition-colors group-hover:text-teal sm:text-[46px]">
                {featured.title}
              </h2>
              <p className="mt-5 text-[18px] leading-8 text-ink-soft">
                {featured.excerpt}
              </p>
              <div className="mt-5">
                <PostMeta post={featured} />
              </div>
            </div>
          </Link>
        </PageSection>
      ) : null}

      {rest.length > 0 ? (
        <PageSection className="content-gutter-x pb-24 pt-4">
          <div className="grid gap-x-8 gap-y-14 sm:grid-cols-2">
            {rest.map((post, index) => {
              const t = TONES[toneAt(index + 1)];
              return (
                <Reveal key={post.slug} delay={(index % 2) * 100}>
                  <Link href={`/blog/${post.slug}`} className="group block">
                    <div className="relative">
                      <CoverImage
                        cover={post.cover}
                        frameClassName="aspect-[16/10] w-full"
                        sizes="(max-width: 640px) 100vw, 45vw"
                      />
                      <span
                        className={`absolute left-4 top-4 rounded-full border-2 border-ink px-3 py-1 text-[12px] font-medium uppercase tracking-[0.12em] ${t.bg} ${t.text}`}
                      >
                        {post.dateShort}
                      </span>
                    </div>
                    <h2 className="font-display mt-6 text-[28px] leading-tight text-ink transition-colors group-hover:text-teal">
                      {post.title}
                    </h2>
                    <p className="mt-3 text-[16px] leading-7 text-ink-soft">
                      {post.excerpt}
                    </p>
                    <div className="mt-4">
                      <PostMeta post={post} />
                    </div>
                  </Link>
                </Reveal>
              );
            })}
          </div>
        </PageSection>
      ) : null}
    </main>
  );
}
