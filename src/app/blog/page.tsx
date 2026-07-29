import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { PageHero, PageSection } from "@/components/PageChrome";
import {
  BLOG,
  getBlogPostsSorted,
  type BlogPost,
} from "@/lib/content";
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

function PostMetaRow({ post }: { post: BlogPost }) {
  return (
    <div className="mt-6 grid grid-cols-3 items-center gap-4 text-[15px] text-[#717071]">
      <span>{post.date}</span>
      <span className="text-center">{post.author}</span>
      <span className="text-right">{post.category}</span>
    </div>
  );
}

function PostListRow({ post }: { post: BlogPost }) {
  return (
    <Link
      href={`/blog/${post.slug}`}
      className="group grid gap-6 border-t border-[#ececec] py-10 first:border-t-0 first:pt-0 md:grid-cols-[minmax(0,1.05fr)_minmax(0,1fr)] md:items-start md:gap-10"
    >
      <CoverImage
        cover={post.cover}
        frameClassName="aspect-[16/10] w-full"
        sizes="(max-width: 768px) 100vw, 45vw"
      />
      <div className="flex flex-col justify-center">
        <h2 className="text-[28px] font-medium leading-tight tracking-tight text-[#161514] transition-colors group-hover:text-[#717071] sm:text-[32px]">
          {post.title}
        </h2>
        <p className="mt-4 text-[15px] leading-6 text-[#717071]">
          {post.excerpt}
        </p>
        <p className="mt-4 text-[14px] text-[#a3a3a3]">
          {post.author} · {post.date}
        </p>
      </div>
    </Link>
  );
}

export default function BlogPage() {
  const posts = getBlogPostsSorted();
  const featured = posts[0];
  const rest = posts.slice(1);

  return (
    <main className="bg-white">
      <PageHero label={BLOG.label} title={BLOG.title} />

      {featured ? (
        <PageSection className="content-gutter-x pb-12 pt-4">
          <Link href={`/blog/${featured.slug}`} className="group block">
            <CoverImage
              cover={featured.cover}
              frameClassName="aspect-[21/9] min-h-[240px] w-full"
              sizes="100vw"
              priority
            />
            <PostMetaRow post={featured} />
            <h2 className="mt-8 max-w-3xl text-[32px] font-medium leading-tight tracking-tight text-[#161514] transition-colors group-hover:text-[#717071] sm:text-[40px]">
              {featured.title}
            </h2>
            <p className="mt-4 max-w-2xl text-[15px] leading-6 text-[#717071]">
              {featured.excerpt}
            </p>
          </Link>
        </PageSection>
      ) : null}

      {rest.length > 0 ? (
        <PageSection className="content-gutter-x pb-24 pt-4">
          <div>
            {rest.map((post) => (
              <PostListRow key={post.slug} post={post} />
            ))}
          </div>
        </PageSection>
      ) : null}
    </main>
  );
}
