import React from 'react';
import "./search_filters.css"


class Preferences extends React.Component {


  handleChange(diet) {
    return () => {
      (this.state.preferenceList.includes(diet) ?
        (this.state.preferenceList.splice(this.state.preferenceList.indexOf(diet), 1)) :
        (this.state.preferenceList.push(diet)))
      this.setState({ preferenceList: this.state.preferenceList })
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.setFilterState({ preferences: this.state.preferenceList })
    this.props.updateUser({ id: this.props.currentUser.id, preferences: this.state.preferenceList })
  }

  preferenceComponent(fieldName) {
    return (
      <label className="p-text" key={fieldName}>
        <input
          type="checkbox"
          checked={!this.state.preferenceList.includes(fieldName)}
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
    })
    return Array.from(new Set(diets));
  }



  render() {
    // debugger
    const { preferences } = this.props;
    const prefLength = preferences.length
    const prefHalfLength = parseInt(prefLength / 2)


    return (
      <div className="p-grid">
        <h1 className="e-title">Filters</h1>
        <form className='p-col-container' onSubmit={this.handleSubmit}>
          <div className="p-col">
            {preferences.slice(0, prefHalfLength).map(pref => {
              return this.preferenceComponent(pref)
            })}
          </div>

          <div className="p-col">
            {preferences.slice(prefHalfLength, prefLength).map(pref => {
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