import React, { Component } from "react";
import { render } from "react-dom";
import Datas from "./places.json";
import Plus from "./img/plus.svg";
import Parking from "./img/parking.svg";
import Bus from "./img/bus.svg";
import Primaire from "./img/primaire.svg";
import Maternelle from "./img/maternelle.svg";
import Verre from "./img/verre.svg";
import Dechetterie from "./img/dechetterie.svg";

var listImg = {
  parking: Parking,
  bus: Bus,
  primaire: Primaire,
  maternelle: Maternelle,
  verre: Verre,
  dechetterie: Dechetterie
};

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
    console.log({ Datas });

    const position = (
      <div>
        {Datas.map((data, i) => (
          <div key={data.id}>
            <h5 id={i} onClick={() => this.displayCat(i)}>
              {data.name}
            </h5>
            <ul id={"list" + i} className="display-none">
              {data.children.map((child, j) => (
                <li key={child.id}>{child.name}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    );

    return (
      <div>{position}</div>

      /* <div>
        {Datas.map((data, i) => (
          <div key={data.id}>
            <h5 id={i} onClick={() => this.displayCat(i)}>
              {data.name}
            </h5>
            <ul id={"list" + i} className="display-none">
              {data.children.map((child, j) => (
                <li key={child.id}>
                  {child.name}
                  {child.places.map((place, k) => (
                    <li>
                      {place.name}
                      <br />
                      {place.lat}
                      <br />
                      {place.lon}
                    </li>
                  ))}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div> */
    );
  }
}

export default Souscat;
