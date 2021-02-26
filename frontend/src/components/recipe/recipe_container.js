import { connect } from "react-redux";
import { getUserInfo } from "../../actions/session_actions"
// import { fetchUser } from "../../actions/user_actions"

import Recipe from "./recipe";

const mapStateToProps = (state) => ({
  currentUser: state.users,
});

// const mapDispatchToProps = (dispatch) => {
//   return {
//     fetchUser: (userId) => dispatch(fetchUser(userId)),
//   };
// };

const mapDispatchToProps = (dispatch) => {
  return {
    getUserInfo: () => dispatch(getUserInfo()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Recipe);