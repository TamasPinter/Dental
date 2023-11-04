import React, { useState } from "react";
import CalendarComponent from "./calendarComponent";
import AvailableTimesComponent from "./availableTimes";

function Appointment() {
  const [selectedDate, setSelectedDate] = useState(null);

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  return (
    <div>
      <h1>Dental Hygiene Clinic</h1>
      <CalendarComponent
        selectedDate={selectedDate}
        handleDateChange={handleDateChange}
      />
      {selectedDate && <AvailableTimesComponent selectedDate={selectedDate} />}
    </div>
  );
}
export default Appointment;
