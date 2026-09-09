import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, Check } from "lucide-react";
import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";
import PageHero from "@/components/shared/PageHero";
import Reveal from "@/components/shared/Reveal";
import { services } from "@/data/services";

export const metadata: Metadata = {
  title: "Services",
  description: "End-to-end software development services — web, mobile, custom software, SaaS, e-commerce, dashboards, AI and automation, integrations, and cloud deployment.",
};

export default function ServicesPage() {
  return (
    <>
      <Navbar />
      <main>
        <PageHero
          eyebrow="What We Do"
          title="End-to-end software development"
          description="Complete software development services designed around the specific requirements of each business."
          crumbs={[{ label: "Home", href: "/" }, { label: "Services" }]}
        />

        <section className="section-pad bg-ink pt-0">
          <div className="container space-y-6">
            {services.map((s, i) => {
              const Icon = s.icon;
              return (
                <Reveal key={s.slug} delay={Math.min(i, 6) * 0.04}>
                  <div id={s.slug} className="card p-8 lg:p-10 scroll-mt-28">
                    <div className="grid grid-cols-1 lg:grid-cols-[auto_1fr] gap-8 items-start">
                      <span className="w-14 h-14 rounded-md bg-signal/10 flex items-center justify-center text-signal-light shrink-0">
                        <Icon size={26} strokeWidth={1.5} />
                      </span>
                      <div>
                        <h2 className="font-display text-2xl lg:text-3xl font-semibold text-paper">{s.title}</h2>
                        <p className="text-paper/55 mt-4 leading-relaxed max-w-2xl">{s.description}</p>
                        <div className="flex flex-wrap gap-x-6 gap-y-2 mt-6">
                          {s.capabilities.map((c) => (
                            <span key={c} className="flex items-center gap-2 text-sm text-paper/60">
                              <Check size={13} className="text-teal shrink-0" /> {c}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </section>

        <section className="section-pad bg-ink-surface border-t border-ink-line">
          <div className="container text-center max-w-xl mx-auto">
            <Reveal>
              <h2 className="font-display text-3xl sm:text-4xl font-semibold text-paper">
                Have a project that doesn&apos;t fit a single category?
              </h2>
              <p className="text-paper/55 mt-4">
                Most real projects combine several of these services. Tell us what you&apos;re
                building and we&apos;ll help you scope it.
              </p>
              <Link href="/contact" className="btn-primary mt-8 inline-flex">
                Start a Project <ArrowUpRight size={16} />
              </Link>
            </Reveal>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
