import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, MapPin } from "lucide-react";
import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";
import PageHero from "@/components/shared/PageHero";
import Reveal from "@/components/shared/Reveal";
import { projectCategories, getCaseStudiesByCategory } from "@/data/portfolio";

export const metadata: Metadata = {
  title: "Portfolio",
  description: "Real client work and case studies from Ehyun's software development projects — spanning apps, AI products, and UI/UX design across the US, Canada, Saudi Arabia, Italy, Switzerland, and beyond.",
};

export default function PortfolioPage() {
  return (
    <>
      <Navbar />
      <main>
        <PageHero
          eyebrow="Selected Work"
          title="Ideas we've turned into products"
          description="Real projects delivered for clients across the US, Canada, the Middle East, and Europe — spanning apps, AI platforms, marketplaces, and UI/UX design."
          crumbs={[{ label: "Home", href: "/" }, { label: "Portfolio" }]}
        />

        {projectCategories.map((category, ci) => {
          const projects = getCaseStudiesByCategory(category);
          if (projects.length === 0) return null;
          return (
            <section
              key={category}
              className={`section-pad ${ci % 2 === 0 ? "bg-ink" : "bg-ink-surface border-y border-ink-line"} ${ci === 0 ? "pt-0" : ""}`}
            >
              <div className="container">
                <Reveal>
                  <p className="eyebrow mb-3">Category</p>
                  <h2 className="font-display text-2xl sm:text-3xl font-semibold text-paper max-w-xl">
                    {category}
                  </h2>
                </Reveal>

                <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
                  {projects.map((project, i) => (
                    <Reveal key={project.slug} delay={Math.min(i, 6) * 0.05}>
                      <Link href={`/portfolio/${project.slug}`} className="group block card overflow-hidden h-full">
                         <div className="relative aspect-[16/10] overflow-hidden flex items-center justify-center bg-white/5">
                          <Image
                            src={project.image}
                            alt={project.name}
                            sizes="(max-width: 768px) 100vw, 50vw"
                            width={400}
                            height={250}
                            className="object-cover transition-transform duration-700 ease-luxe group-hover:scale-105 rounded-md"
                          />
                        </div>
                        <div className="p-7">
                          <div className="flex items-center gap-3 mb-3 flex-wrap">
                            <span className="pill">{project.industry}</span>
                            <span className="pill">{project.projectType}</span>
                            <span className="inline-flex items-center gap-1 text-[11px] text-paper/40">
                              <MapPin size={11} /> {project.country}
                            </span>
                          </div>
                          <h3 className="font-display text-2xl font-semibold text-paper group-hover:text-signal-light transition-colors">
                            {project.name}
                          </h3>
                          <p className="text-paper/45 text-xs mt-1.5">
                            Client: <span className="text-paper/60">{project.client}</span> &middot; {project.year}
                          </p>
                          <p className="text-paper/50 text-sm mt-3 leading-relaxed line-clamp-2">{project.overview}</p>
                          <span className="inline-flex items-center gap-1 text-xs font-medium text-signal-light mt-5">
                            Read Case Study <ArrowUpRight size={13} />
                          </span>
                        </div>
                      </Link>
                    </Reveal>
                  ))}
                </div>
              </div>
            </section>
          );
        })}
      </main>
      <Footer />
    </>
  );
}
