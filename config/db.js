const mongoose = require("mongoose");
const config = require("config");
const mongoDatabase = config.get("mongoURI");

const connectDb = async () => {
  try {
    await mongoose.connect(mongoDatabase, {
      useNewUrlParser: true,
      useCreateIndex: true,
      useFindAndModify: false
    });
    console.log("Database connected");
  } catch (error) {
    console.error(error.message);
    process.exit(1);
  }
};
module.exports = connectDb;
