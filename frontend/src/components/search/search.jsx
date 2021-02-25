import React from 'react';
import searchIngredient from './search_function';
import './search.css'


class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = { searching: '' }
    this.updateSearch = this.updateSearch.bind(this);
  }



  addToPantry(ingredient) {
    return () => { console.log(ingredient+ ' added')}
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
          placeholder="Search . . ."
          onChange={this.updateSearch()} />

        <div className='search-values hide'>
          {searchIngredient(this.state.searching).map((el, idx) => {
            return (
              <div key={el + idx}>
                <div className='search-results' 
                  onClick={this.addToPantry(el)}
                >{el}</div>
              </div>
            )
          })}
        </div>
      </div>
    )
  }
}

export default Search;