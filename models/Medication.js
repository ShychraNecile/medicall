// Required dependencies
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// create MedicationSchema

const MedicationSchema = new Schema({
  medicationName: {
    type: String
  },
  sideEffects: {
    type: Array
  }
});
// turn Schema into model
module.exports = Medication = mongoose.model("Medication", MedicationSchema);
