const mongoose = require("mongoose");
const Schema = require("mongoose");

const accountSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },
    status: {
      type: String,
      require: true,
      enum: ["Not Started", "In Progress", "Complete"],
      trim: true,
    },
  },
  {
    timestamps: true,
  }
);

const account = new mongoose.model("account", accountSchema);

module.exports = account;
