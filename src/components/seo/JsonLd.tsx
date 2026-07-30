import { absoluteUrl, ORGANIZATION_JSON_LD, WEBSITE_JSON_LD } from "@/lib/seo";

type JsonLdProps = {
  data: Record<string, unknown> | Record<string, unknown>[];
};

export function JsonLd({ data }: JsonLdProps) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export function SiteJsonLd() {
  return (
    <JsonLd data={[ORGANIZATION_JSON_LD, WEBSITE_JSON_LD]} />
  );
}

export function ArticleJsonLd({
  title,
  description,
  path,
  image,
  datePublished,
  author,
}: {
  title: string;
  description: string;
  path: string;
  image: string;
  datePublished: string;
  author: string;
}) {
  const url = absoluteUrl(path);

  return (
    <JsonLd
      data={{
        "@context": "https://schema.org",
        "@type": "Article",
        headline: title,
        description,
        url,
        image,
        datePublished,
        author: {
          "@type": "Person",
          name: author,
        },
        publisher: {
          "@type": "NGO",
          "@id": ORGANIZATION_JSON_LD["@id"],
          name: ORGANIZATION_JSON_LD.name,
          logo: {
            "@type": "ImageObject",
            url: ORGANIZATION_JSON_LD.logo,
          },
        },
        mainEntityOfPage: {
          "@type": "WebPage",
          "@id": url,
        },
      }}
    />
  );
}
