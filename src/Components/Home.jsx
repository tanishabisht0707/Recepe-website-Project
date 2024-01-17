import React, { useState } from "react";
import Cards from "./Cards";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="body">
      <div className="banner">
        <div className="content">
          <h1>Thinking what to cook ?</h1>
          <p>
            {" "}
            Welcome to the foodClub find the best recepe from all over the
            world.
          </p>
          <button>
            <Link to="/Infopage">Search Recepes</Link>
          </button>
        </div>
        <h2> Some recpe may be you like</h2>
      </div>

      <Cards />
    </div>
  );
}

export default Home;
