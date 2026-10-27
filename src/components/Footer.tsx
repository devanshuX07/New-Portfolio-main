import { ArrowUp, Github, Linkedin, Mail } from "lucide-react";
import { profile } from "../data/content";

export default function Footer() {
  return (
    <footer className="border-t border-white/10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-5 py-8 text-sm sm:flex-row">
        <div className="text-center sm:text-left">
          <p className="font-semibold text-white">{profile.name}</p>
          <p className="text-slate-500">Flutter Developer · © {new Date().getFullYear()}</p>
        </div>
        <div className="flex items-center gap-3">
          <a href={profile.github} aria-label="GitHub" target="_blank" rel="noreferrer"><Github size={18} /></a>
          <a href={profile.linkedin} aria-label="LinkedIn" target="_blank" rel="noreferrer"><Linkedin size={18} /></a>
          <a href={`mailto:${profile.email}`} aria-label="Email"><Mail size={18} /></a>
          <a href="#home" className="btn-ghost !px-3 !py-1.5"><ArrowUp size={14} />Back to top</a>
        </div>
      </div>
    </footer>
  );
}
