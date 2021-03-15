import { connect } from 'react-redux';
import { updateUser } from '../../actions/user_actions';
import SearchFilters from './search_filters';

const mapStateToProps = state => ({
  currentUser: state.session.currentUser,
  preferences: state.users.preferences || [],
  exclusions: state.users.exclusions || []
})

const mapDispatchToProps = dispatch => ({
  updateUser: (data) => dispatch(updateUser(data))
})

export default connect(mapStateToProps, mapDispatchToProps)(SearchFilters);