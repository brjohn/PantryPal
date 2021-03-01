import { RECEIVE_CURRENT_USER } from '../actions/session_actions';
import { RECEIVE_USER } from '../actions/user_actions';

const usersReducer = (oldState = {}, action) => {
    Object.freeze(oldState);
    switch (action.type) {
        case RECEIVE_CURRENT_USER:
            return Object.assign({}, oldState, action.currentUser);
        case RECEIVE_USER:
            // debugger
            return Object.assign({}, action.user.data);
        default:
            return oldState;
    }
};
// test

export default usersReducer;