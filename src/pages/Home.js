import React, { useState } from "react";
import "./Home.css";
import { Link } from "react-router-dom";
import bg from "../images/frontpagebg.png";
import logo from "../images/airbnb.png";
import { ConnectButton, Select, DatePicker, Input, Icon, Button } from "web3uikit";

const Home = () => {
  const [checkIn, setCheckIn] = useState(new Date());
  const [checkOut, setCheckOut] = useState(new Date());
  const [destination, setDestination] = useState("New York");
  const [guests, setGuests] = useState(2);

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
          <div className="inputs" id="id1">
            <h2>location</h2>
            <Select
              customize={{
                backgroundColor: "#FFFFFF",
                border: "2px solid #00D1AE",
                borderRadius: "24px",
                color: "#0B72C4",
                padding:"10px"
              }}
              defaultOptionIndex={0}
              onChange={(data) => setDestination(data.label)}
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
              style={{}}
            />
          </div>
          {/* <div className="vl" /> */}
          <div className="inputs">
            <h2>check in</h2>
            <DatePicker
              id="CheckIn"
              onChange={(event) => setCheckIn(event.date)}
            />
          </div>
          {/* <div className="vl" /> */}
          <div className="inputs">
            <h2>check out</h2>
            <DatePicker
              id="CheckOut"
              onChange={(event) => setCheckOut(event.date)}
            />
          </div>
          {/* <div className="vl" /> */}
          <div className="inputs">
            <h2>guests</h2>
            <Input
              value={2}
              name="AddGuests"
              type="number"
              onChange={(event) => setGuests(Number(event.target.value))}
            />
          </div>
          <div className="searchButton">
            <Link
              to={"/rentals"}
              state={{
                destination: destination,
                checkIn: checkIn,
                checkOut: checkOut,
                guests: guests,
              }}
            >
              move
            </Link>
            {/* <Icon  size={24} /> */}
          </div>
        </div>
      </div>
      <div className="randomLocation">
      <div className="title">Feel Adventures</div>
      <div className="text">
        let us decide and discover new places to stay,live,work or just relax.
      </div>
      <Button>
        text="Explore a Location"
        onClick={()=>console.log(checkOut)}
      </Button>

      </div>
    </>
  );
};

export default Home;
