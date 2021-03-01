import React from 'react';
import "./search_filters.css"


class Preferences extends React.Component {
  constructor(props) {
    super(props)
    this.state = { count: 0, myPreferences: [], availablePreferences: []}
    this.getDiets = this.getDiets.bind(this)
    this.preferenceComponent = this.preferenceComponent.bind(this)
  }

  handleChange(diet) {
    return () => {
      (this.state.myPreferences.includes(diet) ?
        (this.state.myPreferences.splice(this.state.myPreferences.indexOf(diet), 1)) :
        (this.state.myPreferences.push(diet)))
      this.setState({ myPreferences: this.state.myPreferences })
      this.props.updateUser({ id: this.props.currentUser.id, preferences: this.state.myPreferences })
    }
  }


  preferenceComponent(fieldName) {
    debugger
    return (
      <label className="p-text" key={fieldName}>
        <input
          type="checkbox"
          checked={this.state.myPreferences.includes(fieldName)}
          onChange={this.handleChange(fieldName)}
        />
        {fieldName}
      </label>
    );
  }


  getDiets() {
    let diets = [];
    this.props.recipes.forEach(recipe => {
      diets = diets.concat(recipe.diets)
      // debugger
    })
    return Array.from(new Set(diets));
  }


  render() {
    // debugger
    const availablePreferences = this.getDiets();
    const availPrefLength = availablePreferences.length
    const availPrefHalfLength = parseInt(availPrefLength / 2)
    // debugger

    return (
      <div className="p-grid">
        <h1 className="e-title">Filters</h1>
        <form className='p-col-container' onSubmit={this.handleSubmit}>
          <div className="p-col">
            {availablePreferences.slice(0, availPrefHalfLength).map(pref => {
              return this.preferenceComponent(pref)
            })}
          </div>

          <div className="p-col">
            {availablePreferences.slice(availPrefHalfLength, availPrefLength).map(pref => {
              return this.preferenceComponent(pref)
            })}
          </div>
        </form>
        <button className='p-sub' type="submit" value="Update Pref">Add Filters</button>
        {/* <button onClick={this.getDiets}>Click</button> */}
      </div>
    );
  }

}

export default Preferences;