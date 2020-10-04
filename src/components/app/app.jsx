import React from "react";
import Main from "../main/main";
import PropTypes from "prop-types";


const App = (props) => {
  // eslint-disable-next-line react/prop-types
  const {placesCount} = props;

  return (
    <Main placesCount={placesCount} />
  );
};

App.propTypes = {
  placesCount: PropTypes.number.isRequired,
};

export default App;
