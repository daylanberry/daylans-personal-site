import React from "react";
import {
  Code,
  Smartphone,
  Shield,
  Wrench,
  Palette,
  Database,
} from "lucide-react";
import { skills } from "../data/portfolioData";
import "./Skills.css";

const Skills: React.FC = () => {
  const getCategoryIcon = (category: string) => {
    switch (category.toLowerCase()) {
      case "frontend technologies":
        return <Code size={20} />;
      case "state management & data":
        return <Database size={20} />;
      case "ui/ux & styling":
        return <Palette size={20} />;
      case "development tools":
        return <Wrench size={20} />;
      case "authentication & security":
        return <Shield size={20} />;
      case "mobile development":
        return <Smartphone size={20} />;
      default:
        return <Code size={20} />;
    }
  };

  const getCategoryColor = (category: string) => {
    switch (category.toLowerCase()) {
      case "frontend technologies":
        return "blue";
      case "backend & databases":
        return "green";
      case "apis & data management":
        return "teal";
      case "cloud & devops":
        return "orange";
      case "testing & quality assurance":
        return "purple";
      case "ui/ux & styling":
        return "pink";
      case "authentication & security":
        return "red";
      case "mobile & ai/ml":
        return "indigo";
      default:
        return "blue";
    }
  };

  return (
    <section id="skills" className="skills">
      <div className="skills-container">
        <div className="section-header">
          <h2 className="section-title">Technical Skills</h2>
          <p className="section-subtitle">
            A comprehensive toolkit for building modern web and mobile
            applications
          </p>
        </div>

        <div className="skills-grid">
          {skills.map((skillCategory, index) => (
            <div key={index} className="skill-category">
              <div className="category-header">
                <div
                  className={`category-icon ${getCategoryColor(
                    skillCategory.category
                  )}`}
                >
                  {getCategoryIcon(skillCategory.category)}
                </div>
                <h3 className="category-title">{skillCategory.category}</h3>
              </div>

              <div className="skills-pills">
                {skillCategory.items.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className={`skill-pill ${getCategoryColor(
                      skillCategory.category
                    )}`}
                    style={{
                      animationDelay: `${skillIndex * 0.1}s`,
                    }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="skills-summary">
          <div className="summary-card">
            <h3>What I Bring to the Table</h3>
            <div className="highlights-grid">
              <div className="highlight-item">
                <div className="highlight-icon performance">🚀</div>
                <div className="highlight-content">
                  <h4>Performance Focused</h4>
                  <p>
                    Optimized user experiences with biometric auth and seamless
                    flows
                  </p>
                </div>
              </div>
              <div className="highlight-item">
                <div className="highlight-icon problem-solver">🔧</div>
                <div className="highlight-content">
                  <h4>Problem Solver</h4>
                  <p>Integrated third-party solutions under tight deadlines</p>
                </div>
              </div>
              <div className="highlight-item">
                <div className="highlight-icon full-stack">📱</div>
                <div className="highlight-content">
                  <h4>Full-Stack Mindset</h4>
                  <p>
                    From web to mobile, CMS integration to authentication flows
                  </p>
                </div>
              </div>
              <div className="highlight-item">
                <div className="highlight-icon modern">⚡</div>
                <div className="highlight-content">
                  <h4>Modern Tools</h4>
                  <p>
                    Always learning and implementing the latest technologies
                  </p>
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
