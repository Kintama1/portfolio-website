import React from 'react';
import './Extracurrical.css';
// Import images
import menasaImage from '../assets/MENASA.jpg';
import bowdoinImage from '../assets/Bowdoin-logo.png';

const ContentBlock = ({
    title,
    description,
    secondaryText,
    imageSrc,
    imageAlt,
    imageOnRight = false  // fixed capitalization
}) => {
    const containerClassName = `content-block__container ${
        imageOnRight ? 'right' : 'left'
    }`;
    
    return (
        <div className="content-block">
            <div className="content-block__inner">
                <div className={containerClassName}>
                    <div className="content-block__content">
                        <h2 className="content-block__title">{title}</h2>
                        <p className="content-block__description">{description}</p>
                        {secondaryText && <p className="content-block__subtitle">{secondaryText}</p>}
                    </div>
                    <div className="content-block__image-wrapper">
                        <img src={imageSrc} alt={imageAlt} className="content-block__image"/>
                    </div>
                </div>
            </div>
        </div>
    );
};

const extracurricularData = [
    {
        title: 'Middle Eastern Northen African Student Association (MENASA)',
        description: 'MENASA is a student organization that aims to create a safe space for students of Middle Eastern and North African descent. We host events, workshops, and discussions to educate the community about our culture and history.',
        secondaryText: 'President, Founder 2023-2025',
        imageSrc: menasaImage,  // use imported image
        imageAlt: "MENASA first Event",
        imageOnRight: true  // fixed capitalization
    },
    {
        title: "Tour Guide at Bowdoin College",
        description: "As a tour guide, I lead tours for prospective students and their families, answering questions and providing information about the college. I also assist with information sessions and other admissions events.",
        secondaryText: "Tour Guide 2022-2024",
        imageSrc: bowdoinImage,  // use imported image
        imageAlt: "Bowdoin College Logo",
        imageOnRight: false
    }
];

const Extracurriculars = () => {
    return (
        <section className="extracurriculars">
            <h1 className="extracurriculars__title">Extracurricular Activities</h1>
            {extracurricularData.map((item, index) => (
                <ContentBlock
                    key={index}
                    {...item}
                />
            ))}
        </section>
    );
};

export default Extracurriculars;