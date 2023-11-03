import React from "react";
import Welcome from "./welcome";
import Staff from "./staff";
import Procedures from "./procedures";
import Appointment from "./appointment";

function Home({ page }) {
  if (page === "welcome") {
    return <Welcome />;
  } else if (page === "staff") {
    return <Staff />;
  } else if (page === "procedures") {
    return <Procedures />;
  } else if (page === "appointment") {
    return <Appointment />;
  } else {
    return <Welcome />;
  }
}

export default Home;
