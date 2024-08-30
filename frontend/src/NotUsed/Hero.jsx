import React from "react";
import { particleNetwork } from "./particles";
import "./Hero.css";

function Hero() {
  const canvasRef = particleNetwork();

  return (
    <div className="hero">
      <canvas ref={canvasRef} className="particle-canvas"></canvas>
      <div className="hero-content">
        <h1>Understand Your Financial Future With <span className="highlight">Relaxed Finance</span></h1>
        <p>Take control of your financial future and see how financial decisions today can earn you financial peace later.</p>
        <button className="hero-button">Start Now</button>
      </div>
    </div>
  );
}

export default Hero;