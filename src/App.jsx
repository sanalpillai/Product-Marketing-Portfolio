// App.jsx
import { motion } from "framer-motion";
import Hero from "./components/Hero";
import Experience from "./components/Experience";
import CaseStudies from "./components/CaseStudies";
import VisualWork from "./components/VisualWork";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-50">
      {/* Background gradients / parallax layers */}
      <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-32 -left-40 h-96 w-96 rounded-full bg-emerald-500/20 blur-3xl" />
        <div className="absolute top-40 -right-24 h-[28rem] w-[28rem] rounded-full bg-amber-500/15 blur-3xl" />
        <div className="absolute bottom-0 left-1/3 h-80 w-80 rounded-full bg-sky-500/10 blur-3xl" />
      </div>

      <div className="mx-auto flex max-w-6xl flex-col gap-24 px-4 pb-20 pt-10 md:px-8 md:pt-16">
        <Hero />
        <Experience />
        <CaseStudies />
        <VisualWork />
        <Contact />
      </div>
    </div>
  );
}

export default App;
