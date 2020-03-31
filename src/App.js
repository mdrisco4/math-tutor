import React, { Component } from "react";
import { Route, Link } from "react-router-dom";
import Home from "./Home.js";
import Arithmetic from "./Arithmetic.js";
import Geometry from "./Geometry.js";
import Algebra from "./Algebra.js";
import Statistics from "./Statistics.js";
import Calculus from "./Calculus";
import LinearAlgebra from "./LinearAlgebra";
import "./App.css";

function App() {
  return (
    <>
      <header>
        <h1>MATH TUTORIAL</h1>
      </header>
      <main>
        <Link to="/Home">
          <h3>Home</h3>
        </Link>
        <Route path="/Home">goHome<h1>scscs</h1></Route>
      </main>
    </>
  );
}

export default App;
