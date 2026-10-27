import { ExternalLink, Smartphone } from "lucide-react";
import { Reveal, Section } from "./ui";
import { projects } from "../data/content";

export default function Projects() {
  return (
    <Section id="projects" eyebrow="Projects" title="Featured projects">
      <div className="grid gap-6 lg:grid-cols-3">
        {projects.map((p, i) => {
          const links = p.links.filter((l) => l.url);
          return (
            <Reveal key={p.title} delay={i * 0.08} className="glass flex flex-col overflow-hidden transition hover:-translate-y-1 hover:border-violet-400/40">
              {p.image
                ? <img src={p.image} alt={`${p.title} screenshot`} loading="lazy" className="h-44 w-full object-cover" />
                : <div aria-hidden className="flex h-44 items-center justify-center bg-gradient-to-br from-violet-600/30 to-blue-600/20"><Smartphone size={40} className="text-white/70" /></div>}
              <div className="flex flex-1 flex-col p-6">
                <h3 className="text-lg font-semibold text-white">{p.title}</h3>
                <p className="mt-2 flex-1 text-sm text-slate-400">{p.desc}</p>
                <ul className="mt-4 flex flex-wrap gap-2">{p.tags.map((t) => <li key={t} className="tag">{t}</li>)}</ul>
                <div className="mt-5 flex flex-wrap gap-2">
                  {links.length ? links.map((l) => (
                    <a key={l.label} href={l.url} target="_blank" rel="noreferrer" className="btn-ghost !px-3 !py-1.5"><ExternalLink size={14} />{l.label}</a>
                  )) : <span className="text-xs text-slate-500">Links coming soon</span>}
                </div>
              </div>
            </Reveal>
          );
        })}
      </div>
    </Section>
  );
}
