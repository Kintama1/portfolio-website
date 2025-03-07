import React, { useState } from 'react';
import { ChevronDown, Github, ExternalLink } from 'lucide-react';
import './CollapsibleCard.css';

const CollapsibleCard = ({
    title,
    children,
    tags = [],
    bulletPoints = [],
    projectLink,
    demoLink,  // New prop for the deployed/live demo link
    customStyles = {},
    subtitle
}) => {
    const [isExpanded, setIsExpanded] = useState(false);
    
    const handleCollapsibleClick = (e) => {
        if (!e.target.closest('.github') && !e.target.closest('.demo-link')) {
            setIsExpanded(!isExpanded);
        }
    };

    return (
        <div className="collapsible-card">
            <div onClick={handleCollapsibleClick} className='collapsible-body'>
                <div className="title-bar">
                    <div className="title-section">
                        <ChevronDown
                            size={24}
                            className={`chevron ${isExpanded ? 'rotated' : ''}`}
                        />
                        <h1 className='collapsible-header'>{title}</h1>
                    </div>
                    <div className="date-logo">
                        {demoLink && (
                            <a 
                                href={demoLink} 
                                target="_blank" 
                                rel="noopener noreferrer" 
                                aria-label="Live Demo" 
                                className="demo-link"
                            >
                                <ExternalLink />
                            </a>
                        )}
                        {projectLink && (
                            <a 
                                href={projectLink} 
                                target="_blank" 
                                rel="noopener noreferrer" 
                                aria-label="GitHub" 
                                className="github"
                            >
                                <Github />
                            </a>
                        )}
                        {subtitle && <span className="subtitle">{subtitle}</span>}
                    </div>
                </div>
            </div>
            <div className={`collapsible-content ${isExpanded ? 'expanded' : ''}`}>
                <div>
                    {tags.length > 0 && (
                        <div className="tags">
                            {tags.map((tag, index) => (
                                <span key={index} className="tag">{tag}</span>
                            ))}
                        </div>
                    )}
                    
                    {bulletPoints.length > 0 && (
                        <ul className="bullet-points">
                            {bulletPoints.map((point, index) => (
                                <li key={index} className="bullet-point">
                                    <span className="bullet">•</span>
                                    {point}
                                </li>
                            ))}
                        </ul>
                    )}
                    {children}
                </div>
            </div>
        </div>
    );
};

export default CollapsibleCard;