import React from "react";
import "./Home.css";
function HomeContent() {
  return (
    <div className="logoHome">
      <img src="./assets/ECO.svg" alt="logo" style={{ height: "200px" }} />
      <p>Consultoría Urbano Ambiental</p>
      <hr className="hr-home" />
      <h2>Proyectos Urbano Ambientales, Trámites y Gestiones</h2>
      <h3>
        Somos una consultoría inmobiliaria ubicada en Mérida, Yucatán que busca
        transformar la forma en la que las ciudades impactan a través de
        proyectos y planes sustentables.
      </h3>
    </div>
  );
}

export default HomeContent;
