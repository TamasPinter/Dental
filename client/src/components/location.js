import React from "react";

function Location() {
  return (
    <div class="locationBar">
      <h2>Our Clinic Location</h2>
      <div class="map">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d2893.728351588618!2d-79.84144042334755!3d43.50800216180908!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sca!4v1699045301452!5m2!1sen!2sca"
          width="300"
          height="200"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
      <div class="contact">
        <p>Our clinic is located at:</p>
        <p>You can contact us by phone @</p>
        <p>You can also find us on social media at:</p>
      </div>
    </div>
  );
}

export default Location;
