import React from "react";
import AboutHamburger from "../images/aboutHamburger.png";

function About() {
  return (
    <div>
      <div className="aboutImage">
        <img src={AboutHamburger} alt="" />
      </div>
      <div className="aboutBottom">
        <div className="aboutLabel">
          <h3>About</h3>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptates
            quia cumque possimus, eius veritatis fugit doloribus corporis, dolor
            dolorum deserunt quo nihil iure neque. Vero labore ab perspiciatis
            soluta. Molestias, eos aut, recusandae debitis ab ipsam aliquam
            iusto delectus illo, animi obcaecati sit! Nisi sapiente dolorem
            nulla beatae nihil commodi placeat eveniet fuga repellat atque
            nesciunt quis recusandae quos totam molestias culpa libero
            doloremque, ratione exercitationem aut pariatur! Itaque obcaecati
            quidem maxime praesentium possimus ipsam in iusto neque veniam
            earum.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
