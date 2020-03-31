import React, { Component } from "react";
import Home from "./Home.js"
import { Link } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <>
      <header>
        <h1>MATH TUTORIAL</h1>
      </header>
      <body>
        <Home/>
      </body>
    </>
  );
}

export default App;
