"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";
import LanguageSwitcher from "@/components/shared/LanguageSwitcher";
import ThemeToggle from "@/components/shared/ThemeToggle";
import Logo from "@/assets/Logo/logoNav.png";
import Image from "next/image";
const navLinks = [
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Technology", href: "/technology" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Process", href: "/process" },
  // { label: "Industries", href: "/industries" },
  { label: "Partnership", href: "/partnership" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <header
        className={cn(
          "fixed top-0 inset-x-0 z-50 transition-all duration-400 ease-luxe",
          scrolled || open ? "bg-ink/90 backdrop-blur-md border-b border-ink-line" : "bg-transparent"
        )}
      >
        <div className="container flex items-center justify-between h-18 lg:h-20">
          <Link href="/" className="flex flex-col items-center font-display text-xl font-semibold text-paper">
            <Image src={Logo} alt="EHYUN Logo" width={3200} height={3200} className="w-[240px] h-[140px] mt-4" /> 
     
          
          </Link>
           

          <nav className="hidden lg:flex items-center gap-7">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href} className="text-[13px] font-medium text-paper/65 hover:text-paper transition-colors duration-300">
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="hidden lg:flex items-center gap-4">
            <ThemeToggle />
            <LanguageSwitcher />
            <Link href="/contact" className="btn-primary">
              Start a Project <ArrowUpRight size={15} />
            </Link>
          </div>

          <button aria-label="Open menu" onClick={() => setOpen(true)} className="lg:hidden text-paper p-2 -mr-2">
            <Menu size={24} strokeWidth={1.75} />
          </button>
        </div>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35 }}
            className="fixed inset-0 z-[60] bg-ink flex flex-col"
          >
            <div className="container flex items-center justify-between h-18">
              <Link href="/" onClick={() => setOpen(false)} className="flex items-center gap-2 font-display text-xl font-semibold text-paper">
                <span className="w-8 h-8 bg-signal-gradient rounded-sm flex items-center justify-center text-[13px] font-bold text-ink">E</span>
                <span className="notranslate" translate="no">EHYUN</span>
              </Link>
              <button aria-label="Close menu" onClick={() => setOpen(false)} className="text-paper p-2 -mr-2">
                <X size={24} strokeWidth={1.75} />
              </button>
            </div>
            <div className="container pt-2 flex items-center justify-between gap-3">
              <LanguageSwitcher variant="mobile" />
              <ThemeToggle variant="mobile" />
            </div>
            <nav className="flex-1 container flex flex-col justify-center gap-1">
              {[...navLinks, { label: "Contact", href: "/contact" }].map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.06 * i, duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                >
                  <Link href={link.href} onClick={() => setOpen(false)} className="block font-display text-3xl sm:text-4xl py-2.5 text-paper hover:text-signal-light transition-colors">
                    {link.label}
                  </Link>
                </motion.div>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
