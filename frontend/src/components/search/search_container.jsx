import { connect } from 'react-redux';
import { fetchUser, updateUser } from '../../actions/user_actions';
import Search from './search';

const mapStateToProps = ({users, session}) => ({
    currentUser: session.currentUser,
    ingredients: users.ingredients
});

const mapDispatchToProps = (dispatch) => ({
    fetchUser: id => dispatch(fetchUser(id)),
    updateUser: (data) =>  dispatch(updateUser(data))
});

export default connect(mapStateToProps, mapDispatchToProps)(Search);