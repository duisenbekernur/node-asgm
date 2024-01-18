const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const port = 3000;

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname + "/public"));
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Internal Server Error');
});

// Routes
const bmiRoutes = require("./routes/bmiRoutes");
app.use("/", bmiRoutes);

// Server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
