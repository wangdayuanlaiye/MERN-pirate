const mongoose = require("mongoose");

const PiratesSchema = {
  name: {
    type: String,
    required: [true, "name is required"],
  },
  url: {
    type: String,
    required: [true, "url is required"],
  },
  treasure: {
    type: Number,
    required: [true, "treasure is required"],
  },
  phrase: {
    type: String,
    required: [true, "phrase is required"],
  },
  position: {
    type: String,
    enum: ["Captain", "First Mate", "Quarter Master", "Boatswain", "Powder Monkey"],
    required: [true, "position is required"],
  },
  leg: {
    type: Boolean,
    required: [true, "leg is required"],
  },
  patch: {
    type: Boolean,
    required: [true, "patch is required"],
  },
  hand: {
    type: Boolean,
    required: [true, "hand is required"],
  },
};
module.exports = mongoose.model("Pirate", PiratesSchema);