// Blurb.jsx
import React from 'react';
import { Github, Linkedin, Twitter} from 'lucide-react';
import substackIcon from '../assets/substack.svg';
import Button from './Button';
import './Blurb.css';

function my_age() {
    let today = new Date();
    let birthDate = new Date(today.getFullYear(), 2, 20); // March 20th of this year (Month index starts from 0)
    
    let age = today.getFullYear() - 2001;
    
    // If today's date is before March 20th, subtract 1 from age
    if (today < birthDate) {
        age--;
    }
    
    return age;
}

const Blurb = () => {
    return (
        <div className="blurb">
            <div className = "blurb-container">
            <div className="info-section">
                <InfoItem label="NAME:" value="Yassine Khayati" />

                <InfoItem label="SCHOOL:" value="Bowdoin College" />
                <InfoItem label="AGE:" value={`${my_age()} Years`} />
                <InfoItem label="HOMETOWN:" value="Tunis, Tunisia" />
                
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

            <div className="description-section">
                <p>My name is Yassine Khayati, and I am a member of Bowdoin College's Class of 2025,
                     pursuing a double major in Computer Science and Digital Computational Studies (DCS) with a minor in Psychology. 
                     I expanded my Computer Science focus from a minor to a major durin my junior year after realizing building cool things is what I want to do for life. 
                     I'm proficient in Python,
                     Java, JavaScript, React, HTML, CSS, and SQL, with experience in C, Assembly, and Ruby.</p>
                
                <p>Beyond coursework, I serve as a Learning Assistant for CS classes, collaborate on coding projects with faculty. I completed my first internship as a backend developer with Wattnow. On campus, I founded the Middle Eastern Northern African Student Association, worked as a tour guide, and actively contribute to various campus offices, combining my technical skills with community engagement</p>

                <Button buttonStyle="btn--primary" buttonSize="btn--large">Download Resume</Button>
            </div>
            </div>
        </div>
    );
};

const InfoItem = ({ label, value }) => (
    <div className="info-item">
        <span className="label">{label}</span>
        <span className="value">{value}</span>
    </div>
);

export default Blurb;