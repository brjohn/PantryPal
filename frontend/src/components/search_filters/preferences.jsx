import React from 'react';
import "./search_filters.css"


class Preferences extends React.Component {
  constructor(props) {
    super(props);
    this.state = { preferenceList: [] }
    // debugger
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.getDiets = this.getDiets.bind(this);
  }


  // UNSAFE_componentWillReceiveProps() {
  //   this.setState({ preferenceList: this.getDiets() })
  // }

  componentDidMount() {
    this.setState({ preferenceList: this.getDiets()})
    // debugger
  }

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
      // console.log(recipe.diets)
      diets = diets.concat(recipe.diets)
    })
    // console.log(Array.from(new Set(diets)))
    return Array.from(new Set(diets));
  }



  render() {
    this.state.preferenceList = this.getDiets();

    return (
      <div className="p-grid">
        <form className='p-col-container' onSubmit={this.handleSubmit}>
          <div className="p-col">
            {this.state.preferenceList.slice(0, 5).map(pref => {
              return this.preferenceComponent(pref)
            })}
          </div>
          <div className="p-col">
            {this.state.preferenceList.slice(5, 10).map(pref => {
              return this.preferenceComponent(pref)
            })}
          </div>
        </form>
        <input className='p-sub' type="submit" value="Update Pref" />
        <button onClick={this.getDiets}>Click</button>
      </div>
    );
  }

}

export default Preferences;