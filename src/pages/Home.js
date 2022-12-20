import React from "react";
import "./Home.css";
import { Link } from "react-router-dom";
import bg from "../images/frontpagebg.png";
import logo from "../images/airbnb.png";
import {ConnectButton, Select, DatePicker, Input,Icon } from "web3uikit";

const Home = () => {
  return (
    <>
      {/* <Link to="/rentals"> Rentals </Link> */}
      <div className="container" style={{ backgroundImage: `url(${bg})` }}>
        <div className="containerGradinet">
          <p>hello</p>
        </div>
      </div>
      <div className="topBanner">
        <div>
          <img className="logo" src={logo} alt="logo"></img>
        </div>
        <div className="tabs">
          <div className="selected">Places To Stay</div>
          <div>Experiences</div>
          <div>Online Experiences</div>
        </div>
        <div className="lrContainers">
          <ConnectButton />
        </div>
      </div>
      <div className="tabContent">
        <div className="searchFields">
          <div className="inputs">
            location
            <Select
              defaultOptionIndex={0}
              onChange={(data) => console.log(data.label)}
              options={[
                {
                  id: "ny",
                  label: "New York",
                },
                {
                  id: "lon",
                  label: "London",
                },
                {
                  id: "db",
                  label: "Dubai",
                },
                {
                  id: "la",
                  label: "Los Angeles",
                },
              ]}
              style={{backgroundColor:"red",width:"10px",height:"10px"}}
            />
          </div>
          <div className="vl" />
          <div className="inputs">
            Check In
            <DatePicker
              id="CheckIn"
              onChnage={(event) => console.log(event.date)}
            />
          </div>
          <div className="vl" />
          <div className="inputs">
            Check Out
            <DatePicker
              id="CheckOut"
              onChnage={(event) => console.log(event.date)}
            />
          </div>
          <div className="vl" />
          <div className="inputs">
            Guests
            <Input
              value={2}
              name="AddGuests"
              type="number"
              onChange={(event) => console.log(Number(event.target.value))}
            />
          </div>
          <div className="searchButton" >
         <Icon fill="#fffffff" size={24} svg="search" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
