import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ChevronRight, ArrowUpRight, MapPin, Building2 } from "lucide-react";
import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";
import Reveal from "@/components/shared/Reveal";
import { caseStudies, getCaseStudyBySlug } from "@/data/portfolio";

export function generateStaticParams() {
  return caseStudies.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = getCaseStudyBySlug(slug);
  if (!project) return {};
  return { title: project.name, description: project.overview };
}

const sections = (project: NonNullable<ReturnType<typeof getCaseStudyBySlug>>) => [
  { label: "The Challenge", body: project.challenge },
  { label: "The Objective", body: project.objective },
  { label: "Our Approach", body: project.approach },
  { label: "The Solution", body: project.solution },
  { label: "Outcome", body: project.outcome },
];

const linkLabel = (key: string) => {
  switch (key) {
    case "playStore":
      return "View on Google Play";
    case "appStore":
      return "View on the App Store";
    case "website":
      return "Visit Website";
    case "figma":
      return "View Figma Design";
    case "caseStudyDoc":
      return "View Case Study Document";
    default:
      return "View Project";
  }
};

export default async function CaseStudyPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getCaseStudyBySlug(slug);
  if (!project) notFound();

  const related = caseStudies.filter((c) => c.category === project.category && c.slug !== project.slug).slice(0, 3);
  const linkEntries = Object.entries(project.links).filter(([, v]) => Boolean(v)) as [string, string][];

  return (
    <>
      <Navbar />
      <main>
        <section className="relative pt-40 pb-16 lg:pt-48 lg:pb-20 bg-grid-fade">
          <div className="container">
            <nav className="flex items-center gap-1.5 text-[11px] tracking-wider uppercase text-paper/40 mb-7">
              <Link href="/" className="hover:text-signal-light">Home</Link>
              <ChevronRight size={11} />
              <Link href="/portfolio" className="hover:text-signal-light">Portfolio</Link>
              <ChevronRight size={11} />
              <span className="text-signal-light">{project.name}</span>
            </nav>
            <div className="flex items-center gap-3 mb-5 flex-wrap">
              <span className="pill">{project.industry}</span>
              <span className="pill">{project.projectType}</span>
              <span className="pill">{project.role}</span>
            </div>
            <h1 className="font-display font-semibold text-4xl sm:text-5xl lg:text-6xl text-paper leading-[1.05] max-w-3xl">
              {project.name}
            </h1>
            <p className="mt-6 text-paper/55 max-w-xl leading-relaxed text-lg">{project.overview}</p>
            <div className="mt-6 flex items-center gap-6 flex-wrap text-sm text-paper/50">
              <span className="inline-flex items-center gap-1.5">
                <Building2 size={14} className="text-signal-light" /> {project.client}
              </span>
              <span className="inline-flex items-center gap-1.5">
                <MapPin size={14} className="text-signal-light" /> {project.country}
              </span>
              <span>{project.year}</span>
            </div>
          </div>
        </section>

        <section className="bg-ink">
          <div className="container">
           <div className="relative aspect-[16/9] overflow-hidden">
              <Image src={project.image} alt={project.name} width={500} height={500} priority sizes="100vw" className="object-cover rounded-lg" />
            </div>
          </div>
        </section>

        <section className="section-pad bg-ink">
          <div className="container grid grid-cols-1 lg:grid-cols-[1.5fr_1fr] gap-14">
            <div className="space-y-12">
              {sections(project).map((s, i) => (
                <Reveal key={s.label} delay={i * 0.06}>
                  <p className="eyebrow mb-3">{s.label}</p>
                  <p className="text-paper/70 leading-relaxed text-lg">{s.body}</p>
                </Reveal>
              ))}
            </div>

            <div>
              <Reveal delay={0.1}>
                <div className="card p-7 sticky top-28">
                  <p className="eyebrow mb-4">Technologies</p>
                  <div className="flex flex-wrap gap-2 mb-8">
                    {project.technologies.map((t) => (
                      <span key={t} className="pill">{t}</span>
                    ))}
                  </div>
                  <p className="eyebrow mb-2">Client</p>
                  <p className="text-paper text-sm mb-6">{project.client}</p>
                  <p className="eyebrow mb-2">Country</p>
                  <p className="text-paper text-sm mb-6">{project.country}</p>
                  <p className="eyebrow mb-2">Industry</p>
                  <p className="text-paper text-sm mb-6">{project.industry}</p>
                  <p className="eyebrow mb-2">Our Role</p>
                  <p className="text-paper text-sm mb-8">{project.role}</p>

                  {linkEntries.length > 0 && (
                    <div className="mb-8 space-y-2.5">
                      {linkEntries.map(([key, url]) => (
                        <a
                          key={key}
                          href={url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn-outline w-full !py-3 text-xs"
                        >
                          {linkLabel(key)} <ArrowUpRight size={13} />
                        </a>
                      ))}
                    </div>
                  )}

                  <Link href="/contact" className="btn-primary w-full">
                    Start a Similar Project
                  </Link>
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        {related.length > 0 && (
          <section className="section-pad bg-ink-surface border-t border-ink-line">
            <div className="container">
              <p className="eyebrow mb-4">More Work</p>
              <h2 className="font-display text-3xl font-semibold text-paper mb-12">Related Case Studies</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {related.map((c) => (
                  <Link key={c.slug} href={`/portfolio/${c.slug}`} className="group block">
                    <div className="relative aspect-[4/3] overflow-hidden flex justify-center items-center p-10">
                      <Image width={380} height={300} src={c.image} alt={c.name}  sizes="(max-width: 768px) 100vw, 33vw" className=" rounded-md object-cover transition-transform duration-700 group-hover:scale-105" />
                    </div>
                    <h3 className="font-display text-lg font-semibold text-paper mt-4 group-hover:text-signal-light transition-colors">{c.name}</h3>
                    <p className="text-paper/40 text-xs mt-1">{c.client} &middot; {c.country}</p>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}

        <section className="section-pad bg-ink">
          <div className="container text-center max-w-xl mx-auto">
            <Reveal>
              <h2 className="font-display text-3xl sm:text-4xl font-semibold text-paper">Have a similar challenge?</h2>
              <Link href="/contact" className="btn-primary mt-8 inline-flex">
                Talk to Our Team <ArrowUpRight size={16} />
              </Link>
            </Reveal>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
