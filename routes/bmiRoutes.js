// bmiRoutes.js

const express = require("express");
const router = express.Router();
const path = require("path");

router.get("/", (req, res) => {
  res.sendFile(path.resolve("views/index.html"));
});

router.post("/bmicalculator", (req, res) => {
  // BMI calculation logic here
  const height = parseFloat(req.body.height);
  const weight = parseFloat(req.body.weight);

  // Additional input fields for age and gender
  const age = parseInt(req.body.age);
  const gender = req.body.gender;

  // Dropdown for selecting units (Imperial or Metric)
  const units = req.body.units;

  console.log(req.body)

  // Calculate BMI based on units, height, and weight
  let bmi;
  if (units === "imperial") {
    bmi = (weight / (height * height)) * 703;
  } else {
    bmi = weight / (height * height);
  }

  // Display the calculated BMI result along with a meaningful interpretation
  let interpretation;
  // Your interpretation logic here based on BMI

  res.send({ bmi: bmi, interpretation: interpretation });
});

module.exports = router;
