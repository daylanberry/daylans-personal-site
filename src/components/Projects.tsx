import React from "react";
import { Calendar, ChefHat, ListChecks, Lock, Smartphone } from "lucide-react";
import { projects } from "../data/portfolioData";
import { loadlightMedia, suChefMedia, type MediaItem } from "../data/mediaAssets";
import MediaCarousel from "./MediaCarousel";
import "./Projects.css";

const projectProfiles: Record<
  string,
  {
    className: string;
    eyebrow: string;
    icon: React.ReactNode;
    media: MediaItem[];
    mediaTitle: string;
  }
> = {
  "Loadlight - Voice-first Todo App": {
    className: "loadlight",
    eyebrow: "iOS AI product build",
    icon: <ListChecks size={24} />,
    media: loadlightMedia,
    mediaTitle: "App screens and widget flow",
  },
  "SuChef - Recipe Organizer": {
    className: "suchef",
    eyebrow: "iOS product build",
    icon: <ChefHat size={24} />,
    media: suChefMedia,
    mediaTitle: "Screens and product flows",
  },
};

const Projects: React.FC = () => {
  return (
    <section id="projects" className="projects">
      <div className="projects-container">
        <div className="section-header section-header-left">
          <span className="section-eyebrow">Selected work</span>
          <h2 className="section-title">A product case study, not a toy grid.</h2>
          <p className="section-subtitle">
            Recent independent work showing product thinking, mobile craft, and
            full-stack ownership.
          </p>
        </div>

        <div className="projects-grid">
          {projects.map((project, index) => {
            const profile = projectProfiles[project.name] ?? {
              className: "default",
              eyebrow: "Product build",
              icon: <Smartphone size={24} />,
              media: [] as MediaItem[],
              mediaTitle: "Screens and product flows",
            };

            return (
              <article
                key={index}
                className={`project-card project-card-${profile.className}`}
              >
                <div className="project-header">
                  <div className={`project-icon ${profile.className}`}>
                    {profile.icon}
                  </div>
                  {project.status && (
                    <div className="project-status">
                      <span className="status-badge">{project.status}</span>
                    </div>
                  )}
                </div>

                <div className="project-content">
                  <div className="project-eyebrow">
                    <Smartphone size={16} />
                    {profile.eyebrow}
                  </div>
                  <h3 className="project-title">{project.name}</h3>
                  <p className="project-description">{project.description}</p>

                  <div className="project-meta">
                    <div className="duration">
                      <Calendar size={16} />
                      <span>{project.duration}</span>
                    </div>
                    <div className="duration">
                      <Lock size={16} />
                      <span>Private repo</span>
                    </div>
                  </div>

                  <div className="features">
                    <h4>What it demonstrates</h4>
                    <div className="features-list">
                      {project.features.slice(0, 6).map((feature, featureIndex) => (
                        <div key={featureIndex} className="feature-item">
                          {feature}
                        </div>
                      ))}
                    </div>
                  </div>

                  {project.technologies && (
                    <div className="technologies">
                      <h4>Stack</h4>
                      <div className="tech-stack">
                        {project.technologies.map((tech, techIndex) => (
                          <span key={techIndex} className="tech-badge">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  {profile.media.length > 0 && (
                    <MediaCarousel
                      title={profile.mediaTitle}
                      items={profile.media}
                    />
                  )}
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Projects;
