import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const AddFlight = () => {
  const [flightName, setFlightName] = useState("");
  const [source, setSource] = useState("");
  const [destination, setDestination] = useState("");

  const navigate = useNavigate();

  const saveFlight = async (e) => {
    e.preventDefault();

    const flight = { flightName, source, destination };

    await fetch("http://localhost:8080/flights/add", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(flight),
    });

    navigate("/");
  };

  return (
    <div className="container">
      <div className="card">
        <h3>Add Flight</h3>

        <form onSubmit={saveFlight}>
          <div className="form-group">
            <label>Flight Name</label>
            <input
              value={flightName}
              onChange={(e) => setFlightName(e.target.value)}
              placeholder="Enter flight name"
              required
            />
          </div>

          <div className="form-group">
            <label>Source</label>
            <input
              value={source}
              onChange={(e) => setSource(e.target.value)}
              placeholder="Enter source"
              required
            />
          </div>

          <div className="form-group">
            <label>Destination</label>
            <input
              value={destination}
              onChange={(e) => setDestination(e.target.value)}
              placeholder="Enter destination"
              required
            />
          </div>

          <div className="actions">
            <button type="submit" className="btn btn-primary">
              Save
            </button>
            <button
              type="button"
              className="btn btn-secondary"
              onClick={() => navigate("/")}
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddFlight;