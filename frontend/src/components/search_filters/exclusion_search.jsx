import React from 'react';
import { addIcon } from '../search/search_icon';
import searchIngredient from '../search/search_function';

class ExclusionSearch extends React.Component {
    constructor(props) {
        super(props);
        this.state = { searching: '' }
        
        this.addToExclusions = this.addToExclusions.bind(this);
        this.updateSearch = this.updateSearch.bind(this);
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
            if (!this.props.exclusions.includes(ingredient)){
                this.props.exclusions.push(ingredient)
            }

            this.props.setFilterState({exclusions: this.props.exclusions}) 
            this.props.updateUser({ id: this.props.currentUser.id, exclusions: this.props.exclusions }) 
        }
    }


    render(){

        return (

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

        </div>)
    }

}

export default ExclusionSearch;