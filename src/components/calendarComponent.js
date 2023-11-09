import React, { useState } from "react";
import DatePicker from "react-date-picker";
import "react-date-picker/dist/DatePicker.css";
import "react-calendar/dist/Calendar.css";

function CalendarComponent({ handleDateChange }) {
  const [selectedDate, setSelectedDate] = useState(new Date());
  return (
    <div>
      <h2>Select a date to view available time slots</h2>
      <DatePicker
        maxDate={new Date(new Date().setDate(new Date().getDate() + 14))}
        selected={selectedDate}
        onChange={(date) => {
          setSelectedDate(date);
          handleDateChange(date); // Pass the selected date to the parent component
          // set max date to 2 weeks from today
        }}
      />
    </div>
  );
}

export default CalendarComponent;
