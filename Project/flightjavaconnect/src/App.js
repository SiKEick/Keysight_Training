import React from "react";
import { Routes, Route } from "react-router-dom";

import Navbar from "./components/NavBar";
import FlightList from "./components/FlightList";
import AddFlight from "./components/AddFlight";
import EditFlight from "./components/EditFlight";

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<FlightList />} />
        <Route path="/add" element={<AddFlight />} />
        <Route path="/edit/:id" element={<EditFlight />} />
      </Routes>
    </>
  );
}

export default App;