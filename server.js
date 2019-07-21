// gateway to my app
const express = require("express");
const connectDb = require("./config/db");
const app = express();
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

// connect to mongoose

mongoose.connect(
  "mongodb+srv://AnneApp:MEgustaAMOR-2012@annedb-wzs4q.azure.mongodb.net/test?retryWrites=true&w=majority"
);
const db = mongoose.connection;

app.get("/medicall/models/SideEffects", function(req, res) {
  res.send("sideEffects");
});

app.listen(3000);
console.log("Running on port 3000!");
/*
connectDb();
app.get("/", function(req, res) {
  res.send("Hallo, gelukt!!!");
});

app.listen(3000, function() {
  console.log("Listening on Port 3000");
});*/
