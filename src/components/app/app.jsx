import React from "react";
import {Switch, Route, BrowserRouter} from "react-router-dom";
import PropTypes from "prop-types";
import Main from "../main/main";
import Login from "../login/login";
import Favorites from "../favorites/favorites";
import Offer from "../offer/offer";
import {PATH} from "../../const";
import {offerPropTypes} from "../../utils/prop-types";

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
  guest: PropTypes.object.isRequired,
  offers: PropTypes.arrayOf(offerPropTypes),
};

export default App;
