import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Home from './Home';
import Questions from './Questions';

const Routes = () => {
  return (
    <Router>
      <div>
        <main>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/questions" component={Questions} />
          </Switch>
        </main>
      </div>
    </Router>
  );
};

export default Routes;
