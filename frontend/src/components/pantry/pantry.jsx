import React from 'react';
import './pantry.css'
import SearchContainer from '../search/search_container';
import { removeIcon } from '../search/search_icon';

class Pantry extends React.Component {
  removeIngredient(ingredientIndex) {
    return () => {
      let newIngredients = []
      this.props.ingredients.forEach((ingredient, idx) => {
        if (idx !== ingredientIndex) newIngredients.push(ingredient)
      })
      this.props.updateUser({ id: this.props.currentUser.id, ingredients: newIngredients })
    }
  }



  render() {
    const {ingredients} = this.props;
    return (
      <div className="flex-container">

        <div className="search">
          <SearchContainer/>
        </div>



        <div className="pantry">
          <div className="p-title">
            <h1>Pantry</h1>

          </div>

          <div className="row">
            {ingredients.map((ingredient, ingredientIndex) => {
              return (
                <div className="ingredient" key={ingredient.name} >
                  <div onClick={this.removeIngredient(ingredientIndex)} className="remove-button-div"> 
                    {removeIcon}
                  </div>
                  <div className="i-img">
                    <img src={`https://spoonacular.com/cdn/ingredients_100x100/${ingredient.image}`} alt={ingredient.name} />
                  </div>
                  <div className="i-title">
                    <h1 >{ingredient.name}</h1>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    )
  }
}

export default Pantry;