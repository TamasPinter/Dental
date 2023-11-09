import React from "react";
import procOne from "../assets/mouth.jpg";
import procTwo from "../assets/debridement.jpg";
import procThree from "../assets/polish.jpg";
import procFour from "../assets/flouride.png";
import procFive from "../assets/whitening.jpg";
import procSix from "../assets/guard.jpg";

function Procedures() {
  return (
    <div class="proceduresContainer">
      <h1>Procedures at a Glance</h1>
      <div class="proceduresListTwo">
        <div class="procs">
          <h3>Oral Hygiene Assessment</h3>

          <div class="procDesc">
            <img src={procOne} alt="oral hygenie assessment" />
            <p>
              An oral health assessment, oral cancer screening, caries risk
              assessment, and dietary analysis.
            </p>
          </div>
          <div class="cost">
            <p> Estimated Cost: $54-$110</p>
          </div>
        </div>
        <div class="procs">
          <h3>Debridement</h3>
          <div class="procDesc">
            <img src={procTwo} alt="teeth debridement" />
            <p>Removal of deposits using hand and/or ultrasonic instruments.</p>
          </div>
          <div class="cost">
            <p>Estimated Cost: $63/per unit</p>
          </div>
        </div>
        <div class="procs">
          <h3>Selective Polish</h3>
          <div class="procDesc">
            <img src={procThree} alt="selective teeth polish" />
            <p>Removal of remaining stain from affected teeth.</p>
          </div>
          <div class="cost">
            <p> Estimated Cost: $34/per unit</p>
          </div>
        </div>
        <div class="procs">
          <h3>Fluoride</h3>
          <div class="procDesc">
            <img src={procFour} alt="fluoride treatement" />
            <p>
              Topical application to strenghten enamel, reduce caries risk and
              alleviate sensitivity.
            </p>
          </div>
          <div class="cost">
            <p> Estimated Cost: $29</p>
          </div>
        </div>
        <div class="procs">
          <h3>Tooth Whitening</h3>
          <div class="procDesc">
            <img src={procFive} alt="teeth whitening" />
            <p>
              Lighten and brighten appearance of smile, in office or using
              custom trays for home use.
            </p>
          </div>
          <div class="cost">
            <p>Estimated Cost: In-office $54/unit or $162 for home kit.</p>
          </div>
        </div>
        <div class="procs">
          <h3>Custom Sports Guard</h3>
          <div class="procDesc">
            <img src={procSix} alt="custom mouth guard" />
            <p>Protects sports players from injury to oral structures.</p>
          </div>
          <div class="cost">
            <p>Estimated Cost: $100</p>
          </div>
        </div>
      </div>
      <p>
        Call us to book an appointment today or if you have any questions about
        these services or others we may offer!
      </p>
    </div>
  );
}

export default Procedures;
