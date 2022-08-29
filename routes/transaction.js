const express = require('express');

const {
  addAccount,
  transaction,
  viewTransaction,
} = require("../controllers/transactionController");

const route = express.Router();

route.post('/account', addAccount);
route.post('/transaction', transaction);
route.get('/transaction', viewTransaction);

module.exports = route;