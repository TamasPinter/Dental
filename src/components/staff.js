import React from "react";
import profilePic from "../assets/profilePic.jpg";

function Staff() {
  return (
    <div class="staffContainer">
      <div class="staffContent">
        <div class="staffImage">
          <img src={profilePic} alt="profilePic" />
        </div>
        <div class="staffBioOne">
          <h2>Dr.Tamas Pinter</h2>
          <h3>Graduated: 2023</h3>
          <p>
            blahs hak hahsk ah akh a akhakhk ahjkaj h ajhah dkjha dkahdjkahjdh
            akdhjakdj ahk
          </p>
        </div>
      </div>
      <div class="staffContent">
        <div class="staffImage">
          <img src={profilePic} alt="profilePic" />
        </div>
        <div class="staffBioTwo">
          <h2>Dr. Julia Styles</h2>
          <h3>Graduated: 2023</h3>
          <p>
            uadbasbdisab dsabdibsai dbisabd isbadijsa b dij sbak djbksajdb sadb
          </p>
        </div>
      </div>
      <div class="staffContent">
        <div class="staffImage">
          <img src={profilePic} alt="profilePic" />
        </div>
        <div class="staffBioThree">
          <h2>Dr. John Doe</h2>
          <h3>Graduated: 2023</h3>
          <p>
            uadbasbdisab dsabdibsai dbisabd isbadijsa b dij sbak djbksajdb sadb
          </p>
        </div>
      </div>
      <div class="staffContent">
        <div class="staffImage">
          <img src={profilePic} alt="profilePic" />
        </div>
        <div class="staffBioFour">
          <h2>Dr. Jane Doe</h2>
          <h3>Graduated: 2023</h3>
          <p>
            uadbasbdisab dsabdibsai dbisabd isbadijsa b dij sbak djbksajdb sadb
          </p>
        </div>
      </div>
    </div>
  );
}

export default Staff;
