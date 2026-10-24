import { MotionConfig } from "framer-motion";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { About, Skills, Experience, AITools, WhatICanDo, Resume } from "./components/Sections";

export default function App() {
  return (
    <MotionConfig reducedMotion="user">
      <a href="#about" className="sr-only focus:not-sr-only focus:absolute focus:z-50 focus:bg-white focus:p-2 focus:text-black">Skip to content</a>
      <Navbar />
      <main>
        <Hero /><About /><Skills /><Experience /><Projects /><AITools /><WhatICanDo /><Resume /><Contact />
      </main>
      <Footer />
    </MotionConfig>
  );
}
