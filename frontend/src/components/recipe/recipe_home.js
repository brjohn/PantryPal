import React from 'react';
import './recipe.css'
import RecipeMain from './recipe_container'


class RecipeHome extends React.Component {
  render() {
    return (

      <div id='recipe-home'>
        <div id='recipe-sidebar'>
          
        </div>

        <div id='recipe-main'>
          <RecipeMain />
        </div>


      </div>


    )
  }

}

export default RecipeHome

