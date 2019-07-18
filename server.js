const express = require("express");
const connectDb = require("./config/db");
const app = express();

connectDb();
app.get("/", (req, res) => res.send("Hallo, gelukt!!!"));

app.listen(3000, () => console.log(`server started`));
