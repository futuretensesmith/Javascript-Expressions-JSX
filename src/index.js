import React from "react";
import ReactDOM from "react-dom";

const fName = "Sleeth";
const lName = "Malthus";

//only expressions between {} within HTML ** No statements **
ReactDOM.render(
  <div>
    <h1>Hello {fName + " " + lName}</h1>
    <p>your lucky number is {Math.floor(Math.random() * 10)}</p>
  </div>,
  document.getElementById("root")
);
