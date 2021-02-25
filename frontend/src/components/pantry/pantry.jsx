import React from 'react';
import './pantry.css'
import SearchContainer from '../search/search_container';

class Pantry extends React.Component {
  constructor(props) {
    super(props);
  }

  placeholder() {
    return (
    <img src="https://i.pinimg.com/564x/05/f4/1e/05f41e5cd6b3bdb36f26098fba4e1a49.jpg" />
    )
  };
   

  render() {
    
    return (
        
      <div>


      
        <SearchContainer />
        

      <div className="pantry">
        <div className="row">
          <div className="column">
            {this.placeholder()}
            {this.placeholder()}   
          </div>
          <div className="column">
            {this.placeholder()}
            {this.placeholder()}         
          </div>
          <div className="column">
            {this.placeholder()}
            {this.placeholder()}

          </div>
          <div className="column">
            {this.placeholder()}
            {this.placeholder()}   
          </div>
          <div className="column">
            {this.placeholder()}
            {this.placeholder()}
          </div>
        </div>
      </div>



      </div>



    )
  }
}
export default Pantry;