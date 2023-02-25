import React from "react";
import { NavLink } from "react-router-dom";

function Home() {
  return (
    <div className="home">
      <div className="label">
        <h1>Burger 777</h1>
        <NavLink to="/menu" className="orderbtn">
          Order Now
        </NavLink>
      </div>
    </div>
  );
}

export default Home;
