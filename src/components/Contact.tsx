import { useState, type FormEvent } from "react";
import { Github, Linkedin, Mail, Send } from "lucide-react";
import { Reveal, Section } from "./ui";
import { profile } from "../data/content";

type Status = "idle" | "sending" | "ok" | "error" | "unconfigured";
const fields = ["name", "email", "subject", "message"] as const;
const input = "mt-1 w-full rounded-xl border border-white/10 bg-white/5 px-4 py-2.5 text-white placeholder:text-slate-500 focus:border-violet-400 focus:outline-none";

export default function Contact() {
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [status, setStatus] = useState<Status>("idle");

  const submit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form)) as Record<string, string>;
    const err: Record<string, string> = {};
    if (data.name.trim().length < 2) err.name = "Please enter your name.";
    if (!/^\S+@\S+\.\S+$/.test(data.email)) err.email = "Please enter a valid email.";
    if (data.subject.trim().length < 3) err.subject = "Please add a subject.";
    if (data.message.trim().length < 10) err.message = "Message should be at least 10 characters.";
    setErrors(err);
    if (Object.keys(err).length) return;
    if (!profile.formEndpoint) return setStatus("unconfigured");
    setStatus("sending");
    try {
      const r = await fetch(profile.formEndpoint, { method: "POST", headers: { "Content-Type": "application/json", Accept: "application/json" }, body: JSON.stringify(data) });
      if (!r.ok) throw new Error();
      setStatus("ok"); form.reset();
    } catch { setStatus("error"); }
  };

  const links = [{ l: profile.email, h: `mailto:${profile.email}`, i: Mail }, { l: "LinkedIn", h: profile.linkedin, i: Linkedin }, { l: "GitHub", h: profile.github, i: Github }];
  return (
    <Section id="contact" eyebrow="Contact" title="Let's work together">
      <div className="grid gap-8 lg:grid-cols-5">
        <Reveal className="space-y-3 lg:col-span-2">
          <p className="text-slate-400">Open to Flutter, mobile and entry-level SDE roles. Reach out directly or use the form.</p>
          {links.map(({ l, h, i: Icon }) => (
            <a key={l} href={h} target={h.startsWith("mailto") ? undefined : "_blank"} rel="noreferrer" className="glass flex items-center gap-3 p-4 transition hover:text-white"><Icon size={18} className="text-violet-400" />{l}</a>
          ))}
        </Reveal>
        <Reveal className="lg:col-span-3">
          <form onSubmit={submit} noValidate className="glass space-y-4 p-6">
            {fields.map((f) => (
              <div key={f}>
                <label htmlFor={f} className="text-sm capitalize text-slate-300">{f}</label>
                {f === "message"
                  ? <textarea id={f} name={f} rows={5} className={input} aria-invalid={!!errors[f]} aria-describedby={`${f}-e`} />
                  : <input id={f} name={f} type={f === "email" ? "email" : "text"} className={input} aria-invalid={!!errors[f]} aria-describedby={`${f}-e`} />}
                <p id={`${f}-e`} className="mt-1 text-xs text-red-400">{errors[f]}</p>
              </div>
            ))}
            <button type="submit" disabled={status === "sending"} className="btn-primary disabled:opacity-60"><Send size={16} />{status === "sending" ? "Sending…" : "Send Message"}</button>
            <div role="status" aria-live="polite" className="text-sm">
              {status === "ok" && <p className="text-green-400">Thanks! Your message was sent.</p>}
              {status === "error" && <p className="text-red-400">Something went wrong. Please try again or email me directly.</p>}
              {status === "unconfigured" && <p className="text-amber-300">The contact form isn't connected to a service yet, so nothing was sent. Please email me at <a className="underline" href={`mailto:${profile.email}`}>{profile.email}</a>.</p>}
            </div>
          </form>
        </Reveal>
      </div>
    </Section>
  );
}
