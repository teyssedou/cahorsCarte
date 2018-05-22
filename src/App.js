import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Map from "./map.js";
import Menu from "./menu.js";

class App extends Component {
  render() {
    return (
      <div className=" container App">
        <div class="row">
          <div class="col-sm-3">
            <Menu />
          </div>
          <div class="col-sm-9">
            <Map />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
