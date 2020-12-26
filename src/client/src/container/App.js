import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import RegisterContainer from './register';

function App() {
  return (
    <Router>
      <Switch>
        {/* <Route path="/" component={() => <h1>Home</h1>} exact={true}/> */}
        <Route path="/" exact={true} >
          <RegisterContainer />
        </Route>
        <Route path="/register"/>
      </Switch>
    </Router>
  );
}

export default App;
