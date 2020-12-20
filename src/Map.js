import React from "react";
import { Map as LeafletMap, TileLayer } from "react-leaflet";
import "./Map.css";
import { showDataOnMap } from "./util";

function Map({ countries, casesType, center, zoom }) {
    const dfLocation = { lat: 34.80746, lng: -40.4796 }
    return ( <
        div className = "map" >
        <
        LeafletMap center = { center }
        zoom = { zoom } >
        <
        TileLayer url = "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution = '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors' /
        > { showDataOnMap(countries, casesType) } <
        /LeafletMap> <
        /div>
    );
}

export default Map;