import React from "react";

function NavTabs({ currentPage, handlePageChange }) {
  return (
    <ul class="navigation">
      <li class="navigation-items">
        <a
          href="#home"
          onClick={() => handlePageChange("Home")}
          className={currentPage === "Home" ? "nav-link active" : "nav-link"}
        >
          Home
        </a>
      </li>
      <li class="navigation-items">
        <a
          href="#staff"
          onClick={() => handlePageChange("Staff")}
          className={currentPage === "Staff" ? "nav-link active" : "nav-link"}
        >
          Staff
        </a>
      </li>
      <li class="navigation-items">
        <a
          href="#procedures"
          onClick={() => handlePageChange("Procedures")}
          className={
            currentPage === "Procedures" ? "nav-link active" : "nav-link"
          }
        >
          Procedures
        </a>
      </li>
      <li class="navigation-items">
        <a
          href="#appointment"
          onClick={() => handlePageChange("Appointment")}
          className={
            currentPage === "Appointment" ? "nav-link active" : "nav-link"
          }
        >
          Appointment
        </a>
      </li>
    </ul>
  );
}

export default NavTabs;
