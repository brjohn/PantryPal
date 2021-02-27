const express = require("express");
const router = express.Router();

const Recipe = require('../../models/Recipe');


router.get('/:id', (req, res) => {
    Ingredient.findOne({ recipeObject: {id: req.params.id}})
        .then(recipeInfo => {
            console.log(recipeInfo)
            res.json(recipeInfo)})
        .catch(err => console.log(err))
})

router.post('/', (req, res) => {
    const newRecipe = new Recipe({
        recipeObject: req.body   //probably change this - don't know what we need
    })
    newRecipe.save().then(recipe => res.json(recipe));
})



module.exports = router;