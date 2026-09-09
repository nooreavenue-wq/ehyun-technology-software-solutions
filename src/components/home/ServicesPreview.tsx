import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { services } from "@/data/services";
import SectionHeading from "@/components/shared/SectionHeading";
import Reveal from "@/components/shared/Reveal";

export default function ServicesPreview() {
  const featured = services.slice(0, 6);

  return (
    <section className="section-pad bg-ink">
      <div className="container">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6">
          <Reveal>
            <SectionHeading eyebrow="What We Do" title="End-to-end software development" />
          </Reveal>
          <Reveal delay={0.1}>
            <Link href="/services" className="btn-outline whitespace-nowrap">
              All Services
            </Link>
          </Reveal>
        </div>

        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {featured.map((s, i) => {
            const Icon = s.icon;
            return (
              <Reveal key={s.slug} delay={i * 0.05}>
                <Link href={`/services#${s.slug}`} className="group card p-7 h-full flex flex-col hover:border-signal/40">
                  <span className="w-11 h-11 rounded-md bg-signal/10 flex items-center justify-center text-signal-light mb-6 group-hover:bg-signal/20 transition-colors">
                    <Icon size={20} strokeWidth={1.6} />
                  </span>
                  <h3 className="font-display text-lg font-semibold text-paper">{s.title}</h3>
                  <p className="text-paper/50 text-sm mt-2.5 leading-relaxed flex-1">{s.summary}</p>
                  <span className="inline-flex items-center gap-1 text-xs font-medium text-signal-light mt-5 opacity-0 group-hover:opacity-100 transition-opacity">
                    Learn more <ArrowUpRight size={13} />
                  </span>
                </Link>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
