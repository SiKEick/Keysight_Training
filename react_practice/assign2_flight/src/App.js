import React from "react";
import FlightInfo from "./FlightInfo";

function App(){
  
const flight = {
    airlineName: "IndiGo",
    airlineCode: "6E-123",
    seats: 180,
    sourceCity: "Delhi",
    destinationCity: "Mumbai",
    ticketPrice: 5499,
  };
return (
  <div>
    <FlightInfo 
      airlineName={flight.airlineName}
      airlineCode={flight.airlineCode}
      seats={flight.seats}
      sourceCity={flight.sourceCity}
      destinationCity={flight.destinationCity}
      ticketPrice={flight.ticketPrice}></FlightInfo>

  </div>
)
}
export default App;