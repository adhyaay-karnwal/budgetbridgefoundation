import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PageSection } from "@/components/PageChrome";
import { DoodleHeart } from "@/components/playful/Doodles";
import { ReadingProgress } from "@/components/playful/ReadingProgress";
import { ArticleJsonLd } from "@/components/seo/JsonLd";
import { BLOG, getBlogPost } from "@/lib/content";
import { articleMetadata } from "@/lib/metadata";
import { absoluteUrl } from "@/lib/seo";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return BLOG.posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPost(slug);

  if (!post) {
    return articleMetadata({
      title: "Blog",
      description: "Blog post from Budget Bridge Foundation",
      path: `/blog/${slug}`,
    });
  }

  return articleMetadata({
    title: post.title,
    description: post.excerpt,
    path: `/blog/${post.slug}`,
    publishedTime: post.date,
    authors: [post.author],
  });
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  const post = getBlogPost(slug);

  if (!post) notFound();

  return (
    <main>
      <ReadingProgress />
      <ArticleJsonLd
        title={post.title}
        description={post.excerpt}
        path={`/blog/${post.slug}`}
        image={absoluteUrl(post.cover.src)}
        datePublished={post.date}
        author={post.author}
      />

      <header className="content-gutter-x pb-10 pt-12 text-center sm:pt-16">
        <Link
          href="/blog"
          className="page-enter-text inline-flex items-center gap-2 rounded-full border-2 border-ink bg-lilac px-4 py-1.5 text-[13px] font-medium uppercase tracking-[0.14em] text-ink transition-transform hover:-translate-y-0.5"
        >
          ← {BLOG.label}
        </Link>
        <h1 className="font-display page-enter-text-delay mx-auto mt-6 max-w-4xl text-[40px] leading-[1.05] text-ink sm:text-[60px]">
          {post.title}
        </h1>
        <p className="page-enter-body mt-6 text-[14px] font-medium uppercase tracking-[0.12em] text-ink-soft">
          {post.author} · <time dateTime={post.date}>{post.date}</time> · {post.category}
        </p>
      </header>

      <PageSection className="content-gutter-x pb-12 pt-4">
        <div className="relative mx-auto aspect-[21/9] min-h-[220px] w-full max-w-5xl overflow-hidden rounded-[30px] border-2 border-ink bg-paper shadow-sticker">
          <Image
            src={post.cover.src}
            alt={post.cover.alt}
            fill
            className="object-cover"
            sizes="(max-width: 1100px) 100vw, 1000px"
            preload
          />
        </div>
      </PageSection>

      <PageSection className="content-gutter-x pb-16 pt-4">
        <article className="mx-auto max-w-2xl space-y-7">
          {post.paragraphs.map((paragraph, index) => (
            <p
              key={paragraph}
              className={`text-[19px] leading-9 text-ink ${
                index === 0
                  ? "first-letter:font-display first-letter:float-left first-letter:mr-3 first-letter:mt-1 first-letter:text-[78px] first-letter:leading-[0.8] first-letter:text-marigold-deep"
                  : ""
              }`}
            >
              {paragraph}
            </p>
          ))}
          <p className="flex items-center gap-3 pt-6 font-hand text-[28px] text-ink-soft">
            <DoodleHeart size={36} className="text-coral" />
            By {post.author}
          </p>
        </article>
        <div className="mx-auto mt-14 max-w-2xl border-t-2 border-dashed border-line pt-8">
          <Link
            href="/blog"
            className="font-display text-[22px] text-ink transition-colors hover:text-teal"
          >
            ← All posts
          </Link>
        </div>
      </PageSection>
    </main>
  );
}
