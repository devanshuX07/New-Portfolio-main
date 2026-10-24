import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Download } from "lucide-react";
import { profile } from "../data/content";

const code = `class DevanshuApp extends StatelessWidget {
  Widget build(BuildContext context) {
    return MaterialApp(
      home: Scaffold(
        body: Text('Flutter + REST + AI'),
      ),
    );
  }
}`;

export default function Hero() {
  const socials = [
    { l: "GitHub", h: profile.github, i: Github }, { l: "LinkedIn", h: profile.linkedin, i: Linkedin },
    { l: "Email", h: `mailto:${profile.email}`, i: Mail },
  ];
  return (
    <section id="home" className="relative mx-auto grid max-w-6xl items-center gap-12 px-5 pb-16 pt-16 lg:grid-cols-2 lg:pt-24">
      <div aria-hidden className="pointer-events-none absolute -top-10 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-violet-600/25 blur-[110px]" />
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="relative">
        <p className="tag inline-block">Open to Flutter &amp; SDE opportunities</p>
        <h1 className="mt-5 text-4xl font-extrabold leading-tight text-white sm:text-5xl lg:text-6xl">
          Building Modern Mobile Experiences with <span className="grad-text">Flutter.</span>
        </h1>
        <p className="mt-5 max-w-xl text-lg text-slate-400">
          I'm {profile.name}, a Flutter Developer with 1.5+ years of experience building responsive mobile applications, integrating APIs, and developing scalable application features.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <a href="#projects" className="btn-primary">View My Projects</a>
          <a href={profile.resume} download className="btn-ghost"><Download size={16} />Download Resume</a>
          <a href="#contact" className="btn-ghost">Contact Me</a>
        </div>
        <div className="mt-8 flex gap-3">
          {socials.map(({ l, h, i: Icon }) => (
            <a key={l} href={h} aria-label={l} target={l === "Email" ? undefined : "_blank"} rel="noreferrer" className="glass p-3 transition hover:text-white hover:shadow-lg hover:shadow-violet-500/20"><Icon size={20} /></a>
          ))}
        </div>
      </motion.div>
      <motion.div initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.7, delay: 0.15 }} className="relative" aria-hidden>
        <div className="absolute -inset-2 rounded-3xl bg-gradient-to-tr from-violet-600/40 to-blue-600/40 blur-2xl" />
        <div className="glass relative overflow-hidden bg-card/80">
          <div className="flex gap-2 border-b border-white/10 px-4 py-3">
            <span className="h-3 w-3 rounded-full bg-red-400/70" /><span className="h-3 w-3 rounded-full bg-yellow-400/70" /><span className="h-3 w-3 rounded-full bg-green-400/70" />
            <span className="ml-2 text-xs text-slate-500">main.dart</span>
          </div>
          <pre className="overflow-x-auto p-5 text-xs leading-6 text-violet-200 sm:text-sm"><code>{code}</code></pre>
        </div>
      </motion.div>
    </section>
  );
}
