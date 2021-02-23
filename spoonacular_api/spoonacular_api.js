const axios = require('axios');
const spoonacular = require('./keys');


const getIngredient = (query, printToFileFunction) => axios.get(
  spoonacular.getIngredientsURL,
  {
  params: { // params is the body parameters
    query,
    apiKey: spoonacular.apiKey2,
    number: 100 //100 is the maximum
  }

})
  .then(payload => {
    let ret = {};
    payload.data.results.forEach(el => {
      Object.assign(ret, {[el.id]: el.name})
    })

    printToFileFunction(ret)
  })

  .catch(err => console.log(err))

module.exports = getIngredient;

// getIngredient('broccoli', console.log)

