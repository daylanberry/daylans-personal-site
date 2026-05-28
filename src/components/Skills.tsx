import React from "react";
import {
  Code,
  Database,
  Gauge,
  Layers3,
  Palette,
  Shield,
  Smartphone,
  Wrench,
} from "lucide-react";
import { skills } from "../data/portfolioData";
import "./Skills.css";

const Skills: React.FC = () => {
  const getCategoryIcon = (category: string) => {
    switch (category.toLowerCase()) {
      case "frontend technologies":
        return <Code size={20} />;
      case "backend & databases":
      case "apis & data management":
        return <Database size={20} />;
      case "ui/ux & styling":
        return <Palette size={20} />;
      case "cloud & devops":
      case "testing & quality assurance":
        return <Wrench size={20} />;
      case "authentication & security":
        return <Shield size={20} />;
      case "mobile & ai/ml":
        return <Smartphone size={20} />;
      default:
        return <Code size={20} />;
    }
  };

  return (
    <section id="skills" className="skills">
      <div className="skills-container">
        <div className="section-header">
          <span className="section-eyebrow">Toolkit</span>
          <h2 className="section-title">Comfortable across the product surface.</h2>
          <p className="section-subtitle">
            Strongest on frontend and mobile, with enough backend and deployment
            experience to keep feature work moving.
          </p>
        </div>

        <div className="skills-grid">
          {skills.map((skillCategory, index) => (
            <article key={index} className="skill-category">
              <div className="category-header">
                <div className="category-icon">
                  {getCategoryIcon(skillCategory.category)}
                </div>
                <h3 className="category-title">{skillCategory.category}</h3>
              </div>

              <div className="skills-pills">
                {skillCategory.items.map((skill, skillIndex) => (
                  <span key={skillIndex} className="skill-pill">
                    {skill}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>

        <div className="skills-summary">
          <div className="summary-card">
            <h3>How I tend to work</h3>
            <div className="highlights-grid">
              <div className="highlight-item">
                <div className="highlight-icon">
                  <Gauge size={22} />
                </div>
                <div className="highlight-content">
                  <h4>Performance minded</h4>
                  <p>Fast flows, tidy state, and interfaces that stay calm.</p>
                </div>
              </div>
              <div className="highlight-item">
                <div className="highlight-icon">
                  <Shield size={22} />
                </div>
                <div className="highlight-content">
                  <h4>Reliable by default</h4>
                  <p>Comfortable with auth, identity, and high-stakes paths.</p>
                </div>
              </div>
              <div className="highlight-item">
                <div className="highlight-icon">
                  <Layers3 size={22} />
                </div>
                <div className="highlight-content">
                  <h4>End-to-end ownership</h4>
                  <p>Frontend polish with backend and deployment awareness.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
