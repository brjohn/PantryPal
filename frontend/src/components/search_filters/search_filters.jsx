import React from 'react';
import { addIcon } from '../search/search_icon';

class Preferences extends React.Component {
    constructor(props) {
        super(props);
        
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

  addToExclusions(ingredient) {
    return () => { 
        if (!this.props.exclusions.include(ingredient) {
          this.props.ingredients.push(res.data)
        }

        this.props.setPantryState({ingredients: this.props.ingredients}) // this updates the pantry since search and pantry are two different components
        this.props.updateUser({ id: this.props.currentUser.id, ingredients: this.props.ingredients }) // this updates MongoDB
      })
    }
  }


    render(){

        <div className="search-filter-box">
            <div className="preferences-box">
                <form>
                    
                </form>
            </div>
            <div className="exclusions-box">
                <div></div>
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
                                    <div className='plus-sign' onClick={this.addToExclusions(el)}>
                                        {addIcon}
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>

        </div>
    }

}

export default SearchFilters;