import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import RegisterContainer from './register';
import LoginContainer from './login';
import {
  HOME,
  LOGIN,
  REGISTER
} from '../constants';

function App() {
  return (
    <Router>
      <Switch>
        {/* <Route path={HOME} component={() => <h1>Home</h1>} exact={true}/> */}
        <Route path={REGISTER} exact={true} >
          <RegisterContainer />
        </Route>
        <Route path={LOGIN}>
          <LoginContainer />
        </Route>
        <Route>
          <h1>404</h1>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
