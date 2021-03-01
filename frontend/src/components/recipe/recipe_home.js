import React from 'react';
import './recipe.css'
import '../recipe_book/recipe_book.css'
import '../search_filters/search_filters.css'
import RecipeMainContainer from './recipe_container'
import SearchFiltersContainer from '../search_filters/search_filters_container';
import RecipeBookContainer from '../recipe_book/recipe_book_container';


class RecipeHome extends React.Component {
  constructor(props){
    super(props);
    this.setState = this.setState.bind(this);

  }


  render() {
    return (

      <div id='recipe-home'>
        
        <div id='recipe-sidebar'>

          <div className='recipe-book'>
            <RecipeBookContainer/>
          </div> 
          <div className='search-filters'>
            <SearchFiltersContainer />
          </div>
          
        </div>

        <div id='recipe-main'>
          <RecipeMainContainer />
        </div>
      </div>


    )
  }

}

export default RecipeHome

