const mongoose = require("mongoose");

const transactionSchema = new mongoose.Schema(
  {
    fromAccountId: {
      type: String,
      required: true,
      trim: true,
    },
    toAccountId: {
      type: String,
      required: true,
      trim: true,
    },
    amount: {
      type: String,
      required: true,
      trim: true,
    },
  },
  {
    timestamps: true,
  }
);

const transaction = new mongoose.model("transaction", transactionSchema);

module.exports = transaction;
