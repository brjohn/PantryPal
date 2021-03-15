import { connect } from 'react-redux';
import { fetchUser, updateUser } from '../../actions/user_actions';
import ExclusionSearch from './exclusion_search';

const mapStateToProps = ({users, session}) => ({
    currentUser: session.currentUser,
    exclusions: users.exclusions || []
});

const mapDispatchToProps = (dispatch) => ({
    updateUser: (data) =>  dispatch(updateUser(data))
});

export default connect(mapStateToProps, mapDispatchToProps)(ExclusionSearch);