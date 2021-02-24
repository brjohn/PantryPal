import * as UserAPIUtil from '../util/user_api_util';

export const RECEIVE_USER = "RECEIVE_USER";
// export const RECEIVE_USER_ERRORS = "RECEIVE_USER_ERRORS";
// export const CLEAR_USER_ERRORS = "CLEAR_USER_ERRORS";

const receiveUser = (user) => ({
    type: RECEIVE_USER,
    user
});

export const fetchUser = (userId) => (dispatch) => (
    UserApiUtil.fetchUser(userId).then(user => dispatch(receiveUser(user)))
)

export const updateUser = (user) => (dispatch) => (
    UserApiUtil.updateUser(user).then(newUser => dispatch(receiveUser(newUser)))
)