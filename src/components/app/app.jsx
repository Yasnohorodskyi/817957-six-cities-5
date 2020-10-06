import React from "react";
import {Switch, Route, BrowserRouter} from "react-router-dom";
import PropTypes from "prop-types";
import Main from "../main/main";
import Login from "../login/login";
import Favorites from "../favorites/favorites";
import Offer from "../offer/offer";


const App = (props) => {
  const {placesCount} = props;

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path ="/">
          <Main placesCount = {placesCount} />
        </Route>
        <Route exact path = "/favorites">
          <Favorites />
        </Route>
        <Route exact path = "/login">
          <Login />
        </Route>
        <Route exact path = "/offer/:roomId?">
          <Offer />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

App.propTypes = {
  placesCount: PropTypes.number.isRequired,
};

export default App;
