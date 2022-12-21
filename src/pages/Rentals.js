import React from "react";
import "./Rental.css";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
const Rentals = () => {
  const { state: searchFilters } = useLocation();
  console.log(searchFilters);

  return (
    <>
      <Link to="/"> Home </Link>
      {searchFilters && <div>{searchFilters}</div>}
    </>
  );
};

export default Rentals;
