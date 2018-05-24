import L from 'leaflet';

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

export { iconParking };