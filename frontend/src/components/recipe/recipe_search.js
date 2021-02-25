import React from 'react'

export default class RecipeSearch extends React.Component {
  constructor() {
    super()
    this.state = {
      recipes: []
    }
  }

  getRecipes(recipes) {
    this.setState({ recipes })
  }

  render() {
    return (
      <div>
      </div>
    )
  }
}

export default RecipeSearch;