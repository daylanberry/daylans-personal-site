import React from "react";
import {
  ArrowUpRight,
  Code2,
  Download,
  MapPin,
  ShieldCheck,
  Smartphone,
} from "lucide-react";
import { personalInfo } from "../data/portfolioData";
import "./Hero.css";

const Hero: React.FC = () => {
  return (
    <section id="about" className="hero">
      <div className="hero-grid-bg" aria-hidden="true" />
      <div className="hero-container">
        <div className="hero-content">
          <div className="hero-text">
            <div className="hero-kicker">
              <span className="hero-kicker-dot" />
              Reno-based engineer building production apps
            </div>

            <h1 className="hero-title">
              Sharp product experiences for real users.
            </h1>

            <p className="hero-lede">{personalInfo.bio[0]}</p>

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
              <a href="#projects" className="btn btn-secondary">
                See Featured Work
                <ArrowUpRight size={18} />
              </a>
            </div>

            <div className="hero-proof-grid" aria-label="Professional highlights">
              <div className="hero-proof">
                <strong>4+ years</strong>
                <span>shipping consumer software</span>
              </div>
              <div className="hero-proof">
                <strong>React Native</strong>
                <span>mobile products in TestFlight</span>
              </div>
              <div className="hero-proof">
                <strong>Regulated flows</strong>
                <span>auth, KYC, identity, rollout work</span>
              </div>
            </div>

            <div className="location">
              <MapPin size={16} />
              <span>{personalInfo.location}</span>
            </div>
          </div>

          <div className="hero-visual" aria-label={`${personalInfo.name} portrait and stack highlights`}>
            <div className="portrait-orbit" aria-hidden="true" />
            <div className="avatar-placeholder">
              <img
                src="/images/general/daylan.jpg"
                alt={personalInfo.name}
                className="avatar-image"
              />
            </div>

            <div className="hero-stack-card hero-stack-card-one">
              <Code2 size={18} />
              <span>React + TypeScript</span>
            </div>
            <div className="hero-stack-card hero-stack-card-two">
              <Smartphone size={18} />
              <span>Mobile-first products</span>
            </div>
            <div className="hero-stack-card hero-stack-card-three">
              <ShieldCheck size={18} />
              <span>Auth systems at scale</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
