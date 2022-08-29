const express = require('express');

const {
  addAccount,
  newTransaction,
  viewTransaction,
} = require("../controllers/transactionController");

const route = express.Router();

route.post('/account', addAccount);
route.post("/transaction", newTransaction);
route.get('/transaction', viewTransaction);

module.exports = route;