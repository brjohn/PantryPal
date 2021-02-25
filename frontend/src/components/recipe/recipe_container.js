import { connect } from "react-redux";
import { fetchUser } from "../../actions/user_actions";

import Recipe from "./recipe";

const mapStateToProps = (state) => ({
  user: state.session.user,
});

const mapDispatchToProps = (dispatch) => {
  return {
    fetchUser: () => dispatch(fetchUser()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Recipe);