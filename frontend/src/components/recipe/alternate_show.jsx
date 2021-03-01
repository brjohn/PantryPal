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
        if (!this.props.saved_recipes.includes(this.props.recipeObject)){
            this.props.saved_recipes.push(this.props.recipeObject);
            this.setState({saved_recipes: this.props.saved_recipes});
            this.props.updateUser({ id: this.props.currentUser.id, saved_recipes: this.props.saved_recipes }); 
        } 
    }

    render(){
        // debugger
        return (
            <div className="recipe-show-box">
                <h1 className="recipe-title">{this.props.recipeObject.title}</h1>
                <div className='r-img-container'>
                <img src={this.props.recipeObject.image} height="100" width="100"></img>
                </div>
                <div className="recipe-ingredients">{this.listIngredients()}</div>
                <p className="recipe-instructions">{this.props.recipeObject.instructions}</p>
                <div className="save-recipe-div" onClick={this.saveRecipe}>Save Icon</div>
            </div>
        )
    }
}

export default AlternateShow;