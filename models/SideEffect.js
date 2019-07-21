const mongoose = require("mongoose");

// create SideEffectSchema
const SideEffectSchema = mongoose.Schema({
  sideEffect: {
    type: String,
    required: true
  },
  nameMedication: {
    type: String
  }
});

// turn Schema into model
const SideEffect = (model.exports = mongoose.model(
  "SideEffect",
  SideEffectSchema
));

// get sideEffects
module.exports.getSideEffects = function(callback) {
  SideEffect.find(callback);
};
