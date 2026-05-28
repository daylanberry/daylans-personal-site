import React from "react";
import { Calendar, CheckCircle2, Trophy } from "lucide-react";
import { experiences } from "../data/portfolioData";
import "./Experience.css";

const Experience: React.FC = () => {
  return (
    <section id="experience" className="experience">
      <div className="experience-container">
        <div className="section-header section-header-left">
          <span className="section-eyebrow">Experience</span>
          <h2 className="section-title">Built where correctness matters.</h2>
          <p className="section-subtitle">
            Consumer-facing frontend work, regulated user journeys, and product
            rollouts where the details could not be hand-waved.
          </p>
        </div>

        <div className="experience-timeline">
          {experiences.map((exp, index) => (
            <article key={index} className="experience-card">
              <div className="experience-stamp">
                <Trophy size={20} />
                <span>Production role</span>
              </div>

              <div className="experience-header">
                <div className="company-info">
                  <h3 className="company-name">{exp.company}</h3>
                  <h4 className="position-title">{exp.position}</h4>
                </div>

                <div className="duration">
                  <Calendar size={16} />
                  <span>{exp.duration}</span>
                </div>
              </div>

              <div className="achievements">
                {exp.achievements.map((achievement, achievementIndex) => (
                  <div key={achievementIndex} className="achievement-item">
                    <CheckCircle2 size={18} />
                    <p>{achievement}</p>
                  </div>
                ))}
              </div>

              <div className="technologies">
                <span className="tech-badge">React</span>
                <span className="tech-badge">TypeScript</span>
                <span className="tech-badge">Next.js</span>
                <span className="tech-badge">React Native</span>
                <span className="tech-badge">Biometric Auth</span>
                <span className="tech-badge">CMS Integration</span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
