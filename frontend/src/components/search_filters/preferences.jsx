import React from 'react';
import "./search_filters.css"


class Preferences extends React.Component {
  constructor(props) {
    super(props);
    this.state = { preferences: this.props.preferences }
    // debugger
    this.preferenceList = ['Gluten Free', 'Ketogenic', 'Vegetarian', 'Lacto-Vegetarian', 'Ovo-Vegetarian', 'Vegan', 'Pescetarian', 'Paleo', 'Primal', 'Whole30']

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

  }


  handleChange(diet) {
    const { preferences } = this.props;
    return (e) => {
      console.log(this.props.preferences.includes(diet) ? 
      (preferences.splice(preferences.indexOf(diet), 1)) : 
      (preferences.push(diet)))
      this.setState({preferences: preferences})
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.setFilterState({ preferences: this.state.preferences })
    this.props.updateUser({ id: this.props.currentUser.id, preferences: this.state.preferences })
  }

  preferenceComponent(fieldName) {
    return (
      <label key={fieldName}>
        {fieldName}
        <input
          type="checkbox"
          checked={this.props.preferences.includes(fieldName)}
          onChange={this.handleChange(fieldName)}
        />
      </label>
    );
  }




  render() {
    // debugger
    return (
      <div className='p-grid'>
        <form onSubmit={this.handleSubmit}>
          <div>
            {this.preferenceList.slice(0,5).map(pref => {
              return this.preferenceComponent(pref)
            })}
          </div>

          <div>
            {this.preferenceList.slice(5, 10).map(pref => {
              return this.preferenceComponent(pref)
            })}
          </div>

          <input type="submit" value="Update Pref" />
        </form>
      </div>
    );
  }
}

export default Preferences;