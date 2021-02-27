import { connect } from 'react-redux';
import { fetchUser, updateUser } from '../../actions/user_actions';
import SearchFilters from './exclusion_search';

const mapStateToProps = state => ({
  currentUser: state.session.currentUser,
  preferences: state.users.preferences || [],
  exclusions: state.users.exclusions || []
})

const mapDispatchToProps = dispatch => ({
  fetchUser: id => dispatch(fetchUser(id)),
  updateUser: (data) => dispatch(updateUser(data))
})

export default connect(mapStateToProps, mapDispatchToProps)(SearchFilters);