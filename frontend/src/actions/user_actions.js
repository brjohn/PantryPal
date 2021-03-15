import * as UserApiUtil from '../util/user_api_util';
import { receiveCurrentUser } from './session_actions';



export const RECEIVE_USER = "RECEIVE_USER";
export const RECEIVE_PREFERENCES = "RECEIVE_PREFERENCES";
export const RECEIVE_EXCLUSIONS = "RECEIVE_EXCLUSIONS";
export const RECEIVE_INGREDIENTS = "RECEIVE_INGREDIENTS";
export const RECEIVE_RECIPES = "RECEIVE_RECIPES";
export const RECEIVE_SAVED_RECIPES = "RECEIVE_SAVED_RECIPES";


// this needs to go away since we're getting rid of users
const receiveUser = user => ({
  type: RECEIVE_USER,
  user
});

const receivePreferences = preferences => ({
  type: RECEIVE_PREFERENCES,
  preferences
})

const receiveExclusions = exclusions => ({
  type: RECEIVE_EXCLUSIONS,
  exclusions
})

const receiveIngredients = ingredients => ({
  type: RECEIVE_INGREDIENTS,
  ingredients
})

const receiveRecipes = recipes => ({
  type: RECEIVE_RECIPES,
  recipes
})

const receiveSavedRecipes = saved_recipes => ({
  type: RECEIVE_SAVED_RECIPES,
  saved_recipes
})












export const fetchUser = (userId) => (dispatch) => (
  UserApiUtil.fetchUser(userId).then(user => dispatch(receiveUser(user)))
)

export const fetchUserRefresh = (userId) => (dispatch) => (
  UserApiUtil.fetchUser(userId).then(user => {
    dispatch(receiveCurrentUser(user.data))
  })
)

export const updateUser = data => dispatch => {
  if (data.preferences) dispatch(receivePreferences(data.preferences))
  if (data.exclusions) dispatch(receiveExclusions(data.exclusions))
  if (data.ingredients) dispatch(receiveIngredients(data.ingredients))
  if (data.recipes) dispatch(receiveRecipes(data.recipes))
  if (data.saved_recipes) dispatch(receiveSavedRecipes(data.saved_recipes))

  UserApiUtil.updateUser(data)
}
  // debugger
// )