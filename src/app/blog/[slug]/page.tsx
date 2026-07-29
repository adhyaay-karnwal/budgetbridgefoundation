import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PageSection } from "@/components/PageChrome";
import { BLOG, getBlogPost } from "@/lib/content";
import { SITE } from "@/lib/site";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPost(slug);

  return {
    title: `${post?.title ?? "Blog"} · ${SITE.name}`,
    description: post?.excerpt,
  };
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  const post = getBlogPost(slug);

  if (!post) notFound();

  return (
    <main className="bg-white">
      <header className="content-gutter-x pb-10 pt-28">
        <p className="text-[13px] font-medium uppercase tracking-[0.08em] text-[#a3a3a3]">
          {BLOG.label}
        </p>
        <h1 className="mt-4 max-w-4xl text-[36px] font-medium leading-[1.1] tracking-tight text-[#161514] sm:text-[48px]">
          {post.title}
        </h1>
      </header>

      <PageSection className="content-gutter-x pb-12 pt-4">
        <div className="relative aspect-[21/9] min-h-[220px] w-full overflow-hidden rounded-[2px] bg-[#ececec]">
          <Image
            src={post.cover.src}
            alt={post.cover.alt}
            fill
            className="object-cover"
            sizes="100vw"
            priority
          />
        </div>
        <div className="mt-6 grid grid-cols-3 items-center gap-4 text-[15px] text-[#717071]">
          <span>{post.date}</span>
          <span className="text-center">{post.author}</span>
          <span className="text-right">{post.category}</span>
        </div>
      </PageSection>

      <PageSection className="content-gutter-x pb-16 pt-4">
        <article className="mx-auto max-w-2xl space-y-6">
          {post.paragraphs.map((paragraph) => (
            <p key={paragraph} className="text-[17px] leading-8 text-[#161514]">
              {paragraph}
            </p>
          ))}
          <p className="pt-4 text-[15px] text-[#717071]">
            By {post.author}
          </p>
        </article>
        <Link
          href="/blog"
          className="mt-14 inline-block text-[15px] text-[#161514] transition-colors hover:text-[#717071]"
        >
          ← All posts
        </Link>
      </PageSection>
    </main>
  );
}
