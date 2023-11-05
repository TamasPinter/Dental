import React, { useEffect, useState } from "react";

function AvailableTimesComponent({ selectedDate }) {
  const [availableTimes, setAvailableTimes] = useState([]);

  useEffect(() => {
    console.log(`Fetching available times for date: ${selectedDate}`);
    fetch(`http://localhost:3001/api/appointments?date=${selectedDate}`)
      .then((res) => {
        if (!res.ok) {
          throw new Error("Network response was not ok");
        }
        return res.json();
      })
      .then((data) => {
        console.log(`Received available times:`, data);
        // Update the available times
        setAvailableTimes(data.times);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, [selectedDate]);

  return (
    <div>
      <h2>Dates are available on a 2 week period.</h2>
      <h2>
        Selected Date:{" "}
        {selectedDate.toLocaleDateString("en-US", {
          year: "numeric",
          month: "2-digit",
          day: "2-digit",
        })}
      </h2>
      <h2>Available Times:</h2>
      <div class="timesList">
        <ul>
          {availableTimes.map((time, index) => (
            <li key={index}>{time}</li>
          ))}
        </ul>
      </div>
      <h2>
        If there is a timeslot that works for you, please call our office to
        book your spot.
      </h2>
    </div>
  );
}

export default AvailableTimesComponent;
