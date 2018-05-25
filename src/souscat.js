import React, { Component } from 'react';
import { render } from "react-dom";
import Datas from "./places.json";
import Plus from "./img/plus.svg";

class Souscat extends React.Component {

  displayCat(i) {
   var list = document.getElementById("list" + i);

   if (list.classList.contains("display-none")) {
     list.classList.remove("display-none");
   } else {
     list.classList.add("display-none");
   }
 }

  render() {
      return (
      	<div>
          {Datas.map((data, i) =>
				    <div key={data.id}>
              <div className="title">
                <img src={Plus} id="iconTitle" />
	              <h5 id={i} onClick={()=>this.displayCat(i)}>{data.name}</h5>
              </div>
	      		  <ul id={"list"+ i} className="display-none">
				      {data.children.map((child, j) =>
                <li key={child.id} className="sousCatName">{child.name}
                <ul className="display-none">
                   {child.places.map((place, k) => (
                     <li key={place.id}>
                       {place.name}
                       <br />
                       {place.lat}
                       <br />
                       {place.lon}
                     </li>
                   ))}
                 </ul></li>)}
				      </ul>
				    </div>
	        )}
        </div>
      );
  }
}

export default Souscat;


