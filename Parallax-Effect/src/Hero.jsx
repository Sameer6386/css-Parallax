// Hero.js
import React from 'react';
import BackgroundImage from './assets/bg.jpg';
import DustImage from './assets/dust.webp';
import ForegroundBackImage from './assets/foreground-back.webp';
import ForegroundFrontImage from './assets/foreground-front.webp';
import JaxImage from './assets/jax.webp';
import LunaImage from './assets/luna.webp';
import MannyImage from './assets/manny.webp';
import RaysImage from './assets/rays.webp';
import './App.css'

function Hero() {
  return (
    <div className="hero">
      <div className="wrapper">
        <h1 className="hero__title">
          <span>Hey There!</span> We're SoilWrap
        </h1>
        <button className="button">Sign up for beta</button>
      </div>
      <img className="parallax__bg" src={BackgroundImage} alt="" />
      <img className="parallax__dust" src={DustImage} alt="" />
      <img className="parallax__foreground-back" src={ForegroundBackImage} alt="" />
      <img className="parallax__foreground-front" src={ForegroundFrontImage} alt="" />
      <img className="parallax__jax" src={JaxImage} alt="" />
      <img className="parallax__luna" src={LunaImage} alt="" />
      <img className="parallax__manny" src={MannyImage} alt="" />
      <img className="parallax__rays" src={RaysImage} alt="" />
    </div>
  );
}

export default Hero;
