
// src/index.js
import React from 'react';
import ReactDOM from 'react-dom';  // <-- use createRoot from react-dom/client
import './index.css';
// import App from './App';


function Students(props){
  
  const display = student.map((student)=>
    <div key = {student.studid}>
      <h2> {student.studname}</h2>
      <h3> {student.age}</h3>
      <p> {student.city}</p>
    </div>
  )
  // const left = (
  //   <ul>
  //     {books.map((book)=>{
  //       <li key = {book.id}>
  //         {book.title}
  //       </li>
  //     })}
  //   </ul>
  // )

  // const right = books.map((book)=>
  //   <div key = {book.id}>
  //     <h2> {book.title}</h2>
  //     <p> {book.content}</p>
  //   </div>  
  //   )


  return (
    <div>
      <div> {display}</div>
    </div>
  )  

}

const student = [
  {
    studid:1,
    studname:"Abc",
    age:20,
    city: "ggn"
  },
 {
    studid:2,
    studname:"fgbc",
    age:20,
    city: "far"
  },
  {
    studid:3,
    studname:"xyw",
    age:18,
    city: "dfe"
  },
  {
    studid:4,
    studname:"fdfs",
    age:21,
    city: "gfsvfbdgn"
  },
];
 
ReactDOM.render(
<Students hi={student} />,
  document.getElementById("root")
);
