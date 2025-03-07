import React, { useState, useEffect } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [visible, setVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  // Control navbar visibility based on scroll direction
  useEffect(() => {
    const controlNavbar = () => {
      const currentScrollY = window.scrollY;
      
      // Always show navbar when at top of page
      if (currentScrollY < 50) {
        setVisible(true);
        setLastScrollY(currentScrollY);
        return;
      }
      
      // Determine scroll direction and update visibility
      if (currentScrollY < lastScrollY) {
        // Scrolling UP - show navbar
        setVisible(true);
      } else {
        // Scrolling DOWN - hide navbar
        setVisible(false);
      }
      
      // Update the last scroll position
      setLastScrollY(currentScrollY);
    };

    // Add scroll event listener
    window.addEventListener('scroll', controlNavbar);
    
    // Clean up
    return () => {
      window.removeEventListener('scroll', controlNavbar);
    };
  }, [lastScrollY]);

  return (
    <nav className={`navbar ${visible ? "navbar-show" : "navbar-hide"}`}>
      <div className="navbar-container">
        <div className="navbar-content">
          <div className="navbar-logo">
            <span>Yassine K.</span>
          </div>

          <div className="navbar-links-desktop">
            <NavLink href="#about">About</NavLink>
            <NavLink href="#education">Education</NavLink>
            <NavLink href="#experience">Experience</NavLink>
            <NavLink href="#projects">Projects</NavLink>
            <NavLink href="#extracurriculars">Extracurriculars</NavLink>
            <NavLink href="#contact">Contact</NavLink>
          </div>

          <button 
            className="menu-button"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <div className="hamburger">
              <span></span>
              <span></span>
              <span></span>
            </div>
          </button>
        </div>

        {isMenuOpen && (
          <div className="navbar-links-mobile">
            <NavLink href="#about" mobile onClick={closeMenu}>About</NavLink>
            <NavLink href="#education" mobile onClick={closeMenu}>Education</NavLink>
            <NavLink href="#experience" mobile onClick={closeMenu}>Experience</NavLink>
            <NavLink href="#projects" mobile onClick={closeMenu}>Projects</NavLink>
            <NavLink href="#extracurriculars" mobile onClick={closeMenu}>Extracurriculars</NavLink>
            <NavLink href="#contact" mobile onClick={closeMenu}>Contact</NavLink>
          </div>
        )}
      </div>
    </nav>
  );
};

const NavLink = ({ href, children, mobile, onClick }) => (
  <a 
    href={href} 
    className={`nav-link ${mobile ? 'mobile' : ''}`}
    onClick={onClick}
  >
    {children}
  </a>
);

export default Navbar;