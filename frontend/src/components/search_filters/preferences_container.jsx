import { connect } from 'react-redux';
import { updateUser } from '../../actions/user_actions';
import Preferences from './preferences';

const mapStateToProps = ({entities, session}) => ({
    currentUser: session.currentUser,
    preferences: entities.preferences,
    recipes: entities.recipes

});

const mapDispatchToProps = (dispatch) => ({
    updateUser: (data) =>  dispatch(updateUser(data))
});

export default connect(mapStateToProps, mapDispatchToProps)(Preferences);