import React, { useEffect, useRef } from 'react';
import './Timeline.css';

const TimelineSection = ({ title, entries }) => {
  const timelineRefs = useRef([]);

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1
    };

    const handleIntersect = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersect, observerOptions);
    
    timelineRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  const addToRefs = (el) => {
    if (el && !timelineRefs.current.includes(el)) {
      timelineRefs.current.push(el);
    }
  };
  const renderDetail = (detail, idx) => {
    if (detail.list) {
      return (
        <div key={idx}>
          {detail.label && <p><strong>{detail.label}</strong></p>}
          <ul className="timeline-list">
            {detail.list.map((item, listIdx) => (
              <li key={listIdx}>{item}</li>
            ))}
          </ul>
        </div>
      );
    }
    
    return (
      <div key={idx}>
        {detail.label && <p><strong>{detail.label}</strong> {detail.value}</p>}
        {detail.text && <p className="coursework">{detail.text}</p>}
      </div>
    );
  };

  return (
    <section className="timeline-section">
      <h2>{title}</h2>
      
      <div className="timeline">
        {entries.map((entry, index) => (
          <div className="timeline-entry" key={index} ref={addToRefs}>
            <div className="timeline-dot"></div>
            <div className="timeline-line"></div>
            <div className="timeline-content">
              <h3>{entry.title}</h3>
              <p className="date">{entry.subtitle}</p>
              <div className="details">
              {entry.details.map((detail, idx) => renderDetail(detail, idx))}
              </div>
            </div>
          </div>
        ))}
      </div>
      </section>
  );
};

export default TimelineSection;