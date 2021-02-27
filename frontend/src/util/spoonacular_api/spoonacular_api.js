const axios = require('axios');
const spoonacular = require('./keys');
// const apiKeyToUse = spoonacular["apiKey" + Math.floor((Math.random() * 4) + 1)] //uses random apiKey between 1 and 4
const apiKeyToUse = spoonacular.apiKey5


// 01. A function that gets ingredients
const getIngredient = (query, printToFileFunction) => axios.get(
  spoonacular.getIngredientsURL,
  {
  params: { // params is the body parameters
    query,
    apiKey: apiKeyToUse,
    number: 100 //100 is the maximum
  }

})
  .then(payload => {
    console.log(payload.data.results)
    // debugger
    printToFileFunction(payload.data.results)
  })

  .catch(err => console.log(err))




// 02. A function that gets recipes given ingredients
const getRecipeByIngredients = (ingredients, cbFunction) => axios.get(
  spoonacular.getRecipesByIngredientsURL,
  {
    params: { // params is the body parameters
      ingredients,
      apiKey: apiKeyToUse,
      number: 100, //100 is the maximum
    }

  })

  .then(payload => cbFunction(payload))
  .catch(err => console.log(err))



// 03. A function that gets information on a particular recipe
const getRecipeInformation = (id, cbFunction) => axios.get(
  spoonacular.getRecipeInformationURL(id),
  { params: {
    apiKey: apiKeyToUse,
  }}


).then(payload => cbFunction(payload)) // we're gonna need to dispatch this through our reducers and middleware)
  .catch(err => console.log(err))


// getRecipeInformation(45641)


// Exporting 3 functions that were created
module.exports = {
  getIngredient,
  getRecipeByIngredients,
  getRecipeInformation
}


// getRecipeByIngredients('apple,blueberry', console.log)
getRecipeInformation(9003, console.log)
// getIngredient('apple')








// {
//   id: 423958,
//     title: 'Fruit Salad with O.J. Reduction',
//       image: 'https://spoonacular.com/recipeImages/423958-312x231.jpg',
//         imageType: 'jpg',
//           usedIngredientCount: 3,
//             missedIngredientCount: 4,
//               missedIngredients:
//   [{
//     id: 9152,
//     amount: 2,
//     unit: 'tablespoons',
//     unitLong: 'tablespoons',
//     unitShort: 'Tbsp',
//     aisle: 'Produce',
//     name: 'lemon juice',
//     original: '2 tablespoons lemon juice',
//     originalString: '2 tablespoons lemon juice',
//     originalName: 'lemon juice',
//     metaInformation: [],
//     meta: [],
//     image:
//       'https://spoonacular.com/cdn/ingredients_100x100/lemon-juice.jpg'
//   },
//   {
//     id: 9202,
//     amount: 2,
//     unit: 'medium',
//     unitLong: 'mediums',
//     unitShort: 'medium',
//     aisle: 'Produce',
//     name: 'navel oranges',
//     original: '2 medium navel oranges, peeled, sectioned and chopped',
//     originalString: '2 medium navel oranges, peeled, sectioned and chopped',
//     originalName: 'navel oranges, peeled, sectioned and chopped',
//     metaInformation: [Array],
//     meta: [Array],
//     image:
//       'https://spoonacular.com/cdn/ingredients_100x100/mandarin-or-tangerines-or-clementines.jpg'
//   },
//   {
//     id: 9206,
//     amount: 1,
//     unit: 'cup',
//     unitLong: 'cup',
//     unitShort: 'cup',
//     aisle: 'Beverages',
//     name: 'orange juice',
//     original: '1 cup orange juice',
//     originalString: '1 cup orange juice',
//     originalName: 'orange juice',
//     metaInformation: [],
//     meta: [],
//     image:
//       'https://spoonacular.com/cdn/ingredients_100x100/orange-juice.jpg'
//   },
//   {
//     id: 9236,
//     amount: 2,
//     unit: 'medium',
//     unitLong: 'mediums',
//     unitShort: 'medium',
//     aisle: 'Produce',
//     name: 'peaches',
//     original: '2 medium peaches, cubed',
//     originalString: '2 medium peaches, cubed',
//     originalName: 'peaches, cubed',
//     metaInformation: [Array],
//     meta: [Array],
//     image: 'https://spoonacular.com/cdn/ingredients_100x100/peach.png'
//   }],
//     usedIngredients:
//   [{
//     id: 9050,
//     amount: 2,
//     unit: 'cups',
//     unitLong: 'cups',
//     unitShort: 'cup',
//     aisle: 'Produce',
//     name: 'blueberries',
//     original: '2 cups fresh blueberries',
//     originalString: '2 cups fresh blueberries',
//     originalName: 'fresh blueberries',
//     metaInformation: [Array],
//     meta: [Array],
//     extendedName: 'fresh blueberries',
//     image:
//       'https://spoonacular.com/cdn/ingredients_100x100/blueberries.jpg'
//   },
//   {
//     id: 1069003,
//     amount: 1,
//     unit: 'medium',
//     unitLong: 'medium',
//     unitShort: 'medium',
//     aisle: 'Produce',
//     name: 'green apple',
//     original: '1 medium green apple, cubed',
//     originalString: '1 medium green apple, cubed',
//     originalName: 'green apple, cubed',
//     metaInformation: [Array],
//     meta: [Array],
//     image:
//       'https://spoonacular.com/cdn/ingredients_100x100/grannysmith-apple.png'
//   },
//   {
//     id: 1079003,
//     amount: 2,
//     unit: 'medium',
//     unitLong: 'mediums',
//     unitShort: 'medium',
//     aisle: 'Produce',
//     name: 'red apples',
//     original: '2 medium red apples, cubed',
//     originalString: '2 medium red apples, cubed',
//     originalName: 'red apples, cubed',
//     metaInformation: [Array],
//     meta: [Array],
//     image:
//       'https://spoonacular.com/cdn/ingredients_100x100/red-delicious-apples.png'
//   }],
//     unusedIngredients:
//   [{
//     id: 9003,
//     amount: 1,
//     unit: 'serving',
//     unitLong: 'serving',
//     unitShort: 'serving',
//     aisle: 'Produce',
//     name: 'apple',
//     original: 'apple',
//     originalString: 'apple',
//     originalName: 'apple',
//     metaInformation: [],
//     meta: [],
//     image: 'https://spoonacular.com/cdn/ingredients_100x100/apple.jpg'
//   }],
//     likes: 0
// }