import React from 'react';
import './pantry.css'
import SearchContainer from '../search/search_container';

class Pantry extends React.Component {
  // constructor(props) {
    // super(props);
  // }



  render() {

    const { ingredients } = this.props 


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
            {ingredients.map(ingredient => {
              return (
                <div><img src={`https://spoonacular.com/cdn/ingredients_100x100/${ingredient.image}`} alt={ingredient.name}/></div>
              )
            })}
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