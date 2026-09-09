"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight, Check } from "lucide-react";

const capabilities = ["Web", "Mobile", "SaaS", "E-Commerce", "AI & Automation"];

export default function Hero() {
  return (
    <section className="relative pt-40 pb-24 lg:pt-52 lg:pb-32 bg-grid-fade overflow-hidden">
      <div className="container relative">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="eyebrow mb-6"
        >
          Technology &amp; Software Solutions
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="font-display font-semibold leading-[1.05] text-paper text-4xl sm:text-6xl lg:text-7xl max-w-4xl"
        >
          Building digital solutions that drive{" "}
          <span className="bg-signal-gradient bg-clip-text text-transparent">business forward.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="mt-7 max-w-xl text-paper/55 text-lg leading-relaxed"
        >
          Ehyun is a technology and software development company focused on transforming
          business ideas, challenges, and requirements into reliable digital products.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.55 }}
          className="mt-10 flex flex-col sm:flex-row gap-4"
        >
          <Link href="/contact" className="btn-primary">
            Start a Project <ArrowUpRight size={16} />
          </Link>
          <Link href="/portfolio" className="btn-outline">
            View Our Work
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.7 }}
          className="mt-14 flex flex-wrap gap-x-6 gap-y-3"
        >
          {capabilities.map((c) => (
            <span key={c} className="flex items-center gap-2 text-sm text-paper/50">
              <Check size={14} className="text-teal" /> {c}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
