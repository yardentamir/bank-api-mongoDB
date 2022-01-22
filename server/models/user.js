const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  credit: {
    type: Number,
    required: true,
  },
  cash: {
    type: Number,
    required: true,
  },
  isActive: {
    type: Boolean,
    required: true,
  },
});

module.exports = mongoose.model("User", userSchema);
