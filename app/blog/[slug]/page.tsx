import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  blogPosts,
  formatBlogDate,
  getBlogPostBySlug,
  getPostWordCount,
} from "@/lib/blog";

type BlogDetailPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: BlogDetailPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);

  if (!post) {
    return {
      title: "Blogbeitrag nicht gefunden | AE Gebäudeservice",
      robots: { index: false, follow: false },
    };
  }

  return {
    title: post.metaTitle,
    description: post.metaDescription,
    alternates: { canonical: `/blog/${post.slug}` },
    openGraph: {
      title: post.metaTitle,
      description: post.metaDescription,
      type: "article",
      publishedTime: `${post.date}T08:00:00+02:00`,
    },
  };
}

export default async function BlogDetailPage({ params }: BlogDetailPageProps) {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);

  if (!post) notFound();

  const relatedPosts = blogPosts
    .filter((item) => item.slug !== post.slug)
    .slice(0, 3);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.metaDescription,
    datePublished: post.date,
    dateModified: post.date,
    author: {
      "@type": "Organization",
      name: "AE Gebäudeservice",
    },
    publisher: {
      "@type": "Organization",
      name: "AE Gebäudeservice",
    },
    mainEntityOfPage: `/blog/${post.slug}`,
  };

  return (
    <main className="bg-background-light text-text-main">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <section className={`relative overflow-hidden bg-gradient-to-br ${post.coverGradient} py-20 text-white md:py-28`}>
        <div className="absolute inset-0 bg-black/30" />
        <div className="absolute -right-24 top-0 h-full w-2/3 -skew-x-12 bg-white/10" />
        <div className="container relative z-10 mx-auto px-4 md:px-6">
          <Link
            href="/blog"
            className="mb-8 inline-flex items-center gap-2 rounded-full bg-white/15 px-4 py-2 text-sm font-bold text-white backdrop-blur transition-colors hover:bg-white hover:text-black"
          >
            <span className="material-icons-outlined text-base">arrow_back</span>
            Zurück zum Blog
          </Link>

          <div className="max-w-4xl">
            <div className="mb-5 flex flex-wrap items-center gap-3 text-xs font-black uppercase tracking-[0.22em] text-white/85">
              <span className="rounded-full bg-white/15 px-4 py-2 backdrop-blur">
                {post.category}
              </span>
              <span>{formatBlogDate(post.date)}</span>
              <span>•</span>
              <span>{post.readingMinutes} Min. Lesezeit</span>
              <span>•</span>
              <span>ca. {getPostWordCount(post)} Wörter</span>
            </div>

            {post.status === "planned" && (
              <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-black/35 px-4 py-2 text-sm font-black uppercase tracking-widest text-white ring-1 ring-white/20">
                <span className="material-icons-outlined text-base">schedule</span>
                Veröffentlichung geplant für {formatBlogDate(post.plannedFor || post.date)}
              </div>
            )}

            <h1 className="text-4xl font-black leading-[0.95] tracking-tighter md:text-7xl">
              {post.title}
            </h1>
            <p className="mt-6 max-w-3xl border-l-4 border-white pl-5 text-lg leading-relaxed text-white/90 md:text-xl">
              {post.excerpt}
            </p>
          </div>
        </div>
      </section>

      <article className="py-14 md:py-20">
        <div className="container mx-auto grid gap-10 px-4 md:px-6 lg:grid-cols-[minmax(0,1fr)_320px]">
          <div className="min-w-0 rounded-[2rem] bg-white p-6 shadow-xl ring-1 ring-black/5 md:p-10">
            <p className="text-xl font-semibold leading-relaxed text-gray-800 md:text-2xl">
              {post.intro}
            </p>

            <div className="mt-10 space-y-10">
              {post.sections.map((section) => (
                <section key={section.heading}>
                  <h2 className="text-2xl font-black tracking-tight md:text-4xl">
                    {section.heading}
                  </h2>
                  <div className="mt-5 space-y-5 text-base leading-8 text-text-muted md:text-lg">
                    {section.body.map((paragraph) => (
                      <p key={paragraph}>{paragraph}</p>
                    ))}
                  </div>
                </section>
              ))}
            </div>

            <section className="mt-12 rounded-[2rem] bg-background-light p-6 md:p-8">
              <div className="mb-5 flex items-center gap-3">
                <span className="material-icons-outlined rounded-full bg-primary p-3 text-white">
                  checklist
                </span>
                <h2 className="text-2xl font-black tracking-tight">
                  Kurz-Check für Ihr Objekt
                </h2>
              </div>
              <ul className="space-y-3">
                {post.checklist.map((item) => (
                  <li key={item} className="flex gap-3 text-text-muted">
                    <span className="material-icons-outlined mt-0.5 text-primary">
                      check_circle
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </section>

            <section className="mt-12 rounded-[2rem] bg-background-dark p-6 text-white md:p-8">
              <p className="text-sm font-black uppercase tracking-[0.25em] text-primary">
                AE Gebäudeservice
              </p>
              <h2 className="mt-3 text-3xl font-black tracking-tight">
                {post.ctaTitle}
              </h2>
              <p className="mt-4 text-gray-300">{post.ctaText}</p>
              <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                <a
                  href="tel:+491757540841"
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-primary px-5 py-4 font-black uppercase tracking-wider text-white transition-transform hover:scale-105"
                >
                  <span className="material-icons-outlined">phone</span>
                  0175 75 40 841
                </a>
                <a
                  href="/#quote"
                  className="inline-flex items-center justify-center rounded-xl border-2 border-white/20 px-5 py-4 font-black uppercase tracking-wider text-white hover:bg-white hover:text-black"
                >
                  Angebot anfragen
                </a>
              </div>
            </section>
          </div>

          <aside className="lg:sticky lg:top-28 lg:self-start">
            <div className="rounded-[2rem] bg-white p-6 shadow-lg ring-1 ring-black/5">
              <div className="mb-5 flex items-center gap-3">
                <span className="material-icons-outlined rounded-full bg-primary/10 p-3 text-primary">
                  {post.icon}
                </span>
                <div>
                  <p className="text-xs font-black uppercase tracking-widest text-primary">
                    Thema
                  </p>
                  <p className="font-black">{post.category}</p>
                </div>
              </div>
              <div className="space-y-3 border-t border-gray-200 pt-5 text-sm text-text-muted">
                <p>
                  <strong className="text-text-main">Status:</strong>{" "}
                  {post.status === "published" ? "veröffentlicht" : "geplant"}
                </p>
                <p>
                  <strong className="text-text-main">Datum:</strong>{" "}
                  {formatBlogDate(post.date)}
                </p>
                <p>
                  <strong className="text-text-main">Umfang:</strong> ca. {getPostWordCount(post)} Wörter
                </p>
              </div>
            </div>

            <div className="mt-6 rounded-[2rem] bg-background-dark p-6 text-white shadow-lg">
              <h2 className="text-xl font-black">Weitere Beiträge</h2>
              <div className="mt-5 space-y-4">
                {relatedPosts.map((item) => (
                  <Link
                    key={item.slug}
                    href={`/blog/${item.slug}`}
                    className="block rounded-xl border border-white/10 p-4 transition-colors hover:bg-white/10"
                  >
                    <p className="text-xs font-black uppercase tracking-widest text-primary">
                      {item.category}
                    </p>
                    <h3 className="mt-2 font-black leading-snug">{item.title}</h3>
                  </Link>
                ))}
              </div>
            </div>
          </aside>
        </div>
      </article>
    </main>
  );
}
