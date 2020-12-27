import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import RegisterContainer from './register';
import LoginContainer from './login';
import Homecontainer from './home';
import {
  HOME,
  LOGIN,
  REGISTER
} from '../constants';


function App() {
  return (
    <Router>
      <Switch>
        <Route path={HOME} exact={true}>
          <Homecontainer />
        </Route>
        <Route path={REGISTER}  >
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
