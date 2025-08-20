import React from "react";
import { Menu, X, Github, Linkedin, Mail } from "lucide-react";
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
    { id: "projects", label: "Projects" },
    { id: "skills", label: "Skills" },
    { id: "contact", label: "Contact" },
  ];

  const handleNavClick = (sectionId: string) => {
    onSectionChange(sectionId);
    setIsMobileMenuOpen(false);
  };

  return (
    <header className="header">
      <div className="header-container">
        <div className="logo">
          <h2>Daylan Berry</h2>
        </div>

        {/* Desktop Navigation */}
        <nav className="desktop-nav">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNavClick(item.id)}
              className={`nav-link ${
                activeSection === item.id ? "active" : ""
              }`}
            >
              {item.label}
            </button>
          ))}
        </nav>

        {/* Social Links */}
        <div className="social-links">
          <a
            href="https://github.com/daylanberry"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Github size={20} />
          </a>
          <a
            href="https://www.linkedin.com/in/daylan-berry-389ba790/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Linkedin size={20} />
          </a>
          <a href="mailto:daylanberry@gmail.com">
            <Mail size={20} />
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="mobile-menu-toggle"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <nav className="mobile-nav">
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
            >
              <Github size={20} />
            </a>
            <a
              href="https://www.linkedin.com/in/daylan-berry-389ba790/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Linkedin size={20} />
            </a>
            <a href="mailto:daylanberry@gmail.com">
              <Mail size={20} />
            </a>
          </div>
        </nav>
      )}
    </header>
  );
};

export default Header;
