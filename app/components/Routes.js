import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  NavLink,
} from 'react-router-dom';
import AllRobots from './AllRobots';
import AllProjects from './AllProjects';

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
            <Route path="/robots" component={AllRobots} />
            <Route path="/projects" component={AllProjects} />
          </Switch>
        </main>
      </div>
    </Router>
  );
};

export default Routes;
