import React from "react";
import "./Home.css";
import { Route, Link } from "react-router-dom";

function Home() {
  return (
    <>
      <div style={{
          marginTop: '45px',
      }}>
        {/* <Route path="/Home">dfdf</Route> */}
        <div className="info-wrappers">
          {/* <Link to="/algebra/" > */}
          <button>arithmetic</button>
          {/* </Link> */}
          <p>arithmetic functions + - x /</p>
          <p>
            Arithmetic is the study of numbers, their properties and the
            manipulation of them and centers primarily around multiplication,
            addition, division and subtraction.
          </p>
        </div>
        <div className="info-wrappers">
          {/* <Route path="/algebra/"/> */}
          <button>Geometry</button>
          <p>
            Geometry is the study of the properties of shapes and the relations
            of points, lines, surfaces solids and higher dimensional shapes.{" "}
          </p>
        </div>
        <div className="info-wrappers">
          {/* <Route path="/algebra/"/> */}
          <button>algebra</button>
          <p>
            Algebra deals with formulas, equations and finding unknown
            variables.
          </p>
        </div>
        <div className="info-wrappers">
          {/* <Route path="/algebra/"/> */}
          <button>statistics</button>
          <p>statistics symbols σ2 std(X) σX</p>
          <p>Statistics is the study of probability</p>
        </div>
        <div className="info-wrappers">
          {/* <Route path="/algebra/"/> */}
          <button>calculus</button>
          <p>
            some calculus symbols<br></br>&#8747; &#8748; &#8749; &#8750;
            &#8751; &#8752; &#8706;/&#8706;x
          </p>
          <p>Calculus is the studie of rates of change</p>
        </div>
        <div className="info-wrappers">
          {/* <Route path="/algebra/"/> */}
          <button>linear algebra</button>
          <p>
            linear algebra is crazy and I need to relearn this entire branch of
            mathematics
          </p>
        </div>
      </div>
    </>
  );
}

export default Home;
