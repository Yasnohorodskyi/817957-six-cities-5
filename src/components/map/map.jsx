import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import {CITY} from "../../const";

import leaflet from "leaflet";
import "leaflet/dist/leaflet.css";
import {offerPropTypes} from "../../utils/prop-types";

class Map extends PureComponent {
  constructor(props) {
    super(props);

    this.icon = leaflet.icon({
      iconUrl: `img/pin.svg`,
      iconSize: [30, 30]
    });

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
  }

  componentDidMount() {
    const {offers} = this.props;
    this.initMap();
    leaflet
      .tileLayer(`https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png`, {
        attribution: `&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>`
      })
      .addTo(this.map);
    const icon = this.icon;
    offers.forEach((offer) => {
      leaflet
       .marker(offer.offerCoordinates, {icon})
       .addTo(this.map);
    });
  }

  // componentWillUnmount() {
  //   leaflet.remove();
  // }

  render() {
    return (
      <div id="map"></div>
    );
  }
}

Map.propTypes = {
  offers: PropTypes.arrayOf(offerPropTypes),
};


export default Map;

