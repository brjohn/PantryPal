import React from 'react';
import './pantry.css'
import SearchContainer from '../search/search_container';

class Pantry extends React.Component {
  // constructor(props) {
    // super(props);
  // }



  render() {
    // const ingredientPlaceholder = (
    //   <div className="ingredient">
    //     <div className="i-img">
    //       <img src="https://i.ibb.co/7nP2ttk/apple.webp"></img>
    //       <h1 className="i-title">Apple</h1>
    //     </div>
    //   </div>)

    const { ingredients } = this.props 
    console.log(ingredients)

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