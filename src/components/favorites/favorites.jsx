import React from "react";
import PropTypes from "prop-types";
import FavoritesList from "../favorites-list/favorites-list";
import {Link} from "react-router-dom";
import Header from "../header/header";
import {PATH} from "../../const";

const Favorites = (props) => {

  const {offers} = props;

  return (
    <div className="page">
      <Header />
      <main className="page__main page__main--favorites">
        <div className="page__favorites-container container">
          <section className="favorites">
            <h1 className="favorites__title">Saved listing</h1>
            <FavoritesList offers ={offers}/>
          </section>
        </div>
      </main>
      <footer className="footer container">
        <Link className="footer__logo-link" to={PATH.MAIN}>
          <img
            className="footer__logo"
            src="img/logo.svg"
            alt="6 cities logo"
            width={64}
            height={33}
          />
        </Link>
      </footer>
    </div>

  );
};
Favorites.propTypes = {
  offers: PropTypes.array.isRequired,
};

export default Favorites;
