import React, { useState } from "react";
import DatePicker from "react-date-picker";
import "react-date-picker/dist/DatePicker.css";
import "react-calendar/dist/Calendar.css";

function CalendarComponent({ handleDateChange }) {
  const [selectedDate, setSelectedDate] = useState(new Date());
  return (
    <div>
      <h2>Select a Date:</h2>
      <DatePicker
        selected={selectedDate}
        onChange={(date) => {
          setSelectedDate(date);
          handleDateChange(date); // Pass the selected date to the parent component
        }}
      />
    </div>
  );
}

export default CalendarComponent;
