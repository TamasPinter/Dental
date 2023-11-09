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
            Welcome to Pearly Whites Dental Hygiene! We see a beautiful smile as
            one of the best first impressions one can make, and we will do our
            best to help everyone achieve optimal oral health. We offer a wide
            variety of services, from routine cleanings to whitening and more.
            Our clinic was founded in 2024 and we have continuously maintained
            the highest standards of practice. We welcome you to drop in and see
            for yourselves. Our staff consists of highly trained professionals
            and a dazzle of friendly smiles!
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
            Please feel free to browse our website for more information on our
            wonderful staff! We hope you can see all our staff are not only
            highly trained and experienced, but are always looking to give you
            the best possible experience! Our page also shows a brief glance at
            what services we offer and their estimated cost. As a bonus, please
            see our appointments page to see what available times we have in the
            next two weeks. At your convenience, find a time that works best for
            you and call our offices to reserve. We hope to see you soon.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Welcome;
