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
        <h1 className='title'>MATH TUTORIAL</h1>
        <Link to="/">
          <h1>ROOT</h1>
        </Link>
        <Link to="/Home">
          <h1>HOME</h1>
        </Link>
        <div className="links-container">
          <Link to="/Arithmetic" className='header-links'>
            <h3 className='page-links'>ARITHMETIC</h3>
          </Link>
          <Link to="/Geometry" className='header-links'>
            <h3 className='page-links'>GEOMETRY</h3>
          </Link>
          <Link to="/Algebra" className='header-links'>
            <h3 className='page-links'>ALGEBRA</h3>
          </Link>
          <Link to="/Statistics" className='header-links'>
            <h3 className='page-links'>STATISTICS</h3>
          </Link>
          <Link to="/Calculus" className='header-links'>
            <h3 className='page-links'>CALCULUS</h3>
          </Link>
          <Link to="/LinearAlgebra" className='header-links'>
            <h3 className='page-links'>L. ALGEBRA</h3>
          </Link>
        </div>
      </header>
      <main>
      <Route path="/">
        {/* Blank Page */}
      </Route>
      <Route path="/Home">
        <Home />
      </Route>
          <Route path="/Arithmetic">
            <Arithmetic />
          </Route>
          <Route path="/Geometry">
            <Geometry />
          </Route>
          <Route path="/Algebra">
            <Algebra />
          </Route>
          <Route path="/Statistics">
            <Statistics />
          </Route>
          <Route path="/Calculus">
            <Calculus />
          </Route>
          <Route path="/LinearAlgebra">
            <LinearAlgebra />
          </Route>
      </main>
    </>
  );
}

export default App;
