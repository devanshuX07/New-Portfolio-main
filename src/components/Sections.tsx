import { Download, Eye } from "lucide-react";
import { Reveal, Section } from "./ui";
import { skills, experience, aiTools, abilities, profile } from "../data/content";

export const About = () => (
  <Section id="about" eyebrow="About" title="Hello, I'm Devanshu">
    <Reveal className="glass max-w-3xl space-y-4 p-6 leading-relaxed sm:p-8">
      <p>I'm a Flutter Developer with 1.5+ years of hands-on experience building cross-platform mobile applications with Flutter and Dart, from UI implementation to REST API and backend integration.</p>
      <p>I manage application state with Provider and BLoC, and I care about clean architecture, problem-solving and writing maintainable code. I also use AI tools such as Claude, ChatGPT and Gemini to speed up debugging, refactoring and documentation, while keeping engineering decisions my own.</p>
      <p>I'm currently pursuing an MCA and aiming to grow into a strong software engineer.</p>
    </Reveal>
  </Section>
);

export const Skills = () => (
  <Section id="skills" eyebrow="Skills" title="Technical skills">
    <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
      {skills.map(({ title, icon: Icon, items }, i) => (
        <Reveal key={title} delay={i * 0.05} className="glass p-6 transition hover:border-violet-400/40">
          <Icon className="text-violet-400" />
          <h3 className="mt-3 font-semibold text-white">{title}</h3>
          <ul className="mt-3 flex flex-wrap gap-2">{items.map((s) => <li key={s} className="tag">{s}</li>)}</ul>
        </Reveal>
      ))}
    </div>
  </Section>
);

export const Experience = () => (
  <Section id="experience" eyebrow="Experience" title="Where I've worked">
    <ol className="relative space-y-8 border-l border-white/15 pl-6">
      {experience.map((e) => (
        <Reveal key={e.role + e.period}>
          <li className="relative">
            <span className="absolute -left-[31px] top-2 h-3 w-3 rounded-full bg-violet-500 ring-4 ring-violet-500/20" />
            <div className="glass p-6">
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <h3 className="text-lg font-semibold text-white">{e.role} <span className="text-violet-300">· {e.company}</span></h3>
                <span className="text-sm text-slate-400">{e.period}</span>
              </div>
              <ul className="mt-3 list-disc space-y-1.5 pl-5 marker:text-violet-400">{e.points.map((p) => <li key={p}>{p}</li>)}</ul>
            </div>
          </li>
        </Reveal>
      ))}
    </ol>
  </Section>
);

export const AITools = () => (
  <Section id="ai-tools" eyebrow="Workflow" title="AI tools & development workflow">
    <p className="-mt-6 mb-8 max-w-2xl text-slate-400">AI tools boost my productivity; they support my engineering skills and never replace them.</p>
    <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
      {aiTools.map(({ name, icon: Icon, desc }, i) => (
        <Reveal key={name} delay={i * 0.05} className="glass p-6 transition hover:-translate-y-1 hover:shadow-lg hover:shadow-violet-500/15">
          <span className="inline-flex rounded-xl bg-gradient-to-br from-violet-600 to-blue-600 p-2.5 text-white"><Icon size={20} /></span>
          <h3 className="mt-4 font-semibold text-white">{name}</h3>
          <p className="mt-1 text-sm text-slate-400">{desc}</p>
        </Reveal>
      ))}
    </div>
  </Section>
);

export const WhatICanDo = () => (
  <Section id="services" eyebrow="Services" title="What I can do">
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {abilities.map(({ t, icon: Icon }, i) => (
        <Reveal key={t} delay={i * 0.04} className="glass flex items-center gap-3 p-4"><Icon className="shrink-0 text-blue-400" size={20} /><span className="text-sm text-slate-200">{t}</span></Reveal>
      ))}
    </div>
  </Section>
);

export const Resume = () => (
  <Section id="resume" eyebrow="Resume" title="Take a closer look">
    <Reveal className="glass flex flex-col items-start justify-between gap-6 bg-gradient-to-br from-violet-600/15 to-blue-600/10 p-8 md:flex-row md:items-center">
      <p className="max-w-xl text-lg">A one-page resume covering my experience, skills, projects and education.</p>
      <div className="flex flex-wrap gap-3">
        <a href={profile.resume} download className="btn-primary"><Download size={16} />Download Resume</a>
        <a href={profile.resume} target="_blank" rel="noreferrer" className="btn-ghost"><Eye size={16} />View Resume</a>
      </div>
    </Reveal>
  </Section>
);
