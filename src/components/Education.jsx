// Education.jsx
import TimelineSection from './Timeline';

const Education = () => {
  const educationData = [
    {
      title: "Bowdoin College",
      subtitle: "Bachelors of art Degree | 2021-2025",
      details: [
        { label: "Major:", value: "Computer Science & Digital Computational Studies" },
        { label: "Minor:", value: "Psychology" },
        { label: "Relevant coursework:", value: "" },
        { text: "DATA Structures, Algorithms, Foundation of Computer Systems, Software Engineering, Computational Intelligence, Deep Learning for Computer Vision, Computational Creativity, Theory of Computation, Advanced Data science, Social & Economic Networks, Technology in the Common good, Data Analysis in Psychology, Research And Design in Psychology" }
      ]
    },
    {
      title: "African Leadership Academy- South Africa Johannesburg",
      subtitle: "High school Degree |2019-2021",
      details: [
        { label: "Relevant Coursework:", value: "" },
        { text: "Core Consultant for The African Leadership Consulting Group CAIE accelerated Mathematics, Physics, Economics, Entrepreneurship and Leadership" }
      ]
    },
    {
      title: "Lycee Pilote Bourguiba Tunis",
      subtitle: "High School | 2016-2019",
      details: [
        { label: "Awards:", value: "Academic Excellency Award" },
        { label: "Relevant Coursework & Club work:", value: "" },
        { text: "Basics in caculus, physics, biology, computer scinece . Space club President for 2 years, active member in LPBTYC a youth club with a community-driven mission" }
      ]
    }
  ];

  return <TimelineSection title="My Education" entries={educationData} />;
};
export default Education;