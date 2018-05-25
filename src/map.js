import React, { Component } from 'react';
import { render } from "react-dom";
import { Map, TileLayer, Marker, Popup } from "react-leaflet";
import Datas from "./places.json";
import { iconParking, iconBriefcase, iconPlaceholder, iconPuzzle, iconRecycling, iconTrash } from './icon.js';


const stamenTonerTiles =
  "http://stamen-tiles-{s}.a.ssl.fastly.net/toner-background/{z}/{x}/{y}.png";

const stamenTonerAttr =
  'Map tiles by <a href="http://stamen.com">Stamen Design</a>, <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a> &mdash; Map data &copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>';


class Carte extends Component {

    constructor(props) {
        super(props);
        this.state = {
          mapCenter : [44.4475229, 1.441989],
          zoomLevel : 14,
          lat: 44.4535718,
          lng: 1.4325743
        };
      }

    render() {

      const position = [this.state.lat, this.state.lng];

        return (
          <div id="map-position">
            <Map center={this.state.mapCenter} zoom={this.state.zoomLevel}>
              <TileLayer
                attribution="&amp;copy <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              />
              <Marker position={position} icon={iconParking}>
                <Popup>
                {Datas.map((data, i) =>
                      data.children.map((child, j) =>
                           child.places.map((lieu, k) => 
                  <span>yes{lieu.name}</span>
                      )))};
                </Popup>
              </Marker>
            </Map>
          </div>
        );
      }
    }

  
  export default Carte;