import React from "react";

const AboutCard = ({ name }) => {
  return (
    <div className="wide-card">
      <div className="wide-card-content">
        <h3>name: {name}</h3>
      </div>
    </div>
  );
};

export default AboutCard;
