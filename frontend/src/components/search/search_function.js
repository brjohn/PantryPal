import ingredients from './search_data'

// const ingredients = require('./search_data')

const searchIngredient = (searchQuery) => {
  let names = {}

  ingredients.forEach(ingredient => {
    names[ingredient.name] = ingredient;
  })


  let queryArrayPrimary = [];
  let queryArraySecondary = [];

  Object.keys(names).forEach(ingredientName => {
    if (ingredientName.search(searchQuery) === 0) queryArrayPrimary.push(names[ingredientName])
    if (ingredientName.search(searchQuery) > 0) queryArraySecondary.push(names[ingredientName])
  })

  return queryArrayPrimary.concat(queryArraySecondary);
}

// console.log(searchIngredient('apple'));


export default searchIngredient;



