import React from "react";
import { Calendar } from "lucide-react";
import { experiences } from "../data/portfolioData";
import "./Experience.css";

const Experience: React.FC = () => {
  return (
    <section id="experience" className="experience">
      <div className="experience-container">
        <div className="section-header">
          <h2 className="section-title">Work Experience</h2>
          <p className="section-subtitle">
            Building scalable frontend solutions and user-centric applications
          </p>
        </div>

        <div className="experience-timeline">
          {experiences.map((exp, index) => (
            <div key={index} className="experience-item">
              <div className="timeline-marker"></div>

              <div className="experience-card">
                <div className="experience-header">
                  <div className="company-info">
                    <h3 className="company-name">{exp.company}</h3>
                    <h4 className="position-title">{exp.position}</h4>
                  </div>

                  <div className="experience-meta">
                    <div className="duration">
                      <Calendar size={16} />
                      <span>{exp.duration}</span>
                    </div>
                  </div>
                </div>

                <div className="achievements">
                  <h5>Key Achievements:</h5>
                  <ul className="achievements-list">
                    {exp.achievements.map((achievement, achievementIndex) => (
                      <li key={achievementIndex} className="achievement-item">
                        {achievement}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="technologies">
                  <div className="tech-badge">React</div>
                  <div className="tech-badge">TypeScript</div>
                  <div className="tech-badge">Next.js</div>
                  <div className="tech-badge">React Native</div>
                  <div className="tech-badge">Biometric Auth</div>
                  <div className="tech-badge">CMS Integration</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
