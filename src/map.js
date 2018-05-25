import React, { Component } from "react";
import { render } from "react-dom";
import { Map, TileLayer, Marker, Popup } from "react-leaflet";
import Datas from "./places.json";
import Souscat from "./souscat.js";
import L from "leaflet";

const stamenTonerTiles =
  "http://stamen-tiles-{s}.a.ssl.fastly.net/toner-background/{z}/{x}/{y}.png";

const stamenTonerAttr =
  'Map tiles by <a href="http://stamen.com">Stamen Design</a>, <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a> &mdash; Map data &copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>';

class Carte extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mapCenter: [44.4475229, 1.441989],
      zoomLevel: 14
      // lat: 44.4535718,
      // lng: 1.4325743
    };
  }

  listMarkers() {
    const listFinal = [];
    for (var i = 0; i < Datas.length; i++) {
      for (var j = Datas[i].children.length - 1; j >= 0; j--) {
        var icones = Datas[i].children[j].icon;
        for (var k = Datas[i].children[j].places.length - 1; k >= 0; k--) {
          var lat = Datas[i].children[j].places[k].lat;
          var lon = Datas[i].children[j].places[k].lon;

          listFinal.push(
            <Marker
              opacity={this.props.opacity}
              key={Datas[i].children[j].places[k].id}
              position={[lat, lon]}
              icon={
                new L.Icon({
                  iconUrl: require("./img/" + [icones] + ".svg"),
                  iconAnchor: null,
                  popupAnchor: null,
                  shadowUrl: null,
                  shadowSize: null,
                  shadowAnchor: null,
                  iconSize: new L.Point(20, 20),
                  className: "leaflet-div-icon"
                })
              }
            >
              <Popup id="popup">
                <span> Yes!</span>
              </Popup>
            </Marker>
          );
        }
      }
    }
    return listFinal;
  }

  render() {
    return (
      <div id="map-position">
        <Map center={this.state.mapCenter} zoom={this.state.zoomLevel}>
          <TileLayer
            attribution="&amp;copy <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          {this.listMarkers()}
        </Map>
      </div>
    );
  }
}
export default Carte;

//            <div id="map-position">
//           <Map center={this.state.mapCenter} zoom={this.state.zoomLevel}>
//             <TileLayer
//               attribution="&amp;copy <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
//               url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
//             />
//             <Marker position={position} icon={iconParking}>
//               <Popup>
//                 {Datas.map((data, i) =>
//                   data.children.map((child, j) =>
//                     child.places.map((lieu, k) =>
//                       <span>yes{lieu.name}</span>
//                     )))};
//                 </Popup>
//             </Marker>
//           </Map>
//         </div>
