import HomeContent from "./HomeContent";
import "./Home.css";
import React from "react";
function Home() {
  return (
    <div style={{ marginTop: "70px" }} id="home" className="bg">
      <HomeContent/>
    </div>
  );
}

export default Home;
