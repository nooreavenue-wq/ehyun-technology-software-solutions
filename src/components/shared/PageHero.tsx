import Link from "next/link";
import { ChevronRight } from "lucide-react";

type Crumb = { label: string; href?: string };

export default function PageHero({
  eyebrow,
  title,
  description,
  crumbs,
}: {
  eyebrow: string;
  title: string;
  description?: string;
  crumbs: Crumb[];
}) {
  return (
    <section className="relative pt-40 pb-20 lg:pt-48 lg:pb-24 bg-grid-fade overflow-hidden">
      <div className="container relative">
        <nav aria-label="Breadcrumb" className="flex items-center flex-wrap gap-1.5 text-[11px] tracking-wider uppercase text-paper/40 mb-7">
          {crumbs.map((c, i) => (
            <span key={c.label} className="flex items-center gap-1.5">
              {i > 0 && <ChevronRight size={11} />}
              {c.href ? (
                <Link href={c.href} className="hover:text-signal-light transition-colors">
                  {c.label}
                </Link>
              ) : (
                <span className="text-signal-light">{c.label}</span>
              )}
            </span>
          ))}
        </nav>
        <p className="eyebrow mb-4">{eyebrow}</p>
        <h1 className="font-display font-semibold text-4xl sm:text-5xl lg:text-6xl text-paper leading-[1.05] max-w-3xl">
          {title}
        </h1>
        {description && <p className="mt-6 text-paper/55 max-w-xl leading-relaxed text-lg">{description}</p>}
      </div>
    </section>
  );
}
