const mongoose = require('mongoose');
const { v4: uuidv4 } = require('uuid');

const account = require('../models/account');
const transaction = require('../models/transaction');
const { successResponse, errorResponse } = require('../utils');

const addAccount = async (req, res) => {
  try {
    const { username, emailID, accType, balance } = req.body;

    // checking if account allready exist or not 
    const userData = await account.findOne({ emailID: emailID, accType: accType });
      if (userData) {
        return errorResponse(req, res, 'you allready have account', 400);
      }
      else {

        // creating payload
        const payload = {
          username,
          emailID,
          accNumber: uuidv4(),
          accType,
          balance,
        };

        // insert account payload in database
        newAccount = new account(payload);
        const insertAccount = await newAccount.save();
        console.log('account created successful');

        return successResponse(req, res, insertAccount, 200);
      }

  } catch (error) {
    console.log(error.message);
    return errorResponse(req, res, 'something went wrong', 400, { err: error });
  }
};

const newTransaction = async (req, res) => {
  try {

  } catch (error) {
    return errorResponse(req, res, "something went wrong", 400, { err: error });
  }
};

const viewTransaction = async (req, res) => {
  try {

  } catch (error) {
    return errorResponse(req, res, 'something went wrong', 400, { err: error });
  }
};


module.exports = { addAccount, newTransaction, viewTransaction };