import React from 'react';
import "./search_filters.css"


class Preferences extends React.Component {

  handleChange(diet) {
    return () => {
      let isIncluded = false;
      let { preferences } = this.props;
      let newPreferences = [];


      preferences.forEach(preference => {
        if (preference === diet) {
          isIncluded = true;
        } else {
          newPreferences.push(preference)
        }
      })

      if (!isIncluded) newPreferences.push(diet)
      // console.log([preferences, newPreferences])
      this.props.updateUser({ id: this.props.currentUser.id, preferences: newPreferences })
    }
  }


  preferenceComponent(fieldName) {
    // debugger
    return (
      <label className="p-text" key={fieldName}>
        <input
          type="checkbox"
          checked={this.props.preferences.includes(fieldName)}
          onChange={this.handleChange(fieldName)}
        />
        {fieldName}
      </label>
    );
  }


  getDiets() {
    let diets = [];
    this.props.recipes.forEach(recipe => diets = diets.concat(recipe.diets))
    return Array.from(new Set(diets));
  }


  render() {
    const availablePreferences = this.getDiets();
    const availPrefLength = availablePreferences.length
    const availPrefHalfLength = parseInt(availPrefLength / 2)

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
        {/* <button className='p-sub' type="submit" value="Update Pref">Add Filters</button> */}
      </div>
    );
  }

}

export default Preferences;