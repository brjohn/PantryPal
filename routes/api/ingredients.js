const express = require("express");
const router = express.Router();
// const bcrypt = require('bcryptjs');
const Ingredient = require('../../models/Ingredient');
// const jwt = require('jsonwebtoken');
// const keys = require('../../config/keys');
// const passport = require('passport');




router.get('/:name', (req, res) => {
    Ingredient.findOne({name: req.params.name}) // this shoudl be by name
        .then(ingredient => res.json(ingredient))
        .catch(err =>
            res.status(404).json({ noingredientfound: 'No ingredient found with that ID' })
        );
});

// Ingredient.findOne({ name: 'apple' })
//     .then(res => console.log(res))
//     .catch(err => console.log(err))


// module.exports = router;


