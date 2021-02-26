import React from "react";

const ShopCard = ({ shop, location, color }) => {
  return (
    <div className="wide-card">
      <div className="wide-card-content">
        <h3>Supermarket: {shop}</h3>
        <h4>Location: {location}</h4>
        <h4>Color: {color}</h4>
      </div>
    </div>
  );
};

export default ShopCard;
