import { connect } from 'react-redux';
import { updateUser } from '../../actions/user_actions';
import SearchFilters from './search_filters';

const mapStateToProps = state => ({
  currentUser: state.session.currentUser,
  preferences: state.entities.preferences || [],
  exclusions: state.entities.exclusions || []
})

const mapDispatchToProps = dispatch => ({
  updateUser: (data) => dispatch(updateUser(data))
})

export default connect(mapStateToProps, mapDispatchToProps)(SearchFilters);