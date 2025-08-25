import { useState } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import { Analytics } from "@vercel/analytics/react";
import "./App.css";
import "./mobile-emergency-fix.css";

function App() {
  const [activeSection, setActiveSection] = useState("about");

  const handleSectionChange = (section: string) => {
    setActiveSection(section);
    // Smooth scroll to section
    const element = document.getElementById(section);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="App">
      <Analytics />
      <Header
        activeSection={activeSection}
        onSectionChange={handleSectionChange}
      />
      <main>
        <Hero />
        <Experience />
        <Projects />
        <Skills />
        <Contact />
      </main>
    </div>
  );
}

export default App;
