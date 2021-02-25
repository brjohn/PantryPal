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
      <div className="recipe">
        {/* <h2>WELCOME USER: {this.props.username}</h2>
        {this.props.username} */}
      </div>
    );
  }
}

export default Recipe;