import React from "react";
import dentalOne from "../assets/dentalOne.webp";
import dentalTwo from "../assets/dentalTwo.webp";

function Welcome() {
  return (
    <div class="welcomeContainer">
      <div class="welcomeContent">
        <h1>Welcome to Pearly Whites Dental Hygiene!</h1>
        <div class="welcomeImage">
          <img src={dentalOne} alt="dentalOne" />
        </div>
        <div class="welcomeTextOne">
          <p>
            Welcome to Pearly Whites Dental Hygenie! We see teeth as one of the
            best first impressions, and here we do our best to provide everyone
            with the best possible smile! We offer a wide variety of services,
            from simple cleanings to full mouth reconstructions. Our clinic was
            founded in 2023 and we have maintained the highest of standards in
            practise. We welcome you to drop in and see for yourselves. Our
            staff consists of highly trained professionals and a dazzle of
            friendly smiles!
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
          </p>
        </div>
        <div class="welcomeImage">
          <img src={dentalTwo} alt="dentalTwo" />
        </div>
        <div class="welcomeTextTwo">
          <p>
            We hope to see your radiant smile soon, and let's all put our best
            smiles first!
          </p>
        </div>
      </div>
    </div>
  );
}

export default Welcome;
