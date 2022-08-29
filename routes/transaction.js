const express = require("express");

const { login, register, first } = require("../controllers/transactionController");

const route = express.Router();

route.get('/', first);

module.exports = route;