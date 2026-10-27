import { motion } from "framer-motion";
import type { ReactNode } from "react";

export const Reveal = ({ children, delay = 0, className = "" }: { children: ReactNode; delay?: number; className?: string }) => (
  <motion.div className={className} initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-60px" }} transition={{ duration: 0.5, delay }}>{children}</motion.div>
);

export const Section = ({ id, eyebrow, title, children }: { id: string; eyebrow: string; title: string; children: ReactNode }) => (
  <section id={id} className="mx-auto max-w-6xl px-5 py-20">
    <Reveal>
      <p className="text-sm font-semibold uppercase tracking-widest text-violet-400">{eyebrow}</p>
      <h2 className="mt-2 text-3xl font-bold text-white sm:text-4xl">{title}</h2>
    </Reveal>
    <div className="mt-10">{children}</div>
  </section>
);
