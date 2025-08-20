import React from "react";
import { MapPin, Download } from "lucide-react";
import { personalInfo } from "../data/portfolioData";
import "./Hero.css";

const Hero: React.FC = () => {
  return (
    <section id="about" className="hero">
      <div className="hero-container">
        <div className="hero-content">
          <div className="hero-text">
            <div className="greeting">
              <span className="wave">👋</span>
              <span>Hello, I'm</span>
            </div>
            <h1 className="hero-title">{personalInfo.name}</h1>
            <h2 className="hero-subtitle">{personalInfo.title}</h2>

            <div className="location">
              <MapPin size={16} />
              <span>{personalInfo.location}</span>
            </div>

            <p className="hero-description">{personalInfo.bio}</p>

            <div className="hero-actions">
              <a 
                href="/Daylan_Berry_Resume.pdf"
                download="Daylan_Berry_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
              >
                <Download size={18} />
                Download Resume
              </a>
              <a href="#projects" className="btn btn-secondary">View My Work</a>
            </div>
          </div>

          <div className="hero-visual">
            <div className="avatar-placeholder">
              <div className="avatar-bg"></div>
              <div className="avatar-text">
                {personalInfo.name
                  .split(" ")
                  .map((name) => name[0])
                  .join("")}
              </div>
            </div>

            {/* Floating tech icons */}
            <div className="floating-icons">
              <div
                className="tech-icon"
                style={{ "--delay": "0s" } as React.CSSProperties}
              >
                ⚛️
              </div>
              <div
                className="tech-icon"
                style={{ "--delay": "0.5s" } as React.CSSProperties}
              >
                📱
              </div>
              <div
                className="tech-icon"
                style={{ "--delay": "1s" } as React.CSSProperties}
              >
                🚀
              </div>
              <div
                className="tech-icon"
                style={{ "--delay": "1.5s" } as React.CSSProperties}
              >
                💻
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
