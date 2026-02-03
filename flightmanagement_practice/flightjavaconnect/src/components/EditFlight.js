import React, {useState, useEffect} from "react";
import {useNavigate, useParams} from "react-router-dom";
 
const EditFlight = () => {
 
  const {id} = useParams();
  const navigate = useNavigate();
 
   const [flightName, setFlightName] = useState("");
   const [source, setSource] = useState("");
   const [destination, setDestination] = useState("");  
 
   useEffect(()=>{
           loadSingleFlight();
       },[]);
   
    const loadSingleFlight = async () =>{
           const res = await fetch(`http://localhost:8080/flights/${id}`);
           const data = await res.json();
 
           setFlightName(data.flightName);
           setSource(data.source);
           setDestination(data.destination);
       }
 
       const updateFlight = async(e) =>{
        e.preventDefault();
 
        const flight = {flightName,source,destination};
 
        await fetch(`http://localhost:8080/flights/${id}`, {   // calling the Spring boot Java API of project "FirstBootExample"
        method: "PUT",
        headers: {
            "Content-Type" : "application/json"
        },
        body: JSON.stringify(flight)
       });
 
       navigate("/");
       }
 
    return(
         <div>
            <h3> Edit Flight </h3>
 
            <form onSubmit={updateFlight}>
               <div>
                <label> Flight Name </label>
                <input value={flightName} onChange={e => setFlightName(e.target.value)} />
               </div>
 
               <div>
                <label> Source </label>
                <input value={source} onChange={e => setSource(e.target.value)} />
               </div>
 
               <div>
                <label> Destination </label>
                <input value={destination} onChange={e => setDestination(e.target.value)} />
               </div>
 
               <button type="submit"> update </button>
            </form>
         </div>
    )  
 
}
 
export default EditFlight;