import { connect } from 'react-redux';
import { updateUser } from '../../actions/user_actions';
import ExclusionSearch from './exclusion_search';

const mapStateToProps = ({entities, session}) => ({
    currentUser: session.currentUser,
    exclusions: entities.exclusions || []
});

const mapDispatchToProps = (dispatch) => ({
    updateUser: (data) =>  dispatch(updateUser(data))
});

export default connect(mapStateToProps, mapDispatchToProps)(ExclusionSearch);