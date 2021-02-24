import React from 'react';
import searchIngredient from './search_function';
import './search.css'


class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = { searching: '' }
  }

  updateSearch() {
    return (e) => {
      if (e.target.value === '') {
        debugger
        e.target.nextElementSibling.classList.add('hide')
        // e.target.classList.add('hide')
      } else {
        // e.target.classList.remove('hide')
        // debugger
        e.target.nextElementSibling.classList.remove('hide')
      }
      this.setState({ searching: e.target.value })
    }
  }


  //this is a test 

  render() {
    return (
      <div className="search-bar-div">
        <input type="text" className="search-bar"
          placeholder="Search"
          onChange={this.updateSearch()} />

        <div className='search-values hide'>
          {searchIngredient(this.state.searching).map(el => {
            return (
              <div >{el}</div>
            )
          })}
        </div>
      </div>
    )
  }
}

export default Search;