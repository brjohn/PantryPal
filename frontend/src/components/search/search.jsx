import React from 'react';
import searchIngredient from './search_function';
import './search.css'
import { addIcon } from './search_icon';
import { fetchIngredient } from '../../util/user_api_util';




class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = { searching: '' }
    this.updateSearch = this.updateSearch.bind(this);
    this.addToPantry = this.addToPantry.bind(this);
  }



  addToPantry(ingredient) {
    return () => { 
      fetchIngredient(ingredient).then(res => {
        if (!this.props.ingredients.some(el => el.name === res.data.name)) {
          this.props.ingredients.push(res.data)
        }
        this.props.setPantryState({ingredients: this.props.ingredients})
        // let newUser = 
        this.props.updateUser({ id: this.props.currentUser.id, ingredients: this.props.ingredients })
      })
    }
  }


  updateSearch() {
    return (e) => {
      if (e.target.value === '') {
        e.target.nextElementSibling.classList.add('hide')
      } else {
        e.target.nextElementSibling.classList.remove('hide')
      }
      this.setState({ searching: e.target.value })
    }
  }





  render() {
    return (
      <div>
        <input type="text" className="search-bar"
          placeholder="Search Ingredients . . . "
          onChange={this.updateSearch()} />

        <div className='search-values hide'>
          {searchIngredient(this.state.searching).map((el, idx) => {
            return (
              <div key={el + idx} className='search-result-div'>
                <div className='search-results' 
                  
                >{el}</div>

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