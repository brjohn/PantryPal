import React from 'react';

class Search extends React.Component {
  constructor(props){
    super(props);
    this.state({ searchValue: ''})

  }

  updateSearch() {
    return e => (this.setState({ searchValue: e.target.value}))
  }




  render() {
    return (
      <div>
        This is the search bar 
      </div>
    )
  }


}


