import React from 'react';
import { addIcon } from '../search/search_icon';
import searchIngredient from '../search/search_function';
import "./search_filters.css";
import "./../search/search.css";

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
            // console.log('clicked')

            if (!this.props.exclusions.includes(ingredient)){
                this.props.exclusions.push(ingredient)
            }

            this.props.setFilterState({ exclusions: this.props.exclusions }); 
            this.props.updateUser({ id: this.props.currentUser.id, exclusions: this.props.exclusions }) 
        }
    }


    render(){
        // debugger
        return (

        <div className="exclusion-search-box">
            
                <div>
                    <h1 className="e-title">Search Filters</h1>
                    <input type="text" className="e-search-bar"
                        placeholder="Search Ingredient to Exclude . . . "
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
            

        </div>)
    }

}

export default ExclusionSearch;