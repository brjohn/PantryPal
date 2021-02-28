import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';
import configureStore from './store/store';
import jwt_decode from 'jwt-decode';
import { setAuthToken } from './util/session_api_util';
import { logout } from './actions/session_actions';
import { fetchUserRefresh, updateUser } from './actions/user_actions';
import { fetchIngredient } from './util/user_api_util';
import {fetchRecipeFromMongoDB, addRecipe} from './util/recipe_util';



document.addEventListener('DOMContentLoaded', () => {
  let store;
  
  if (localStorage.jwtToken) {
    setAuthToken(localStorage.jwtToken);
    const decodedUser = jwt_decode(localStorage.jwtToken);
    // debugger
    const preloadedState = { session: { isAuthenticated: true, currentUser:{id: decodedUser.id}} };
    store = configureStore(preloadedState);
    store.dispatch(fetchUserRefresh(preloadedState.session.currentUser.id));
    // debugger

    const currentTime = Date.now() / 1000;
    if (decodedUser.exp < currentTime) {
      store.dispatch(logout());
      window.location.href = '/login';
    }
  } else {
    store = configureStore({});
  }

  window.getState = store.getState;
  window.dispatch = store.dispatch;
  window.updateUser = updateUser;
  window.fetchIngredient = fetchIngredient;
  window.newUser = () => ({id: window.getState().users.id})
  window.fetchRecipeFromMongoDB = fetchRecipeFromMongoDB;
  window.addRecipe = addRecipe;



  // window.fetchUser = fetchUser
  // window.fetchUser = fetchUser;

  const root = document.getElementById('root');
  ReactDOM.render(<Root store={store} />, root);
});


