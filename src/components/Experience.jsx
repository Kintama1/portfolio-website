import TimelineSection from './Timeline';


const Experience = () => {
    const experienceData = [
     
      {
        title: "Wattnow",
        subtitle: "Software Engineering Intern | Summer 2024",
        details: [
          { label: "Role", value: "Full Stack Developer" },
          { 
            label: "Achievements & Responsibilities",
            list: [
              "Developed a Python script that validated control device statuses against user-set schedules (automatic or astro) by integrating with DynamoDB using Boto3 and generating detailed discrepancy logs",
              "Utilized tools and frameworks such as Pandas, datetime objects, Serverless framework, and timezonefinders to ensure consistent performance of the feature across 500 sites in 4 different continents",
              "Implemented comprehensive testing with 12 unit tests using Pytest and Unittest, improving code maintainability and easing future updates",
              "Collaborated with senior developers to deploy the script in a serverless environment, contributing to the reliability of energy management systems"
            ]
          }
        ]
      },
      {
        title: "Bowdoin College",
        subtitle: "Learning Assistant | Fall 2024-Present",
        details: [
          { label: "Role", value: "Computer Science  (Teaching) Assistant" },
          { 
            label: "Achievements & Responsibilities",
            list: [
              "Provided weekly support for students in advanced Computer Science courses including Algorithms, Social & Economic Networks, Foundations of Computer Systems, and Intro to Computational Methods",
              "Led office hours and review sessions to help students understand complex concepts and debug their code",
              "Collaborated with professors to grade assignments and provide constructive feedback to students"
            ]
          }
        ]
  
        }
      
    ];
  
    return <TimelineSection title="Experience" entries={experienceData} />;
  };

  export default Experience;