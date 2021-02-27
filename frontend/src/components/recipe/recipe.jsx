import React from "react";
import RecipeSearchContainer from './recipe_search_container'
import './recipe.css'
import { getRecipeByIngredients } from "../../util/spoonacular_api/spoonacular_api"

class Recipe extends React.Component {
  constructor(props) {
    super(props);

    this.state = { recipes: this.props.recipes }
    this.updateRecipes = this.updateRecipes.bind(this);
  }

  componentDidMount() {
    this.setState({ recipes: this.props.recipes})
  }
  

  updateRecipes() {
    
    return () => {

      let ingredientsString = (this.props.ingredients.map(el => el.name)).join(',');
      getRecipeByIngredients(ingredientsString, (returnedRecipes) => { 
        this.props.updateUser({ id: this.props.currentUser.id, recipes: returnedRecipes })
        this.setState({ recipes: returnedRecipes})
      })
      
      // this.props.updateUser({ id: this.props.currentUser.id, recipes: this.props.recipes })
    } 
  }


  render() {
    let recipesArray;

    // debugger
    if (this.state.recipes.length === 0) {
      recipesArray = this.props.recipes
    } else {
      recipesArray = this.state.recipes
    }

    // debugger
    return (
      <div className="recipe">
        <h2>Your current recipes:</h2>

        <ul className="user-ingredients">
          {recipesArray.map((recipe, idx) => {
            return <li key={idx}>{recipe.title} - {recipe.missedIngredientCount}</li>;
          })}
        </ul>


        {/*  Example of what is returned inside an array
              { id: 604331,
          title: '4th of July Fruit Salad Cones',
          image: 'https://spoonacular.com/recipeImages/604331-312x231.jpg',
          imageType: 'jpg',
          usedIngredientCount: 2,
          missedIngredientCount: 2,
          missedIngredients: [ [Object], [Object] ],
          usedIngredients: [ [Object], [Object] ],
          unusedIngredients: [],
          likes: 172 }, */}







        <button onClick={this.updateRecipes()}>
          Update Recipes
        </button>
        
        {/* <RecipeSearchContainer /> */}
      </div>
    );
  }
  
}

export default Recipe;