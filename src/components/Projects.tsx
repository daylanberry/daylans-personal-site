import React from "react";
import { Calendar, ExternalLink, Github, Smartphone } from "lucide-react";
import { projects } from "../data/portfolioData";
import { suChefMedia } from "../data/mediaAssets";
import MediaCarousel from "./MediaCarousel";
import "./Projects.css";

const Projects: React.FC = () => {
  return (
    <section id="projects" className="projects">
      <div className="projects-container">
        <div className="section-header">
          <h2 className="section-title">Featured Projects</h2>
          <p className="section-subtitle">
            Personal projects showcasing mobile development and full-stack
            capabilities
          </p>
        </div>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={index} className="project-card">
              <div className="project-header">
                <div className="project-icon">
                  <Smartphone size={24} />
                </div>
                <div className="project-status">
                  <span className="status-badge">{project.status}</span>
                </div>
              </div>

              <div className="project-content">
                <h3 className="project-title">{project.name}</h3>
                <p className="project-description">{project.description}</p>

                <div className="project-meta">
                  <div className="duration">
                    <Calendar size={16} />
                    <span>{project.duration}</span>
                  </div>
                </div>

                <div className="features">
                  <h4>Key Features:</h4>
                  <ul className="features-list">
                    {project.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="feature-item">
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                {project.technologies && (
                  <div className="technologies">
                    <h4>Technologies:</h4>
                    <div className="tech-stack">
                      {project.technologies.map((tech, techIndex) => (
                        <span key={techIndex} className="tech-badge">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {/* Add MediaCarousel for SuChef project */}
                {project.name === "SuChef - Recipe Organizer" && (
                  <MediaCarousel
                    title="App Screenshots & Demo Videos"
                    items={suChefMedia}
                  />
                )}
              </div>

              <div className="project-actions">
                <button className="btn btn-primary" disabled>
                  <ExternalLink size={16} />
                  TestFlight Only
                </button>
                <button className="btn btn-secondary" disabled>
                  <Github size={16} />
                  Private Repo
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
