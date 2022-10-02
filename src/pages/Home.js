import React from "react";
import "./Home.css";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      {/* <Link to="/rentals"> Rentals </Link> */}
      <div className="container">
        <div className="containerGradinet">
          <p>hello</p>
        </div>
      </div>
      <div className="topBanner">
        <div>
          <img className="logo" src="https://github.com/Dhanush-2605/AirBNB_Web3/blob/main/Airbnb-starter/src/images/airbnbRed.png?raw=true" alt="logo"></img>
        </div>
        <div className="tabs">
          <div className="selected">Places To Stay</div>
          <div>Experiences</div>
          <div>Online Experiences</div>
        </div>
        <div className="lrContainers"></div>
      </div>
    </>
  );
};

export default Home;