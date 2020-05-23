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

const Routes = () => {
  return (
    <Router>
      <div>
        <nav>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/robots">Robots</NavLink>
          <NavLink to="/projects">Projects</NavLink>
        </nav>
        <main>
          <h1>
            Welcome to StackBot Project Management: your robot employees are
            awaiting assignments!
          </h1>
          <Switch>
            <Route exact path="/" />
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
