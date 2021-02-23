const mergeWrite = require('./files')
const getIngredient = require('./spoonacular_api')


// getIngredient('c', mergeWrite)


const getIngredients = () => {
  for (let i = 97; i < 123; i++) {
    let phrase = String.fromCharCode(i)
    getIngredient(phrase, mergeWrite('_'+phrase));
  }
}


const mergeIngredients = () => {
  let importedIngredients = {};
  let allIngredients = {};

  for (let i = 97; i < 123; i++) {
    let phrase = String.fromCharCode(i)
    // getIngredient(phrase, mergeWrite('_' + phrase));

    importedIngredients = require(`./data/localIngredients_${phrase}`)
    Object.assign(allIngredients, importedIngredients)
  }

  return allIngredients
}

mergeWrite('_all')(mergeIngredients())
