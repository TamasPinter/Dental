import React, { useState } from "react";
import CalendarComponent from "./calendarComponent";
import AvailableTimesComponent from "./availableTimes";

function Appointment() {
  const [selectedDate, setSelectedDate] = useState(null);

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  return (
    <div class="appointmentContainer">
      <h1>Pearly Whites Dental Hygiene Available Appointments</h1>
      <CalendarComponent
        selectedDate={selectedDate}
        handleDateChange={handleDateChange}
      />
      {selectedDate && <AvailableTimesComponent selectedDate={selectedDate} />}
    </div>
  );
}
export default Appointment;
