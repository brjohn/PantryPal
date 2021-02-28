import React from 'react';
import './recipe.css'
import '../recipe_book/recipe_book.css'
import '../search_filters/search_filters.css'
import RecipeMain from './recipe_container'
import SearchFiltersContainer from '../search_filters/search_filters_container';
import RecipeBookContainer from '../recipe_book/recipe_book_container';


class RecipeHome extends React.Component {
  render() {
    return (

      <div id='recipe-home'>
        <div id='recipe-sidebar'>
          <div className='recipe-book'>
            <RecipeBookContainer />
          </div> 
          <div className='search-filters'>
            <SearchFiltersContainer />
          </div>
        </div>

        <div id='recipe-main'>
          <RecipeMain />
        </div>


      </div>


    )
  }

}

export default RecipeHome

