import React from "react";
import "./Rental.css";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import logo from "../images/airbnbRed.png";
import { ConnectButton, Button } from "web3uikit";
import Icon from "@web3uikit/icons";
import RentalsMap from "../components/RentalsMap";
const Rentals = () => {
  const { state: searchFilters } = useLocation();
  const rentalsList = [
    {
      attributes: {
        city: "New York",
        unoDescription: "3 Guests • 2 Beds • 2 Rooms",
        dosDescription: "Wifi • Kitchen • Living Area",
        imgUrl:
          "https://ipfs.moralis.io:2053/ipfs/QmS3gdXVcjM72JSGH82ZEvu4D7nS6sYhbi5YyCw8u8z4pE/media/3",
        lat: "40.716862",
        long: "-73.999005",
        name: "Apartment in China Town",
        pricePerDay: "3",
      },
    },
  ];
  console.log(searchFilters);
  const cords = [];
  rentalsList.forEach((e) => {
    cords.push({ lat: e.attributes.lat, lng: e.attributes.long });
  });
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
            day: "2-digit",
          })}
            -
          ${searchFilters.checkOut.toLocaleString("default", {
            month: "short",
          })}
          ${searchFilters.checkOut.toLocaleString("default", {
            day: "2-digit",
          })}



        `}
            <div className="vl" />
          </div>
          <div className="filter">{searchFilters.guests} Guest</div>
          <div className="searchFiltersIcon">
            <a fill="#ffffff">search</a>
          </div>
        </div>
        <div className="lrContainers">
          <ConnectButton />
        </div>
      </div>

      <div className="line" />
      <div className="rentalsContent">
        <div className="rentalsContentL">
          Stay Available For Your Destination
          {rentalsList &&
            rentalsList.map((e) => {
              return (
                <>
                  <hr className="line2" />
                  <div className="rentalDiv">
                    <img
                      className="rentalImg"
                      src={e.attributes.imgUrl}
                      alt="img"
                    ></img>
                    <div className="rentalInfo">
                      <div className="rentalTitle">{e.attributes.name} </div>
                      <div className="rentalDesc">
                        {e.attributes.unoDescription}{" "}
                      </div>
                      <div className="rentalDesc">
                        {e.attributes.dosDescription}) I{" "}
                      </div>

                      <div className="bottomButton">
                        <Button text="Stay Here" />{" "}
                        <div className="price">
                          <a fill="#808080" /> {e.attributes.pricePerDay} / Day
                        </div>
                      </div>
                    </div>
                  </div>
                </>
              );
            })}
        </div>
        <div className="rentalsContentR">
          <RentalsMap location={cords}/>
        </div>
      </div>
      <div></div>
    </>
  );
};

export default Rentals;
