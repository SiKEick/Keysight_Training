// import React from "react";
// import { createRoot } from "react-dom/client";
// //import App from "./App";
 
// let title1 = React.createElement('h1', null, 'Welcome to Keysight');
// let title2 = React.createElement(
//   'h2',
//   { style: { color: "red" } },
//   'We build awesome products in AI'
// );
 
// const container = document.getElementById('root');
// const root = createRoot(container);
 
// root.render(
//   <>
//     {title1}
//     {title2}
//   </>
// );
 
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';
import Counter from './counter.js';
 
 
 
// let title1 = React.createElement('h1',null, 'Welcome to Keysight');
// let title2= React.createElement('h2',{style :{color: "red"}}, 'We build awesome products in AI');
ReactDOM.render(<Counter />, document.getElementById('root'));
 
function Header1(){
 
    return(
      <div>
        <h1>Welcome to Keysight</h1>
      </div>
    )
 
}
 
function Footer1 (){
 
    return(
      <p>Copyright ABC  </p>
    )
 
}
 
 
 
 
 
/*const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);*/
 