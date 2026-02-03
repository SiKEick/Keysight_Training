
import React, { useEffect, useState } from "react";

function Marksheet() {
  const [newInstrument, setInstrument] = useState(""); // Initially blank
  const [maths,setMaths] = useState(50)
  const [physics,setPhysics] = useState(60)
  const [chemistry,setChemistry] = useState(70)
  const [show,setShow] = useState(false)
  const total = maths + physics + chemistry;
  const [name] = useState('Yash');
  const [age] = useState(21);

  useEffect(()=>{
    if(show){
        
        setMaths((prev) => prev + 10);
        setPhysics((prev) => prev + 10);
        setChemistry((prev) => prev + 10);
       

        setShow(false);
    }
  },[show])


  return (
    <div>
      <p>Name: {name}</p>
      <p>Age: {age}</p>
      <p>Total: {total} </p>
      <p>Maths: {maths}</p>
      <p>Physics: {physics}</p>
      <p>chemistry: {chemistry}</p>
      <button onClick={()=> setShow(true)}>Update</button>
    </div>
  );
}

export default Marksheet;
