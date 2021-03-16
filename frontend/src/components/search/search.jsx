import React from 'react';
import searchIngredient from './search_function';
import './search.css'
import { addIcon } from './search_icon';
import fs from 'fs'
import allIngredients from './search_data';
import { getIngredient } from '../../util/spoonacular_api/spoonacular_api';



class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = { searching: '' }
    this.updateSearch = this.updateSearch.bind(this);
    this.addToPantry = this.addToPantry.bind(this);
    this.pressEnter = this.pressEnter.bind(this);
  }


  searchAndUpdateDB(ingredientName) {
    getIngredient(ingredientName, (result) => {
      debugger
    })
  }


  pressEnter(e) {
    if (e.key === 'Enter') {
      this.searchAndUpdateDB(this.state.searching)
    }
  }


  addToPantry(ingredient) {
    return () => {
      if (!this.props.ingredients.some(el => el.name === ingredient.name)) {
        this.props.updateUser({ id: this.props.currentUser.id, ingredients: this.props.ingredients.concat([ingredient]) }) // this updates MongoDB
      }
    }
  }


  updateSearch(e) {
    if (e.target.value === '') {
      e.target.nextElementSibling.classList.add('hide')
    } else {
      e.target.nextElementSibling.classList.remove('hide')
    }
    this.setState({ searching: e.target.value })
  }





  render() {
    return (
      <div>
        <input type="text" className="search-bar"
          placeholder="Search Ingredients . . . "
          onChange={this.updateSearch} onKeyDown={this.pressEnter} />

        <div className='search-values hide'>
          {searchIngredient(this.state.searching).map((el, idx) => {
            return (
              <div key={el.name + idx} className='search-result-div'>
                <div className='search-results'

                >{el.name}</div>

                <div className='plus-sign' onClick={this.addToPantry(el)}>
                  {addIcon}
                </div>

              </div>
            )
          })}
        </div>
      </div>
    )
  }
}

export default Search;