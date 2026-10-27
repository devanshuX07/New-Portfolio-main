import { useEffect, useState } from "react";
import { Menu, X, Download } from "lucide-react";
import { profile, nav } from "../data/content";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const k = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", k);
    return () => window.removeEventListener("keydown", k);
  }, []);
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-ink/80 backdrop-blur-lg">
      <nav aria-label="Main" className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5">
        <a href="#home" className="flex items-center gap-3 font-bold text-white">
          <img src="/logo.png" alt="" className="h-10 w-10 rounded-xl object-cover" />
          <span>{profile.name}</span>
        </a>
        <ul className="hidden items-center gap-6 text-sm lg:flex">
          {nav.map((n) => <li key={n.id}><a href={`#${n.id}`} className="transition hover:text-white">{n.label}</a></li>)}
        </ul>
        <div className="flex items-center gap-2">
          <a href={profile.resume} download className="btn-primary hidden sm:inline-flex"><Download size={16} />Download Resume</a>
          <button className="p-2 lg:hidden" aria-label={open ? "Close menu" : "Open menu"} aria-expanded={open} aria-controls="mobile-menu" onClick={() => setOpen(!open)}>
            {open ? <X /> : <Menu />}
          </button>
        </div>
      </nav>
      {open && (
        <ul id="mobile-menu" className="space-y-1 border-t border-white/10 bg-ink px-5 py-3 lg:hidden">
          {nav.map((n) => <li key={n.id}><a href={`#${n.id}`} onClick={() => setOpen(false)} className="block rounded-lg px-3 py-2 hover:bg-white/10">{n.label}</a></li>)}
          <li><a href={profile.resume} download className="btn-primary mt-2 w-full"><Download size={16} />Download Resume</a></li>
        </ul>
      )}
    </header>
  );
}
