const SideEffect = require("../medicall/models/SideEffect");
const router = express.Router();
const express = require("express");
const config = require("config");
const Medication = require("../medicall/models/Medication");
//
const connectDb = require("./config/db");
const app = express();
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

SideEffect = require("../medicall/models/SideEffect");

// connect to mongoose

mongoose.connect(
  "mongodb+srv://AnneApp:MEgustaAMOR-2012@annedb-wzs4q.azure.mongodb.net/test?retryWrites=true&w=majority"
);
const db = mongoose.connection;

// route:       GET medicall/models/SideEffects
// description: Get the sideeffect inserted by user
// acces:       ...

/*router.get("/medicall", funtion(req,res){
    res.send({type: "GET"});
});

module.exports = router;*/

app.get("/medicall/models/SideEffect", function(req, res) {
  SideEffect.getSideEffect(function(err, SideEffect) {
    if (err) {
      throw err;
    }
    res.json(SideEffect);
  });
});

app.listen(3000);
console.log("Running on port 3000!");
