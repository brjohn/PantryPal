import React from 'react';
import "./search_filters.css"


class Preferences extends React.Component {
    constructor(props){
        super(props);
        this.state = { 
            glutenFree: this.props.preferences.includes("Gluten Free"),
            ketogenic: this.props.preferences.includes("Ketogenic"),
            vegetarian: this.props.preferences.includes("Vegetarian"),
            lactoVegetarian: this.props.preferences.includes("Lacto-Vegetarian"),
            ovoVegetarian: this.props.preferences.includes("Ovo-Vegetarian"),
            vegan: this.props.preferences.includes("Vegan"),
            paleo: this.props.preferences.includes("Paleo"),
            primal: this.props.preferences.includes("Primal"),
            whole30: this.props.preferences.includes("Whole30"),
            pescetarian: this.props.preferences.includes("Pescetarian")

        
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        
    }


    handleChange(diet){
        return (e) => {
            // console.log(e.target.checked)
            if (e.target.checked){
                this.setState( {[e.target.name]: true})
                this.props.preferences.push(diet)
            // }
            } else {
                this.setState({[e.target.name]: false});
                const idx = this.props.preferences.indexOf(diet);
                this.props.preferences.splice(idx, 1);
            }

        }
    }

    handleSubmit(e){
        e.preventDefault();
        this.props.setFilterState({preferences: this.state.preferences})
        this.props.updateUser({id: this.props.currentUser.id, preferences: this.state.preferences})
    }

    // preferenceComponent(fieldName) {
    //     return (
    //       <label>
    //         {fieldName}
    //         <input
    //           name={fieldName.replace(/\s/g, '')}
    //           type="checkbox"
    //           checked={this.props.preferences.includes(fieldName)}
    //           onChange={this.handleChange(fieldName)}
    //         />
    //       </label>
    //     );
    // }




    render(){
        // debugger
        return (
          <div>
            <form onSubmit={this.handleSubmit}>
              <label>
                Gluten Free
                <input
                  name="glutenFree"
                  type="checkbox"
                  checked={this.props.preferences.includes("Gluten Free")}
                  onChange={this.handleChange("Gluten Free")}
                />
              </label>
              <label>
                Ketogenic
                <input
                  name="ketogenic"
                  type="checkbox"
                  checked={this.props.preferences.includes("Ketogenic")}
                  onChange={this.handleChange("Ketogenic")}
                />
              </label>
              <label>
                Vegetarian
                <input
                  name="vegetarian"
                  type="checkbox"
                  checked={this.props.preferences.includes("Vegetarian")}
                  onChange={this.handleChange("Vegetarian")}
                />
              </label>
              <label>
                Lacto-Vegetarian
                <input
                  name="lactoVegetarian"
                  type="checkbox"
                  checked={this.props.preferences.includes("Lacto-Vegetarian")}
                  onChange={this.handleChange("Lacto-Vegetarian")}
                />
              </label>
              <label>
                Ovo-Vegetarian
                <input
                  name="ovoVegetarian"
                  type="checkbox"
                  checked={this.props.preferences.includes("Ovo-Vegetarian")}
                  onChange={this.handleChange("Ovo-Vegetarian")}
                />
              </label>
              <label>
                Vegan
                <input
                  name="vegan"
                  type="checkbox"
                  checked={this.props.preferences.includes("Vegan")}
                  onChange={this.handleChange("Vegan")}
                />
              </label>
              <label>
                Pescetarian
                <input
                  name="pescetarian"
                  type="checkbox"
                  checked={this.props.preferences.includes("Pescetarian")}
                  onChange={this.handleChange("Pescetarian")}
                />
              </label>
              <label>
                Paleo
                <input
                  name="paleo"
                  type="checkbox"
                  checked={this.props.preferences.includes("Paleo")}
                  onChange={this.handleChange("Paleo")}
                />
              </label>
              <label>
                Primal
                <input
                  name="primal"
                  type="checkbox"
                  checked={this.props.preferences.includes("Primal")}
                  onChange={this.handleChange("Primal")}
                />
              </label>
              <label>
                Whole30
                <input
                  name="whole30"
                  type="checkbox"
                  checked={this.props.preferences.includes("Whole30")}
                  onChange={this.handleChange("Whole30")}
                />
              </label>
              <input type="submit" value="Save my Dietary Preferences" />
            </form>
          </div>
        );
    }
}

export default Preferences;