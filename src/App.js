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
        <Link to="/">
          <h1>root</h1>
        </Link>
        <Route path="/"></Route>
      </header>
      <main>
        <div className="links-container">
        {/* <Link to="/Home">
          <h3>HOME</h3>
        </Link>
        <Route path="/Home">
          <Home />
        </Route> */}
        <Link to="/Arithmetic">
          <h3>ARITHMETIC</h3>
        </Link>
        <Route path="/Arithmetic">
          <Arithmetic />
        </Route>
        <Link to="/Geometry">
          <h3>GEOMETRY</h3>
        </Link>
        <Route path="/Geometry">
          <Geometry />
        </Route>
        <Link to="/Algebra">
          <h3>ALGEBRA</h3>
        </Link>
        <Route path="/Algebra">
          <Algebra />
        </Route>
        <Link to="/Statistics">
          <h3>STATISTICS</h3>
        </Link>
        <Route path="/Statistics">
          <Statistics />
        </Route>
        <Link to="/Calculus">
          <h3>CALCULUS</h3>
        </Link>
        <Route path="/Calculus">
          <Calculus />
        </Route>
        <Link to="/LinearAlgebra">
          <h3>LINEAR ALGEBRA</h3>
        </Link>
        <Route path="/LinearAlgebra">
          <LinearAlgebra />
        </Route>
        </div>
      </main>
    </>
  );
}

export default App;
