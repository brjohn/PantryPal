import React from 'react';
import { removeIcon } from '../search/search_icon';
import ExclusionSearch from './exclusion_search';
import ExclusionSearchContainer from './exclusion_search_container';
import PreferencesContainer from './preferences_container';
import "./search_filters.css"

class SearchFilters extends React.Component {
    constructor(props) {
        super(props);
        this.setState = this.setState.bind(this)
    }

    removeExclusion(exclusionIdx){
        return () => {
            this.props.exclusions.splice(exclusionIdx, 1)
            this.props.updateUser({ id: this.props.currentUser, exclusions: this.props.exclusions})
            this.setState({exclusions: this.props.exclusions})
        }
    }

    render(){

        return(

        // <div className='fiterbox'>
        //     <ExclusionSearchContainer setFilterState={this.setState}/>
        //     <div className="my-exclusions">
        //         {this.props.exclusions.map((exclusion, exclusionIdx) => {
        //           return (
        //             <div className="exclusion" key={exclusion}>
        //                     <h1>{exclusion}</h1>
        //                     <div onClick={this.removeExclusion(exclusionIdx)}>
        //                         {removeIcon}
        //                     </div>
        //                 </div>
        //             )
        //           })}
                
        //     </div>
            <PreferencesContainer setFilterState={this.setState}/>
        // </div>

        )


    }


}

export default SearchFilters;