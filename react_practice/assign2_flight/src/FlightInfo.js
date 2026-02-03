import React from "react";
import RouteInfo  from "./RouteInfo";
import PriceInfo from "./PriceInfo";

function FlightInfo({
airlineName,
  airlineCode,
  seats,
  sourceCity,
  destinationCity,
  ticketPrice,
}){
    return(
        <div>
            <h2>
                Flight Info
            </h2>
            <p>
                Airline: {airlineName}({airlineCode})
            </p>
            <p>
                Seats : {seats}
            </p>
            <RouteInfo source = {sourceCity} destination={destinationCity}></RouteInfo>
            <PriceInfo price={ticketPrice}></PriceInfo>
        </div>
    )
}

export default FlightInfo;