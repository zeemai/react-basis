import React from "react";
import "../App.css";
import ShopCard from "../components/ShopCard";

function Shop() {
  return (
    <div className="App">
      <h1>Shop Page</h1>
      <ShopCard shop="Tesco" location="W9" color="White" />
      <ShopCard shop="Waitrose" location="W2" />
      <ShopCard shop="Asda" location="W3" />
      <ShopCard shop="Morrison" location="W5" />
    </div>
  );
}

export default Shop;
