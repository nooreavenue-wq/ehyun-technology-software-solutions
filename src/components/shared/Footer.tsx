import Link from "next/link";
import { Linkedin, Mail, MapPin } from "lucide-react";
import Logo from "@/assets/Logo/logoNav.png";
import Image from "next/image";
const columns = [
  {
    title: "Company",
    links: [
      { label: "About", href: "/about" },
      { label: "Process", href: "/process" },
      { label: "Partnership", href: "/partnership" },
      { label: "Contact", href: "/contact" },
    ],
  },
  {
    title: "Work",
    links: [
      { label: "Services", href: "/services" },
      { label: "Technology", href: "/technology" },
      { label: "Portfolio", href: "/portfolio" },
      // { label: "Industries", href: "/industries" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="bg-ink border-t border-ink-line">
      <div className="container section-pad !py-16">
        <div className="grid grid-cols-1 lg:grid-cols-[1.5fr_1fr_1fr_1.2fr] gap-12 lg:gap-8">
          <div>
            <Link href="/" className="flex items-center gap-2 font-display text-xl font-semibold text-paper">
            <Image src={Logo} alt="EHYUN Logo" width={3200} height={3200} className="w-[240px] h-[130px]" />
          </Link>

            <p className="mt-5 text-sm text-paper/45 leading-relaxed max-w-xs">
              We don&apos;t just build software. We build technology partnerships.
            </p>
          </div>

          {columns.map((col) => (
            <div key={col.title}>
              <p className="eyebrow mb-5">{col.title}</p>
              <ul className="space-y-3.5">
                {col.links.map((l) => (
                  <li key={l.label}>
                    <Link href={l.href} className="text-sm text-paper/55 hover:text-signal-light transition-colors duration-300">
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div>
            <p className="eyebrow mb-5">Get In Touch</p>
            <ul className="space-y-3.5 text-sm text-paper/55">
              <li className="flex items-center gap-2.5">
                <Mail size={14} className="text-signal-light shrink-0" />
                <a href="mailto:hello@ehyun.io" className="hover:text-signal-light transition-colors">hello@ehyun.io</a>
              </li>
              <li className="flex items-center gap-2.5">
                <MapPin size={14} className="text-signal-light shrink-0" />
                Bangladesh
              </li>
              <li className="flex items-center gap-2.5">
                <Linkedin size={14} className="text-signal-light shrink-0" />
                <a href="#" className="hover:text-signal-light transition-colors">LinkedIn</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="hairline my-10" />

        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs text-paper/35">
          <p>&copy; {new Date().getFullYear()} Ehyun. All rights reserved.</p>
          <p>Technology &amp; Software Solutions</p>
        </div>
      </div>
    </footer>
  );
}
