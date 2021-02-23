const database = require('./../../spoonacular_api/data/localIngredients_all');

let names = [];
database.forEach(el => names.push(el.name))


const searchIngredient = (db, searchQuery) => {
  let queryArrayPrimary = [];
  let queryArraySecondary = [];

  db.forEach(el => {
    if (el.search(searchQuery) === 0) queryArrayPrimary.push(el)
    if (el.search(searchQuery) > 0) queryArraySecondary.push(el)
  })
  
  return queryArrayPrimary.concat(queryArraySecondary);
}


console.log(searchIngredient(names, 'ap'));



