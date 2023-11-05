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
            Please feel free to browse our website for more information on our
            wonderful staff! We hope you can see all our staff are not only
            highly trained and experienced, but we are all always looking to
            give you the best possible experience! Our page also shows a brief
            glance at what services we offer and their estimated cost. Also as a
            bonus helpful page please see our Appointments page to see what
            available times we have in the next 2 weeks. At your convenience,
            find a time that works best for you and call our offices to reserve!
            Hope to see you soon!!
          </p>
        </div>
      </div>
    </div>
  );
}

export default Welcome;
