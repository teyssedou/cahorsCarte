import L from 'leaflet';

class Icones extends Component {

    const iconParking = new L.Icon({
        iconUrl: require('./img/parking.svg'),
        iconRetinaUrl: require('./img/parking.svg'),
        iconAnchor: null,
        popupAnchor: null,
        shadowUrl: null,
        shadowSize: null,
        shadowAnchor: null,
        iconSize: new L.Point(20, 20),
        className: 'leaflet-div-icon'
    });

    const iconBriefcase = new L.Icon({
        iconUrl: require('./img/briefcase.svg'),
        iconRetinaUrl: require('./img/briefcase.svg'),
        iconAnchor: null,
        popupAnchor: null,
        shadowUrl: null,
        shadowSize: null,
        shadowAnchor: null,
        iconSize: new L.Point(20, 20),
        className: 'leaflet-div-icon'
    });

    const iconPlaceholder = new L.Icon({
        iconUrl: require('./img/placeholder.svg'),
        iconRetinaUrl: require('./img/placeholder.svg'),
        iconAnchor: null,
        popupAnchor: null,
        shadowUrl: null,
        shadowSize: null,
        shadowAnchor: null,
        iconSize: new L.Point(20, 20),
        className: 'leaflet-div-icon'
    });

    const iconPuzzle = new L.Icon({
        iconUrl: require('./img/puzzle.svg'),
        iconRetinaUrl: require('./img/puzzle.svg'),
        iconAnchor: null,
        popupAnchor: null,
        shadowUrl: null,
        shadowSize: null,
        shadowAnchor: null,
        iconSize: new L.Point(20, 20),
        className: 'leaflet-div-icon'
    });

    const iconRecycling = new L.Icon({
        iconUrl: require('./img/recycling.svg'),
        iconRetinaUrl: require('./img/recycling.svg'),
        iconAnchor: null,
        popupAnchor: null,
        shadowUrl: null,
        shadowSize: null,
        shadowAnchor: null,
        iconSize: new L.Point(20, 20),
        className: 'leaflet-div-icon'
    });

    const iconTrash = new L.Icon({
        iconUrl: require('./img/trash.svg'),
        iconRetinaUrl: require('./img/trash.svg'),
        iconAnchor: null,
        popupAnchor: null,
        shadowUrl: null,
        shadowSize: null,
        shadowAnchor: null,
        iconSize: new L.Point(20, 20),
        className: 'leaflet-div-icon'
    });

  render() {
    iconParking;
    iconBriefcase;
    iconPlaceholder;
    iconPuzzle;
    iconRecycling;
    iconTrash;
  }
}

export default Icones;