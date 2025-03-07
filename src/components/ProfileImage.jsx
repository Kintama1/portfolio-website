import React from 'react';
import './ProfileImage.css';

const ProfileImage = ({ imageSrc, title, subtitle }) => {
  return (
    <div className="profile-container">
      <div className="profile-image-wrapper">
        <img 
          src={imageSrc} 
          alt={title || "Yassine Khayati"} 
          className="profile-image" 
        />
      </div>
      <div className="profile-text">
        <h1>{title || "Yassine Khayati"}</h1>
        <p>{subtitle || "Computer Science & Digital Computational Studies"}</p>
      </div>
    </div>
  );
};

export default ProfileImage;

