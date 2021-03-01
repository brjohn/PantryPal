import { connect } from 'react-redux';
import { fetchUser, updateUser } from '../../actions/user_actions';
import Preferences from './preferences';

const mapStateToProps = ({users, session}) => ({
    currentUser: session.currentUser,
    preferences: users.preferences || [],
    recipes: users.recipes || []

});

const mapDispatchToProps = (dispatch) => ({
    fetchUser: id => dispatch(fetchUser(id)),
    updateUser: (data) =>  dispatch(updateUser(data))
});

export default connect(mapStateToProps, mapDispatchToProps)(Preferences);