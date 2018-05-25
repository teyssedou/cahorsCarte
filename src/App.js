import React, { Component } from "react";
import "./App.css";
import Map from "./map.js";
import Menu from "./menu.js";

class App extends Component {
  render() {
    return (
      <div className="container App">
        <div className="row">
          <div className="col-sm-4">
            <Menu />
          </div>
          <div className="col-sm-8">
            <Map />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
