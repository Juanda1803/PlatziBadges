import React from "react";

import astronaut from "../images/astronauts.svg";
import platziConf from "../images/platziconf-logo.svg";
import "./styles/Home.css";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="home">
      <img className="home__img" src={astronaut} alt="" />
      <div className="home__container">
        <img src={platziConf} alt="" />
        <div className="home-item">
          <h1>Print your badges</h1>
          <p>The easiest way to manage your conference</p>
          <Link to="/badges" className="btn btn btn-primary">
            Start Now
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
