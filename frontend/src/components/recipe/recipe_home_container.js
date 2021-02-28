import { connect } from 'react-redux';
import RecipeHome from './recipe_home';



const mapStateToProps = (state) => {
  return {
    currentUser: state.session.currentUser,
    users: state.users
  }
};

// const mapDispatchToProps = (dispatch) => ({
//   fetchUser: id => dispatch(fetchUser(id)),
//   updateUser: (data) => dispatch(updateUser(data))
// });

export default connect(mapStateToProps, null)(RecipeHome);