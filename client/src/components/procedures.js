import React from "react";
import procOne from "../assets/mouth.jpg";

function Procedures() {
  return (
    <div class="proceduresContainer">
      <h1>Here is a list of our procedures at a glance</h1>
      <div class="proceduresListTwo">
        <div class="procs">
          <h3>Teeth Whitening</h3>
          <img src={procOne} alt="teeth whitening" />
          <p>a little about the procedure</p>
        </div>
        <div class="procs">
          <h3>Teeth Cleaning</h3>
          <img src={procOne} alt="teeth cleaning" />
          <p>a little about the procedure</p>
        </div>
        <div class="procs">
          <h3>Teeth Extraction</h3>
          <img src={procOne} alt="teeth extraction" />
          <p>a little about the procedure</p>
        </div>
        <div class="procs">
          <h3>Teeth Filling</h3>
          <img src={procOne} alt="teeth filling" />
          <p>a little about the procedure</p>
        </div>
        <div class="procs">
          <h3>Teeth X-Ray</h3>
          <img src={procOne} alt="teeth x-ray" />
          <p>a little about the procedure</p>
        </div>
        <div class="procs">
          <h3>Teeth Stuff</h3>
          <img src={procOne} alt="teeth stuff" />
          <p>a little about the procedure</p>
        </div>
      </div>
    </div>
  );
}

export default Procedures;
