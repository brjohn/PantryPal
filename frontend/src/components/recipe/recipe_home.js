import React from 'react';
import './recipe.css'
import RecipeMain from './recipe_container'
import SearchFiltersContainer from '../search_filters/search_filters_container';


class RecipeHome extends React.Component {
  render() {
    return (

      <div id='recipe-home'>
        <div id='recipe-sidebar'>
          <SearchFiltersContainer />
        </div>

        <div id='recipe-main'>
          <RecipeMain />
        </div>


      </div>


    )
  }

}

export default RecipeHome

