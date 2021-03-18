import React from 'react';
// import {fetchRecipeFromMongoDB} from '../../util/recipe_util';
// import { getRecipeInformation } from "../../util/spoonacular_api/spoonacular_api"
import "./show.css";

class AlternateShow extends React.Component {
    constructor(props){
        super(props);

        this.saveRecipe = this.saveRecipe.bind(this);
        this.listIngredients = this.listIngredients.bind(this);
        this.listInstructions = this.listInstructions.bind(this);
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
    listInstructions(){
        if (!this.props.recipeObject.instructions) return <ul></ul>
        const instructions = this.props.recipeObject.instructions;
        const sentences = instructions.split('.')
        return (
            <div className="recipe-instructions">
                <h1 id='i-title-list'>Instructions</h1>
                <ul className="instructions-ul">
                    {sentences.map((sentence, idx) => {
                        if (idx < sentences.length - 1){
                            return (
                                <li className="instruction-li" key={idx}>{sentence}.</li>
                            )
                        } else {
                            <li className="instruction-li" key={idx}>{sentence}</li>
                        }
                        
                    }) }
                </ul>
            </div>
        )

    }

    saveRecipe(){
        // debugger
        if (!this.props.saved_recipes.some(recipe => this.props.recipeObject.title === recipe.title)){
            // debugger
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
                {/* <div className="show-content-div"> */}
                <div className='r-img-container'>
                <img src={this.props.recipeObject.image} height="100" width="100" alt=""></img>
                </div>
                <h1 id='i-title-list'>Ingredients</h1>
                <div className="recipe-ingredients">{this.listIngredients()}</div>
                {/* <h1 id='i-title-list'>Instructions</h1>
                <div className="recipe-instructions">{this.listInstructions()}</div> */}
                {this.listInstructions()}
                {/* </div> */}
                <button className="save-recipe-div" onClick={this.saveRecipe}>Save</button>
            </div>
        )
    }
}

export default AlternateShow;