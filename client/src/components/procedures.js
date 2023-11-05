import React from "react";
import procOne from "../assets/mouth.jpg";

function Procedures() {
  return (
    <div class="proceduresContainer">
      <h1>Here is a list of our procedures at a glance</h1>
      <div class="procedureList">
        <ul>
          <li>Teeth Whitening</li>
          <p>a little about this</p>
          <li>Teeth Cleaning</li>
          <p>a little about this</p>
          <li>Teeth Extraction</li>
          <p>a little about this</p>
          <li>Teeth Filling</li>
          <p>a little about this</p>
          <li>Teeth X-Ray</li>
          <p>a little about this</p>
          <li>Teeth Examination</li>
          <p>a little about this</p>
          <li>Teeth Crown</li>
          <p>a little about this</p>
          <li>Teeth Bridge</li>
          <p>a little about this</p>
          <li>Teeth Implant</li>
          <p>a little about this</p>
          <li>Teeth Root Canal</li>
          <p>a little about this</p>
        </ul>
      </div>
      <div class="procedureListTwo">
        <div class="procs">
          <h3>Teeth WHitening</h3>
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
