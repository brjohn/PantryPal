import { connect } from 'react-redux';
import { updateUser } from '../../actions/user_actions';
import Search from './search';

const mapStateToProps = ({entities, session}) => ({
    currentUser: session.currentUser,
    ingredients: entities.ingredients || []
});

const mapDispatchToProps = (dispatch) => ({
    updateUser: (data) =>  dispatch(updateUser(data))
});

export default connect(mapStateToProps, mapDispatchToProps)(Search);