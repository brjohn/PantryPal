import React from 'react';
import {fetchRecipeFromMongoDB} from '../../util/recipe_util';
import { getRecipeInformation } from "../../util/spoonacular_api/spoonacular_api"
import "./show.css";

class AlternateShow extends React.Component {
    constructor(props){
        super(props);

        this.saveRecipe = this.saveRecipe.bind(this);
        this.listIngredients = this.listIngredients.bind(this);
    }

    listIngredients(){
        const ingredients = this.props.recipeObject.extendedIngredients;
        return (
            <ul className="ingrediens-ul">
               {ingredients.map((ingredient, idx) => {
                    return (
                        <li className="ingredient-item" key={idx}>{ingredient.original}</li>
                    )
                }) }
            </ul>
        )    
    }

    saveRecipe(){
        if (!this.props.savedRecipes.includes(this.props.recipeObject)){
            this.props.savedRecipes.push(this.props.recipeObject)
                .then(this.setState({savedRecipes: this.props.savedRecipes}))
                .then(this.props.updateUser({ id: this.props.currentUser.id, savedRecipes: this.props.savedRecipes }) )
        } 
    }

    render(){
        // debugger
        return (
            <div>This is the Recipe Show 
                <h1 className="recipe-title">{this.props.recipeObject.title}</h1>
                <div className="recipe-ingredients">{this.listIngredients()}</div>
                <p className="recipe-instructions">{this.props.recipeObject.instructions}</p>
                <div className="save-recipe-div" onClick={this.saveRecipe}>Save Icon</div>
            </div>
        )
    }
}

export default AlternateShow;