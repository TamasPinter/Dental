import React, { useState } from "react";
import NavTabs from "./navTabs";
import Home from "./components/home";
import Location from "./components/location";
import Staff from "./components/staff";
import Procedures from "./components/procedures";
import Appointment from "./components/appointment";
import Footer from "./components/footer";

export default function HomeContainer() {
  const [currentPage, setCurrentPage] = useState("Home");
  const renderPage = () => {
    if (currentPage === "Home") {
      return <Home />;
    }
    if (currentPage === "Staff") {
      return <Staff />;
    }
    if (currentPage === "Procedures") {
      return <Procedures />;
    }
    if (currentPage === "Appointment") {
      return <Appointment />;
    }
  };

  const handlePageChange = (page) => setCurrentPage(page);
  return (
    <div class="mainElement">
      <NavTabs currentPage={currentPage} handlePageChange={handlePageChange} />
      <div class="mainContent">
      <Location />
      {renderPage()}
      </div>
      <Footer />
    </div>
  );
}
