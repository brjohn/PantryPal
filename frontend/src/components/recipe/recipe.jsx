import React from "react";

class Recipe extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    // this.props.fetchUser();
  }

  render() {
    return (
      <div className="recipe-div">
        <h1>Recipe Component</h1>
        {/* <h2>WELCOME USER: {this.props.username}</h2>
        {this.props.ingredients} */}
        {/* {this.props} */}

      </div>
    );
  }
}

export default Recipe;