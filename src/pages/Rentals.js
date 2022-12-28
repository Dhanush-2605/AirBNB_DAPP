import React from "react";
import "./Rental.css";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import logo from "../images/airbnbRed.png";
import { ConnectButton } from "web3uikit";
const Rentals = () => {
  const { state: searchFilters } = useLocation();
  console.log(searchFilters);

  return (
    <>
      <div className="topBanner">
        <div>
          <Link to="/">
            <img src={logo} className="logo" alt="logo" />
          </Link>
        </div>
        <div className="searchReminder">
          <div className="filter"></div>
          <div className="filter">{searchFilters.destination}</div>
          <div className="filter">
            {`
          ${searchFilters.checkIn.toLocaleString("default", { month: "short" })}
          ${searchFilters.checkIn.toLocaleString("default", {
            month: "2-digit",
          })}
            -
          ${searchFilters.checkOut.toLocaleString("default", {
            month: "short",
          })}
          ${searchFilters.checkOut.toLocaleString("default", {
            month: "2-digit",
          })}



        `}
          </div>
          <div className="filter"></div>
        </div>
        <div className="lrContainers">
          <ConnectButton />
        </div>
      </div>
    </>
  );
};

export default Rentals;
