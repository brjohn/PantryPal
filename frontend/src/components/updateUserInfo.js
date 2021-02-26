const Ingredient = require("../../../models/Ingredient")
const mongoose = require('mongoose');
const User = require("../../../models/User");



const express = require("express");
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
// const keys = require('../../config/keys');
const passport = require('passport');


// const addIngredient = (ingredientName) => {
  // Ingredient.findOne({name: ingredientName})
    // .then(res => console.log(res))
    // .catch(err => console.log(err))

// }




// addIngredient('apple')

User.findOne({ email: 'demo@gmail.com' })
  .then(user => console.log(user))
  .catch(() => console.log('rejected'))





