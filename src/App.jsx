import { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import ProfileImage from './components/ProfileImage';
import Blurb from './components/Blurb';
import Education from './components/Education';
import Experience from './components/Experience';
import ProjectSection from './components/ProjectSection';
import Extracurriculars from './components/Extracurrical';
import Contact from './components/Contact';
import Footer from './components/Footer';
import meImage from './assets/me.jpg';
import haha from './assets/haha.jpg';
import './App.css';

function App() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <>
      {/* Navbar stays outside the main container so it doesn't 
          get affected by container animations or transformations */}
      <Navbar />
      
      {/* Main content starts here */}
      <div className={`app-container ${isLoaded ? 'visible' : ''}`}>
        <main>
          {/* Adding a spacer div to prevent content from hiding under navbar */}
          <div className="navbar-spacer"></div>
          
          <ProfileImage 
            imageSrc={meImage}
            title="Welcome to my Portfolio"
            subtitle="Just another passionate student developer :))" 
          />
          
          <section id="about">
            <Blurb />
          </section>
          
          <section id="education">
            <Education />
          </section>
          
          <section id="experience">
            <Experience />
          </section>
          
          <section id="projects">
            <ProjectSection />
          </section>
          
          <section id="extracurriculars">
            <Extracurriculars />
          </section>
          
          <ProfileImage 
            imageSrc={haha}
            title=" "
            subtitle=" "
          />
          
          <section id="contact">
            <Contact />
          </section>
          
          <Footer />
        </main>
      </div>
    </>
  );
}

export default App;