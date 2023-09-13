const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();
const bodyParser = require("body-parser");



const PORT = process.env.PORT || 8080;
const app = express();

//Import routes
var apiRoutes = require("./api/routes.js");

//Configure bodyparse to handle post request
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

mongoose
  .connect(
    `mongodb+srv://${process.env.MONGODB_USER}:${process.env.MONGODB_PASS}@cluster0.kdxfh4d.mongodb.net/?retryWrites=true&w=majority`
  )
  .then(() => console.log("Database connection is Successfull!"))
  .catch(() => {
    console.log(err);
  }),
  {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  };
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
  next();
});
app.get("/", function (req, res) {
  res.send("Welcome to Religious Delivery");
});


//All API Route Goes here
app.use("/api/", apiRoutes);

app.listen(PORT, () => {
  console.log(`Server running on PORT in http://localhost:${PORT}`);
});
