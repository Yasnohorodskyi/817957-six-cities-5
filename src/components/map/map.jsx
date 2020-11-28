import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import {CITY} from "../../const";

import leaflet from "leaflet";
import "leaflet/dist/leaflet.css";
import {offerPropTypes} from "../../utils/prop-types";

class Map extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      currentOffer: null,
    };

    this.city = CITY[0].coordinates;
    this.zoom = 12;
  }

  initMap() {
    this.map = leaflet.map(`map`, {
      center: this.city,
      zoom: this.zoom,
      zoomControl: false,
      marker: true
    });
    this.map.setView(this.city, this.zoom);
    leaflet
      .tileLayer(`https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png`, {
        attribution: `&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>`
      })
      .addTo(this.map);
  }

  componentDidMount() {
    const {offers, activeOffer} = this.props;

    this.initMap();
    const icon = leaflet.icon({
      iconUrl: `img/pin.svg`,
      iconSize: [30, 30],
    });
    offers.forEach((item) => {
      this.setState({
        currentOffer: item,
      });
      leaflet
       .marker(item.offerCoordinates, {icon})
       .addTo(this.map);
    });
    if (activeOffer) {
      const activeicon = leaflet.icon({
        iconUrl: `img/pin` + `${activeOffer ? `-active` : ``}.svg`,
        iconSize: [30, 30],
      });
      leaflet
       .marker(activeOffer.offerCoordinates, {activeicon})
       .addTo(this.map);
    }
  }

  render() {
    return (
      <div id="map"></div>
    );
  }

  componentDidUpdate() {
    const {activeOffer} = this.props;

    const icon = leaflet.icon({
      iconUrl: `img/pin` + `${activeOffer ? `-active` : ``}.svg`,
      iconSize: [30, 30],
    });
    if (activeOffer) {
      this.setState({
        currentOffer: activeOffer,
      });
      leaflet
       .marker(activeOffer.offerCoordinates, {icon})
       .addTo(this.map);
    } else {
      leaflet
       .marker(this.state.currentOffer.offerCoordinates, {icon})
       .addTo(this.map);
    }
  }
}

Map.propTypes = {
  offers: PropTypes.arrayOf(offerPropTypes),
  activeOffer: PropTypes.object,
  offer: PropTypes.object,
};


export default Map;

