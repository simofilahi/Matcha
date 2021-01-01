import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import RegisterContainer from './register';
import LoginContainer from './login';
import Homecontainer from './home';
import LikeContainer from './like';
import ChatContainer from './chat';
import ExploreContainer from './explore';
import ViewContainer from './view';
import SearchContainer from './search';
import {
  ROOT,
  HOME,
  LOGIN,
  REGISTER,
  SEARCH,
  LIKES,
  CHAT,
  EXPLORE,
  VIEW,
} from '../constants';

import {
  Home,
} from '../components';



function App() {
  return ( 
    <Router>
            <Home.Header />
      <Switch>
        <Route path={REGISTER}  >
          <RegisterContainer />
        </Route>
        <Route path={LOGIN}>
          <LoginContainer />
        </Route>
        <Route path={LIKES}>
          <LikeContainer/>
        </Route>
        <Route path={VIEW}  >
          <ViewContainer />
        </Route>
        <Route path={CHAT}>
          <ChatContainer />
        </Route>
        <Route path={SEARCH}>
          <SearchContainer />
        </Route>
        <Route path={EXPLORE}>
          <ExploreContainer/>
        </Route>
        <Route path={HOME}>
          <Homecontainer />
        </Route>
        <Route Path={ROOT}>
            <Redirect to={HOME}>
              <Homecontainer />
            </Redirect>
        </Route>
        <Route>
          <h1>404</h1>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
