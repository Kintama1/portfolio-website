import React from 'react';
import './Footer.css';
import { Github, Linkedin, Twitter} from 'lucide-react';
import substackIcon from '../assets/substack.svg';
const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer__content">
        <p className="footer__copyright">
          Copyright © {currentYear} Yassine Khayati | Inspiration: <a href="https://mayanigrin.com/" target="_blank" rel="noopener noreferrer">Maya Nigrin Website</a>, 
            <a href="https://zanebookbinder.github.io/" target="_blank" rel="noopener noreferrer"> Zane Bookbinder Website</a>
        </p>
        <div className="social-links">
        <a href="https://x.com/khayati_yassin" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
            <Twitter />
        </a>
        <a href="https://www.linkedin.com/in/yassine-khayati-0a38aa200/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <Linkedin />
        </a>
        <a href="https://github.com/Kintama1" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            <Github />
        </a>
        <a href="https://substack.com/@yassinekhayati?utm_source=profile-page" target="_blank" rel="noopener noreferrer" aria-label="Substack">
            <img src={substackIcon} alt="Substack" />
        </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;