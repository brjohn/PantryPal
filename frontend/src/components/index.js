import React from 'react';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import { Switch } from 'react-router-dom';
import NavBarContainer from './nav/navbar_container';
import Modal from './modal/modal';
import DevPage from './dev_page/dev_page';
import LoginFormContainer from './session/login_form_container';
import SignupFormContainer from './session/signup_form_container';
import PantryContainer from './pantry/pantry_container';
import RecipeHomeContainer from './recipe/recipe_home_container';



const App = () => (
  <div>
    <Modal />
    <NavBarContainer />
    {/* <SearchContainer /> */}
    <Switch>
      <AuthRoute exact path="/" component={DevPage} />
      <AuthRoute exact path="/login" component={LoginFormContainer} />
      <AuthRoute exact path="/signup" component={SignupFormContainer} />
      <ProtectedRoute exact path="/pantry" component={PantryContainer} />
      <ProtectedRoute exact path="/recipe" component={RecipeHomeContainer} />
    </Switch>
  </div>
);

export default App;