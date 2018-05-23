import React, { Component } from 'react';
import { render } from "react-dom";
import Souscat from "./souscat.js";

class Menu extends Component {
  render() {
    return (
    	<div>
        	<header className="App-header">
          		<h1 className="App-title">Plan de Cahors</h1>
       			<Souscat />
        	</header>
        </div>
    );
  }
}

export default Menu;