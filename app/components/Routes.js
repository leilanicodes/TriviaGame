import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  NavLink,
} from 'react-router-dom';
import AllRobots from './AllRobots';
import AllProjects from './AllProjects';
import SingleRobot from './SingleRobot';
import SingleProject from './SingleProject';
import Home from './Home';
import Questions from './Questions';

const Routes = () => {
  return (
    <Router>
      <div>
        {/* <nav> */}
        {/* <NavLink to="/">Home</NavLink> */}
        {/* <NavLink to="/robots">Robots</NavLink>
          <NavLink to="/projects">Projects</NavLink> */}
        {/* </nav> */}
        <main>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/questions" component={Questions} />
            <Route exact path="/robots" component={AllRobots} />
            <Route exact path="/projects" component={AllProjects} />
            <Route path="/projects/:projectId" component={SingleProject} />
            <Route path="/robots/:robotId" component={SingleRobot} />
          </Switch>
        </main>
      </div>
    </Router>
  );
};

export default Routes;
