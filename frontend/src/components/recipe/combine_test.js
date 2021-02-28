
const recipeInfo = [{ id: 1, title: 'Tului' }, { id: 2, title: 'Brynn' }, { id: 3, title: 'Alex' }, { id: 4, title: 'Cole' }]
const recipes = [{ id: 2, otherInfo: 'Brynn123' }, { id: 3, otherInfo: 'Alex123' }, { id: 4, otherInfo: 'Cole123' }, { id: 1, otherInfo: 'Tului123' }]





const combine = (recipeInfoArr, recipesArr) => {
  let combinedArr = [];
  if (recipeInfoArr.every((el, idx) => el.id === recipesArr[idx].id)) {
    console.log(true)
    for (let i = 0; i < recipeInfoArr.length; i++) {
      combinedArr.push(Object.assign({}, recipeInfoArr[i], recipesArr[i]))
    }
  } else {
    console.log(false)
    for (let i = 0; i < recipeInfoArr.length; i++) {
      for (let j = 0; j < recipeInfoArr.length; j++) {
        if (recipeInfoArr[i].id === recipesArr[j].id) {
          combinedArr.push(Object.assign({}, recipeInfoArr[i], recipesArr[j]))
          j = recipeInfoArr.length // breakts current loop
        }
      }
    }
  }
  return combinedArr
}

console.log(combine(recipeInfo, recipes));


