import React from 'react';
import './pantry.css'
import SearchContainer from '../search/search_container';

class Pantry extends React.Component {
  constructor(props) {
    super(props);
  }

  ingredientPlaceholder() {
    return (
      <div className="ingredient">
        <div className="i-img">
          <img src="https://i.ibb.co/7nP2ttk/apple.webp"></img>
        </div>
        <h1 className="i-title">Apple</h1>
      </div>
    )
  };

  
   

  render() {
    const ingredientPlaceholder = (
      <div className="ingredient">
        <div className="i-img">
          <img src="https://i.ibb.co/7nP2ttk/apple.webp"></img>
        <h1 className="i-title">Apple</h1>
      </div>
    </div> )
     
 
    return (
        
      <div className="flex-container">

      <div className="search">
        <SearchContainer />
      </div>

    

      <div className="pantry">
        <div className="p-title">
            <h1>Pantry</h1>
        </div>
        <div className="row">
          <div className="column">
              {ingredientPlaceholder}
              {ingredientPlaceholder}
              {ingredientPlaceholder}
              {ingredientPlaceholder}
          </div>
          <div className="column">
              {ingredientPlaceholder}
              {ingredientPlaceholder}
              {ingredientPlaceholder}
              {ingredientPlaceholder}
          </div>
          <div className="column">
              {ingredientPlaceholder}
              {ingredientPlaceholder}
              {ingredientPlaceholder}
              {ingredientPlaceholder}
          </div>
          <div className="column">
              {ingredientPlaceholder}
              {ingredientPlaceholder}
              {ingredientPlaceholder}
              {ingredientPlaceholder}
          </div>
          <div className="column">
              {ingredientPlaceholder}
              {ingredientPlaceholder}
              {ingredientPlaceholder}
              {ingredientPlaceholder}
          </div>
        </div>
       
      </div>



      </div>



    )
  }
}
export default Pantry;


// <div className="pantry">
//   <div className="row">
//     <div className="column">
//       {this.placeholder()}
//       {this.placeholder()}
//       {this.placeholder()}
//     </div>
//     <div className="column">
//       {this.placeholder()}
//       {this.placeholder()}
//       {this.placeholder()}
//     </div>
//     <div className="column">
//       {this.placeholder()}
//       {this.placeholder()}
//       {this.placeholder()}
//     </div>
//     <div className="column">
//       {this.placeholder()}
//       {this.placeholder()}
//       {this.placeholder()}
//     </div>
//     <div className="column">
//       {this.placeholder()}
//       {this.placeholder()}
//       {this.placeholder()}
//     </div>
//   </div>