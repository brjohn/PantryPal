import React from 'react';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import { Switch } from 'react-router-dom';
import NavBarContainer from './nav/navbar_container';
import Modal from './modal/modal';
import MainPage from './main/main_page';
import LoginFormContainer from './session/login_form_container';
import SignupFormContainer from './session/signup_form_container';
// import SearchContainer from './search/search_container';
import PantryContainer from './pantry/pantry_container';
import RecipeConstainer from './recipe/recipe_container';
import RecipeHome from './recipe/recipe_home';
import ExclusionSearchContainer from './search_filters/exclusion_search_container';


const App = () => (
  <div>
    <Modal />
    <NavBarContainer />
    {/* <SearchContainer /> */}
    <Switch>
      <AuthRoute exact path="/" component={MainPage} />
      <AuthRoute exact path="/login" component={LoginFormContainer} />
      <AuthRoute exact path="/signup" component={SignupFormContainer} />
      <ProtectedRoute exact path="/pantry" component={PantryContainer} />
      <ProtectedRoute exact path="/recipe" component={RecipeHome} />
    </Switch>
  </div>
);

export default App;