import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";

import RegisterContainer from "src/container/register";
import LoginContainer from "src/container/login";
import HomeContainer from "src/container/home";
import LikeContainer from "src/container/like";
import ChatContainer from "src/container/chat";
import ExploreContainer from "src/container/explore";
import ViewContainer from "src/container/view";
import SearchContainer from "src/container/search";
import ProfileInfosContainer from "src/container/profileInfos";
import Header from "src/components/header";

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
  onBoardingProfileInfo,
} from "src/constants";

const Router = () => {
  return (
    <BrowserRouter>
      {/* <Header /> */}
      <Switch>
        <Route path={REGISTER} component={RegisterContainer} />
        <Route path={LOGIN} component={LoginContainer} />
        <Route path={onBoardingProfileInfo} component={ProfileInfosContainer} />
        <Route path={LIKES} component={LikeContainer} />
        <Route path={VIEW} component={ViewContainer} />
        <Route path={CHAT} component={ChatContainer} />
        <Route path={SEARCH} component={SearchContainer} />
        <Route path={EXPLORE} component={ExploreContainer} />
        <Route path={HOME} component={HomeContainer} />
        <Route Path={ROOT}>
          <Redirect to={HOME}>
            <HomeContainer />
          </Redirect>
        </Route>
        <Route>
          <h1>404</h1>
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
