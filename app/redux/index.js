import { combineReducers } from 'redux';
import projectsReducer from './projects';
import robotsReducer from './robots';
import singleRobotReducer from './singleRobot';
import singleProjectReducer from './singleProject';

const appReducer = combineReducers({
  projects: projectsReducer, //this allows us to map state to props
  robots: robotsReducer,
  robot: singleRobotReducer,
  project: singleProjectReducer,
});

export default appReducer;
