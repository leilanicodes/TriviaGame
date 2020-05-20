import { combineReducers } from 'redux';
import projectsReducer from './projects';
import robotsReducer from './robots';

const appReducer = combineReducers({
  projects: projectsReducer, //this allows us to map state to props
  robots: robotsReducer,
});

export default appReducer;
