import React from 'react';
import CollapsibleCard from './CollapsibleCard';
import './ProjectSection.css';

const ProjectSection = () => {
    // Example projects array - you can expand this as needed
    const projects = [
        {
            title: "Webtracker extension",
            subtitle: "Dec 2024",
            projectLink: "https://github.com/Kintama1/tracker",
            demoLink: "https://chromewebstore.google.com/detail/web-tracker/lnpplbkhlbdfjlhbfdnjocpenfddkkpj",
            tags: ["Javascript", "HTML", "CSS", "Chrome extension API"],
            bulletPoints: [
                "Developed a Chrome extension that tracks and visualizes time spent on websites to promote productivity and digital wellbeing",
                "Implemented real-time tracking using Chrome Extension APIs with a minimal-impact background process",
                "Designed an intuitive UI with interactive visualizations including donut charts and detailed list views",
                "Created efficient data storage and retrieval system that respects user privacy by keeping all data local",
                "Published extension to the Chrome Web Store, making it available to users worldwide"
            ]
        
        },
        {
            title: "Poetry Generator",
            subtitle: "2024-2025",
            projectLink: "https://github.com/Kintama1/poetry-generator-continued",
            demoLink: "https://poetry-generator-continued.onrender.com/poet",
            tags:["Python", "Flask", "NLP", "SQLAlchemy", "Huggingface", "Pytorch"],
            bulletPoints: [
                "Developed a web application that generates unique existentialist poetry using a custom fine-tuned GPT-2 language model",
                "Implemented user input features allowing visitors to specify poem title and poet name, influencing the style and content of generated poems",
                "Integrated text-to-speech functionality to enable auditory experience of the generated poetry",
                "Built a poetry gallery to save and showcase previously generated poems using SQLAlchemy for data persistence",
                "Designed a clean, minimalist user interface that complements the existentialist theme of the generated content",
                "Note: The application is hosted on a free tier service which may require a brief warm-up period after periods of inactivity"
            ]
        },
        {
            title: "Personal Portfolio Website",
            subtitle: "February-March 2025",
            projectLink: "https://github.com/yourusername/project2",
            tags: ["React", "Javascript", "HTML/CSS"],
            bulletPoints: [
                "Designed and developed a responsive personal portfolio website to showcase projects and professional experience",
                "Implemented modern React components including collapsible cards, interactive timelines, and custom buttons",
                "Created a dark-themed UI with carefully selected color palette for optimal readability and visual appeal",
                "Built reusable components such as Timeline, Button, and CollapsibleCard to maintain consistent styling and functionality",
                "Incorporated smooth animations and transitions to enhance user experience and engagement",
                "Ensured mobile responsiveness using CSS media queries and flexible layouts for optimal viewing on all devices"
            ]
        },
        {
            title: "MarkovShapes Game",
            subtitle: "September 2024",
            projectLink: "https://github.com/Kintama1/Markov_shapes",
            demoLink: "https://kintama1.itch.io/markov-shapes",
            tags: ["Python", "Pygame", "Pygbag", "Web Assembly"],
            bulletPoints: [
                "Developed a creative art game using Pygame where players position, rotate, and arrange various geometric shapes to create unique compositions",
                "Implemented time-based gameplay mechanics that challenge players to think quickly and make creative decisions under pressure",
                "Designed an intuitive control system using keyboard inputs for shape manipulation (movement, rotation, selection)",
                "Created a responsive visual feedback system that enhances the user experience through color and animation",
                "Utilized Pygbag to compile the Python game into WebAssembly, making it playable directly in web browsers",
                "Deployed the game on itch.io, making it accessible to a wide audience without requiring any software installation"
            ]
        },
        {
            title: "Aura Party",
            subtitle: "December 2024",
            projectLink: "https://editor.p5js.org/Kintama1/sketches/rGsYk0UQD",
            tags: ["Javascript", "P5.js", "MongoDB"],
            bulletPoints: [
                "Developed an interactive digital art application using P5.js that enables users to create dynamic visual compositions with expanding circles",
                "Implemented sophisticated color management with both curated palettes and random color generation options, allowing users to save their favorite palettes",
                "Created an intuitive keyboard control system with multiple features including animation speed control, heartbeat effects, and layering capabilities",
                "Designed circle generation mechanics that respond to mouse movement and clicks, creating fluid, organic visual patterns",
                "Engineered state management to handle both static and animated elements simultaneously, allowing users to build complex compositions over time",
                "Incorporated data persistence for color palettes, enhancing the user experience by enabling the saving and cycling through favorite color schemes"
            ]
        },        
        {
            title: "Flashcard Reading Game",
            subtitle: "March 2024",
            projectLink: "https://github.com/khueanhtran/software-design/tree/master/src/main/java/nl/vu/cs/softwaredesign",
            tags: ["Java", "PostgreSQL", "JDBC", "Database Design", "User Authentication"],
            bulletPoints: [
                "Engineered a comprehensive flashcard application for educational purposes with robust user management capabilities",
                "Designed and implemented a secure database architecture using PostgreSQL to store user profiles, credentials, and learning progress",
                "Developed a seamless authentication system enabling personalized user experiences with custom flashcard decks and progress tracking",
                "Created efficient database connectivity using JDBC to establish and maintain connections with a remote PostgreSQL instance",
                "Implemented a clean, intuitive user interface that allows students to create, organize, and study flashcards with varying difficulty levels",
                "Utilized prepared statements and parameterized queries to ensure database security and prevent SQL injection vulnerabilities"
            ]
        }

        // Add more projects as needed
    ];

    return (
        <div className="projects-container">
            <div className="projects-header">
                <h1>Projects</h1>
                <div className="header-line"></div>
            </div>
            <div className="projects-grid">
                {projects.map((project, index) => (
                    <CollapsibleCard
                        key={index}
                        {...project}
                    />
                ))}
            </div>
        </div>
    );
};

export default ProjectSection;