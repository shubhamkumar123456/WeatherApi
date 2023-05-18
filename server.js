const express = require("express");
const app = express();
require("dotenv").config();
app.use(express.json());

const forcastRoute = require("./routes/forecast");
const currentWeatherRoute = require("./routes/currentWeather");

// Routes
app.use("/weatherForcast", forcastRoute);
app.use("/currentWeather", currentWeatherRoute);

app.listen(3001, () => {
  console.log("server is listening...");
});
