import React from "react";
import videoBg from "../assets/videoBg.mp4";

const Main = () => {
  return (
    <div className="main">
      <video src={videoBg} autoPlay loop muted />
      <div className="content">
        <h1>Welcome</h1>
        <p>To my world.</p>
      </div>
    </div>
  );
};

export default Main;
