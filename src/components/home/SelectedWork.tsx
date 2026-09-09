import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, MapPin } from "lucide-react";
import { caseStudies } from "@/data/portfolio";
import SectionHeading from "@/components/shared/SectionHeading";
import Reveal from "@/components/shared/Reveal";

const featuredSlugs = ["violet", "trusted-handyman", "sitenorm"];

export default function SelectedWork() {
  const featured = featuredSlugs
    .map((slug) => caseStudies.find((c) => c.slug === slug))
    .filter((c): c is (typeof caseStudies)[number] => Boolean(c));

  return (
    <section className="section-pad bg-ink-surface border-y border-ink-line">
      <div className="container">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6">
          <Reveal>
            <SectionHeading eyebrow="Selected Work" title="Ideas we've turned into products" />
          </Reveal>
          <Reveal delay={0.1}>
            <Link href="/portfolio" className="btn-outline whitespace-nowrap">
              View Portfolio
            </Link>
          </Reveal>
        </div>

        <div className="mt-14 grid grid-cols-1 lg:grid-cols-3 gap-6">
          {featured.map((project, i) => (
            <Reveal key={project.slug} delay={i * 0.08}>
              <Link href={`/portfolio/${project.slug}`} className="group block">
                <div className="relative aspect-[4/3] overflow-hidden flex justify-center items-center ">
                  <Image
                    src={project.image}
                    alt={project.name}
                    // fill
                    // sizes="(max-width: 1024px) 100vw, 33vw"
                    width={380}
                    height={300}
                    className="object-cover transition-transform duration-700 ease-luxe group-hover:scale-105 !rounded-xl p-5"
                  />
                 <div className="!absolute inset-0  group-hover:bg-ink/10 transition-colors" />
                </div>
                <div className="flex items-center justify-between mt-5 mb-2">
                  <p className="eyebrow text-[10px]">{project.industry}</p>
                  <span className="inline-flex items-center gap-1 text-[10px] text-paper/40">
                    <MapPin size={10} /> {project.country}
                  </span>
                </div>
                <h3 className="font-display text-xl font-semibold text-paper group-hover:text-signal-light transition-colors">
                  {project.name}
                </h3>
                <p className="text-paper/45 text-sm mt-2 leading-relaxed line-clamp-2">{project.overview}</p>
                <span className="inline-flex items-center gap-1 text-xs font-medium text-signal-light mt-4">
                  Read Case Study <ArrowUpRight size={13} />
                </span>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
