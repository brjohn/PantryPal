const axios = require('axios');
const spoonacular = require('./keys');
const apiKeyToUse = spoonacular["apiKey" + Math.floor((Math.random() * 4) + 1)] //uses random apiKey between 1 and 4

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
    debugger
    printToFileFunction(payload.data.results)
  })

  .catch(err => console.log(err))




// 02. A function that gets recipes given ingredients
const getRecipeByIngredients = (ingredients) => axios.get(
  spoonacular.getRecipesByIngredientsURL,
  {
    params: { // params is the body parameters
      ingredients,
      apiKey: apiKeyToUse,
      number: 100, //100 is the maximum
    }

  })
  .then(payload => {
    console.log(payload.data[0])
    // we're gonna need to dispatch this through our reducers and middleware
    
  })

  .catch(err => console.log(err))



// 03. A function that gets information on a particular recipe
const getRecipeInformation = (id) => axios.get(
  spoonacular.getRecipeInformationURL(id),
  { params: {
    apiKey: apiKeyToUse,
  }}


).then(payload => {
  console.log(payload.data.extendedIngredients)
  // we're gonna need to dispatch this through our reducers and middleware
})

  .catch(err => console.log(err))


// getRecipeInformation(45641)


// Exporting 3 functions that were created
module.exports = {
  getIngredient,
  getRecipeByIngredients,
  getRecipeInformation
}


// getRecipeByIngredients('apple,blueberry')
// getRecipeInformation(9003)
// getIngredient('apple')



// example result of "getRecipeByIngredients"
// {
//   id: 184501,
//     title: 'Apple Turnover Smoothies',
//       image: 'https://spoonacular.com/recipeImages/184501-312x231.jpg',
//         imageType: 'jpg',
//           usedIngredientCount: 3,
//             missedIngredientCount: 2,
//               missedIngredients:
//   [{
//     id: 1042035,
//     amount: 2,
//     unit: 'servings',
//     unitLong: 'servings',
//     unitShort: 'servings',
//     aisle: 'Spices and Seasonings',
//     name: 'apple pie spice',
//     original: 'Apple pie spice',
//     originalString: 'Apple pie spice',
//     originalName: 'Apple pie spice',
//     metaInformation: [],
//     meta: [],
//     image:
//       'https://spoonacular.com/cdn/ingredients_100x100/garam-masala.jpg'
//   },
//   {
//     id: 9019,
//     amount: 0.5,
//     unit: 'cup',
//     unitLong: 'cups',
//     unitShort: 'cup',
//     aisle: 'Canned and Jarred',
//     name: 'unsweetened applesauce',
//     original: '1/2 cup unsweetened applesauce',
//     originalString: '1/2 cup unsweetened applesauce',
//     originalName: 'unsweetened applesauce',
//     metaInformation: [Array],
//     meta: [Array],
//     image:
//       'https://spoonacular.com/cdn/ingredients_100x100/applesauce.png'
//   }],
//     usedIngredients:
//   [{
//     id: 9003,
//     amount: 1,
//     unit: 'cup',
//     unitLong: 'cup',
//     unitShort: 'cup',
//     aisle: 'Produce',
//     name: 'apple',
//     original: '1 cup chopped apple',
//     originalString: '1 cup chopped apple',
//     originalName: 'chopped apple',
//     metaInformation: [Array],
//     meta: [Array],
//     image: 'https://spoonacular.com/cdn/ingredients_100x100/apple.jpg'
//   },
//   {
//     id: 9003,
//     amount: 1,
//     unit: 'slices',
//     unitLong: 'slice',
//     unitShort: 'slice',
//     aisle: 'Produce',
//     name: 'apple',
//     original: 'Apple slices',
//     originalString: 'Apple slices',
//     originalName: 'Apple',
//     metaInformation: [],
//     meta: [],
//     image: 'https://spoonacular.com/cdn/ingredients_100x100/apple.jpg'
//   },
//   {
//     id: 9003,
//     amount: 12,
//     unit: 'oz',
//     unitLong: 'ounces',
//     unitShort: 'oz',
//     aisle: 'Produce',
//     name: 'apple',
//     original:
//       '2 containers (6 oz each) Yoplait® Light Fat Free apple turnover yogurt',
//     originalString:













//       '2 containers (6 oz each) Yoplait® Light Fat Free apple turnover yogurt',
//     originalName:
//       'containers each) Yoplait® Light Fat Free apple turnover yogurt',
//     metaInformation: [Array],
//     meta: [Array],
//     extendedName: 'fat free light apple',
//     image: 'https://spoonacular.com/cdn/ingredients_100x100/apple.jpg'
//   }],
//     unusedIngredients: [],
//       likes: 0
// }