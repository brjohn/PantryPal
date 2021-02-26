const express = require("express");
const router = express.Router();

const Ingredient = require('../../models/Ingredient');


router.get('/', (req, res) => {
    console.log(req)

    // this works
    Ingredient.findOne({ name: req.body.name})
        .then(ingredientInfo => res.json(ingredientInfo))
        .catch(err => console.log(err))
// 

})



module.exports = router;

