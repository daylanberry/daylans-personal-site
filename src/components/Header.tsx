import React from "react";
import { Github, Linkedin, Mail, Menu, X } from "lucide-react";
import "./Header.css";

interface HeaderProps {
  activeSection: string;
  onSectionChange: (section: string) => void;
}

const Header: React.FC<HeaderProps> = ({ activeSection, onSectionChange }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

  const navItems = [
    { id: "about", label: "About" },
    { id: "experience", label: "Experience" },
    { id: "projects", label: "Work" },
    { id: "skills", label: "Stack" },
    { id: "contact", label: "Contact" },
  ];

  const handleNavClick = (sectionId: string) => {
    onSectionChange(sectionId);
    setIsMobileMenuOpen(false);
  };

  return (
    <header className="header">
      <div className="header-container">
        <button className="logo" onClick={() => handleNavClick("about")}>
          <span className="logo-mark">DB</span>
          <span className="logo-copy">
            <strong>Daylan Berry</strong>
            <small>Software Engineer</small>
          </span>
        </button>

        <nav className="desktop-nav" aria-label="Primary navigation">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNavClick(item.id)}
              className={`nav-link ${activeSection === item.id ? "active" : ""}`}
            >
              {item.label}
            </button>
          ))}
        </nav>

        <div className="social-links" aria-label="Social links">
          <a
            href="https://github.com/daylanberry"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            <Github size={20} />
          </a>
          <a
            href="https://www.linkedin.com/in/daylan-berry-389ba790/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <Linkedin size={20} />
          </a>
          <a href="mailto:daylanberry@gmail.com" aria-label="Email">
            <Mail size={20} />
          </a>
        </div>

        <button
          className="mobile-menu-toggle"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label={isMobileMenuOpen ? "Close navigation" : "Open navigation"}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {isMobileMenuOpen ? (
        <nav className="mobile-nav" aria-label="Mobile navigation">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNavClick(item.id)}
              className={`mobile-nav-link ${
                activeSection === item.id ? "active" : ""
              }`}
            >
              {item.label}
            </button>
          ))}
          <div className="mobile-social-links">
            <a
              href="https://github.com/daylanberry"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              <Github size={20} />
            </a>
            <a
              href="https://www.linkedin.com/in/daylan-berry-389ba790/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
            </a>
            <a href="mailto:daylanberry@gmail.com" aria-label="Email">
              <Mail size={20} />
            </a>
          </div>
        </nav>
      ) : null}
    </header>
  );
};

export default Header;
