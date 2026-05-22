import type { Metadata } from "next";
import Link from "next/link";
import {
  formatBlogDate,
  getPostWordCount,
  plannedBlogPosts,
  publishedBlogPosts,
} from "@/lib/blog";

export const metadata: Metadata = {
  title: "Blog | Reinigungstipps für Gewerbe | AE Gebäudeservice",
  description:
    "Aktuelle Reinigungstipps von AE Gebäudeservice: Grundreinigung, Baureinigung, Glasreinigung, Containerreinigung, Unterhaltsreinigung und Industriereinigung.",
  alternates: { canonical: "/blog" },
};

export default function BlogPage() {
  return (
    <main className="bg-background-light text-text-main">
      <section className="relative overflow-hidden bg-background-dark py-20 text-white md:py-28">
        <div className="absolute right-0 top-0 h-full w-2/3 -skew-x-12 bg-primary/10 translate-x-1/3" />
        <div className="container relative z-10 mx-auto px-4 md:px-6">
          <div className="max-w-4xl">
            <div className="mb-6 inline-flex items-center gap-2 bg-primary px-4 py-2 text-xs font-black uppercase tracking-[0.25em] text-white shadow-lg -rotate-1">
              <span className="material-icons-outlined text-base">article</span>
              AE Gebäudeservice Blog
            </div>
            <h1 className="text-4xl font-black leading-none tracking-tighter md:text-7xl">
              Reinigungstipps für Gewerbe, Baustelle &amp; Objektpflege
            </h1>
            <p className="mt-6 max-w-2xl border-l-4 border-primary pl-5 text-lg leading-relaxed text-gray-300 md:text-xl">
              Praxisnahe Beiträge rund um professionelle Reinigung: von
              Grundreinigung und Baureinigung bis Glasflächen, Containeranlagen
              und laufender Unterhaltsreinigung.
            </p>
          </div>
        </div>
      </section>

      <section className="py-14 md:py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.25em] text-primary">
                Aktuell veröffentlicht
              </p>
              <h2 className="mt-2 text-3xl font-black tracking-tight md:text-5xl">
                5 Blogbeiträge
              </h2>
            </div>
          </div>

          <div className="grid gap-6 lg:grid-cols-3">
            {publishedBlogPosts.map((post, index) => (
              <article
                key={post.slug}
                className={
                  index === 0
                    ? "group overflow-hidden rounded-[2rem] bg-white shadow-xl ring-1 ring-black/5 lg:col-span-2"
                    : "group overflow-hidden rounded-[2rem] bg-white shadow-lg ring-1 ring-black/5"
                }
              >
                <div
                  className={`relative min-h-56 bg-gradient-to-br ${post.coverGradient} p-6 text-white`}
                >
                  <div className="absolute right-5 top-5 rounded-full bg-white/15 p-4 backdrop-blur">
                    <span className="material-icons-outlined text-4xl">
                      {post.icon}
                    </span>
                  </div>
                  <div className="absolute bottom-6 left-6 right-6">
                    <div className="mb-3 flex flex-wrap items-center gap-2 text-xs font-bold uppercase tracking-widest text-white/80">
                      <span>{post.category}</span>
                      <span>•</span>
                      <span>{formatBlogDate(post.date)}</span>
                    </div>
                    <h3 className="text-2xl font-black leading-tight tracking-tight md:text-3xl">
                      {post.title}
                    </h3>
                  </div>
                </div>

                <div className="p-6 md:p-8">
                  <p className="text-sm leading-relaxed text-text-muted md:text-base">
                    {post.excerpt}
                  </p>
                  <div className="mt-6 flex flex-wrap items-center justify-between gap-4 border-t border-gray-200 pt-5">
                    <div className="text-xs font-bold uppercase tracking-widest text-gray-500">
                      {post.readingMinutes} Min. Lesezeit · ca. {getPostWordCount(post)} Wörter
                    </div>
                    <Link
                      href={`/blog/${post.slug}`}
                      className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-black uppercase tracking-wider text-white transition-transform hover:scale-105"
                    >
                      Lesen
                      <span className="material-icons-outlined text-base">
                        arrow_forward
                      </span>
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      

      <section className="bg-background-dark py-14 text-white md:py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid gap-8 rounded-[2rem] border border-white/10 bg-white/5 p-8 md:grid-cols-[1.3fr_0.7fr] md:p-10">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.25em] text-primary">
                Direkte Hilfe
              </p>
              <h2 className="mt-3 text-3xl font-black tracking-tight md:text-5xl">
                Sie brauchen nicht nur Tipps, sondern eine saubere Lösung?
              </h2>
              <p className="mt-5 max-w-2xl text-gray-300">
                Ob Büro, Baustelle, Glasfläche, Containeranlage oder
                Industriefläche: AE Gebäudeservice plant die Reinigung passend
                zum Objekt und zum laufenden Betrieb.
              </p>
            </div>
            <div className="flex flex-col justify-center gap-4">
              <a
                href="tel:+491757540841"
                className="inline-flex items-center justify-center gap-3 rounded-2xl bg-primary px-6 py-5 text-lg font-black uppercase tracking-wider text-white shadow-[0_0_30px_rgba(22,163,74,0.35)] transition-transform hover:scale-105"
              >
                <span className="material-icons-outlined">phone_in_talk</span>
                Jetzt anrufen
              </a>
              <a
                href="/#quote"
                className="inline-flex items-center justify-center rounded-2xl border-2 border-white/20 px-6 py-5 font-black uppercase tracking-wider text-white hover:bg-white hover:text-black"
              >
                Angebot anfragen
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
