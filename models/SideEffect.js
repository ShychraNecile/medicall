const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// create SideEffectSchema

const SideEffectSchema = new Schema({
  sideEffect: {
    type: String
  },
  nameMedication: {
    type: String
  }
});
// turn Schema into model
module.exports = SideEffect = mongoose.model("SideEffect", SideEffectSchema);
