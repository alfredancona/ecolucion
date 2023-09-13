import HomeContent from "./HomeContent";
import "./Home.css";

import React from "react";
function Home() {
  return (
    <div className="background">
      <div style={{ marginTop: "70px" }} id="home" className="layer">
        <HomeContent />
      </div>
    </div>
  );
}

export default Home;
