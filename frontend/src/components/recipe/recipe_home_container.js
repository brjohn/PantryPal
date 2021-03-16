import { connect } from 'react-redux';
import RecipeHome from './recipe_home';



const mapStateToProps = (state) => {
  return {
    currentUser: state.session.currentUser,
    users: state.users
  }
};

export default connect(mapStateToProps, null)(RecipeHome);