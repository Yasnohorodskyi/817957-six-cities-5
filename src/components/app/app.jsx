import React from "react";
import {Switch, Route, BrowserRouter} from "react-router-dom";
import PropTypes from "prop-types";
import Main from "../main/main";
import Login from "../login/login";
import Favorites from "../favorites/favorites";
import Offer from "../offer/offer";
import {PATH} from "../../const";

const App = (props) => {
  const {placesCount, offers, guest} = props;

  return (
    <BrowserRouter>
      <Switch>

        <Route exact path = {PATH.MAIN}>
          <Main
            placesCount = {placesCount} offers = {offers}
          />
        </Route>

        <Route exact path = {PATH.FAVORITES}>
          <Favorites
            offers = {offers}
          />
        </Route>

        <Route exact path = {PATH.LOGIN}>
          <Login />
        </Route>
        <Route exact path={`${PATH.OFFER}/:id`} render={({match: {params}}) => (
          <Offer
            offer = {offers.find((offer) => offer.idOffers === Number(params.id))}
            offers = {offers}
            guest = {guest}

          />
        )}
        />


      </Switch>
    </BrowserRouter>
  );
};

App.propTypes = {
  placesCount: PropTypes.number.isRequired,
  offers: PropTypes.array.isRequired,
  guest: PropTypes.object.isRequired,
};

export default App;
