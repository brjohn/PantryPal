import React from 'react';
import './pantry.css'
import SearchContainer from '../search/search_container';

class Pantry extends React.Component {
  constructor(props) {
    super(props);

  }



  render() {
    const ingredients = this.props.ingredients;
    // if (ingredients === undefined) ingredients = []
    // console.log(ingredients)

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
                <div className="ingredient" key={ingredient.name}>
                  <div className="i-img">
                    <img src={`https://spoonacular.com/cdn/ingredients_100x100/${ingredient.image}`} alt={ingredient.name} />
                  </div>
                  <h1 className="i-title">{ingredient.name}</h1>
                </div>
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