const express = require("express");
const cors = require("cors");
const app = express();
const port = 3001;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Something broke!");
});

const availableTimes = {
  "Sat Nov 04 2023 00:00:00 GMT-0400 (Eastern Daylight Time)": [
    "9:00 AM",
    "10:00 AM",
    "11:00 AM",
    "1:00 PM",
    "2:00 PM",
    "4:00 PM",
  ],
  "2023-11-05": [
    "9:00 AM",
    "10:00 AM",
    "11:00 AM",
    "1:00 PM",
    "3:00 PM",
    "4:00 PM",
  ],
};

app.get("/api/appointments", (req, res) => {
  const { date } = req.query;
  console.log(`Received request for date: ${date}`);
  const availableTimesForDate = availableTimes[date] || [];
  console.log(`Sending available times for ${date} ${availableTimesForDate}`);
  res.json({ times: availableTimesForDate });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
