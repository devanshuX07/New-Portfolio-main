import { Code2, Layers, Network, Boxes, Wrench, Smartphone, LayoutTemplate, Plug, Database, Bug, Bot, Rocket, MessageCircle, Sparkles } from "lucide-react";

// ---- EDIT YOUR DETAILS HERE ----
export const profile = {
  name: "Devanshu Bhatti",
  role: "Flutter Developer | Mobile App Developer | Aspiring Software Development Engineer",
  location: "India",
  email: "bhattidevanshu71821@gmail.com",
  github: "https://github.com/DevanshuB007",
  linkedin: "https://www.linkedin.com/in/devanshu-b-3b423a218",
  resume: "/resume.pdf", // replace public/resume.pdf with your file
  formEndpoint: import.meta.env.VITE_FORM_ENDPOINT as string | undefined,
};

export const nav = [
  { label: "Home", id: "home" }, { label: "About", id: "about" }, { label: "Skills", id: "skills" },
  { label: "Experience", id: "experience" }, { label: "Projects", id: "projects" },
  { label: "AI Tools", id: "ai-tools" }, { label: "Contact", id: "contact" },
];

export const skills = [
  { title: "Programming", icon: Code2, items: ["Dart"] },
  { title: "Frameworks", icon: Layers, items: ["Flutter"] },
  { title: "State Management", icon: Boxes, items: ["Provider", "BLoC", "GetX"] },
  { title: "Architecture", icon: Network, items: ["MVC", "MVVM", "Clean Architecture"] },
  { title: "Backend & APIs", icon: Database, items: ["Firebase Authentication", "Cloud Firestore", "Appwrite", "REST APIs", "SharedPreferences"] },
  { title: "Tools", icon: Wrench, items: ["Git", "GitHub", "Android Studio", "VS Code", "Postman"] },
];

export const experience = [
  { role: "Flutter Developer", company: "Shlash Star", period: "Sep 2025 – Present", points: [
    "Develop Flutter applications end to end, from UI implementation to REST API integration.",
    "Built an AI-powered plumbing assistant app with real-time query support via REST API and AI chat integration.",
    "Implemented cruise booking features, including available and pending booking tracking.",
    "Managed application state with Provider and optimized performance and UI responsiveness."] },
  { role: "Flutter Developer Intern", company: "Fuerte Developers, Rajkot", period: "Sep 2024 – May 2025", points: [
    "Developed cross-platform mobile applications using Flutter and Dart.",
    "Integrated Firebase Authentication and Cloud Firestore.",
    "Built reusable UI components and integrated REST APIs."] },
];

// Leave a link as "" to hide its button. Add `image: "/projects/name.png"` (put files in public/projects/).
export const projects = [
  { title: "Shipment Management App", tags: ["Flutter", "Dart", "BLoC", "REST API"],
    desc: "A shipment management app built from scratch with responsive screens for creating, tracking and managing shipments, using BLoC for state and REST APIs for data.",
    image: "", links: [{ label: "GitHub", url: "" }, { label: "Live Demo", url: "" }] },
  { title: "PlumbWise AI — AI-Powered Plumbing Assistant", tags: ["Flutter", "Dart", "AI API", "REST API"],
    desc: "A published Flutter app that helps users identify and resolve common plumbing issues through AI-generated, context-aware responses.",
    image: "", links: [{ label: "Play Store", url: "https://play.google.com/store/apps/details?id=com.plumbwise.app.ai" }, { label: "GitHub", url: "" }] },
  { title: "BlaBlaCar Clone App", tags: ["Flutter", "Dart", "Provider"],
    desc: "A ride-sharing app concept with ride booking, filtering and responsive ride-listing screens, using Provider for state management.",
    image: "", links: [{ label: "GitHub", url: "" }, { label: "Live Demo", url: "" }] },
];

export const aiTools = [
  { name: "Claude AI", icon: Sparkles, desc: "Code generation, debugging, refactoring and documentation." },
  { name: "Google Antigravity", icon: Rocket, desc: "AI-assisted coding and agent-driven development." },
  { name: "ChatGPT", icon: MessageCircle, desc: "Problem-solving, code explanations and debugging." },
  { name: "Google Gemini", icon: Bot, desc: "Coding assistance and research." },
  // Add { name: "GitHub Copilot" ... } or { name: "Google AI Studio" ... } only if you use them.
];

export const abilities = [
  { t: "Flutter App Development", icon: Smartphone }, { t: "Responsive UI Implementation", icon: LayoutTemplate },
  { t: "REST API Integration", icon: Plug }, { t: "State Management", icon: Boxes },
  { t: "Firebase & Backend Integration", icon: Database }, { t: "Debugging & Maintenance", icon: Bug },
  { t: "AI-Assisted Development", icon: Sparkles },
];
