import { connect } from 'react-redux';
import { fetchUser, updateUser } from '../../actions/user_actions';
import Search from './search';

const mapStateToProps = ({users, session}) => ({
    currentUser: session.currentUser,
    ingredients: users.ingredients || []
});

const mapDispatchToProps = (dispatch) => ({
    updateUser: (data) =>  dispatch(updateUser(data))
});

export default connect(mapStateToProps, mapDispatchToProps)(Search);