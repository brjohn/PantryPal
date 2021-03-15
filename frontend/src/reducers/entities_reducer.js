import { combineReducers } from 'redux';
import preferencesReducer from './preferences_reducer';


const entitiesReducer = combineReducers({
  preferences: preferencesReducer
});

export default entitiesReducer;

