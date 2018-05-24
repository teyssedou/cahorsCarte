import React, { Component } from 'react';
import { render } from "react-dom";
import Datas from "./places.json";

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
	           <h5 id={i} onClick={()=>this.displayCat(i)}>{data.name}</h5>
	      		 <ul id={"list"+ i} className="display-none">
				      {data.children.map((child, j) =><li key={child.id}>{child.name}</li>)}
				     </ul>
				    </div>
	        )}
        </div>
      );
  }
}

export default Souscat;


