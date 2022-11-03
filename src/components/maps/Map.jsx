//Leaflet
import { MapContainer, TileLayer, LayersControl } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import 'leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css'
import "leaflet-defaulticon-compatibility";

//Omnivore
import omnivore from "@mapbox/leaflet-omnivore";
//import file from "../../utils/establecimiento-prueba.json"

//Custom
import DrawingMap from './DrawingMap';
import BackgroundLayers from './BackgroundLayers';
import { useEffect, useState } from 'react';
import ShowMapData from './ShowMapData';
import Markers from './Markers';

const Map = () => {
  return (
    <div>
        <h1>Map component</h1>
        <MapContainer 
            center={
                //[40.8054,-74.0241]
                {lat: '-38.70074152930493', lng: '-62.26818047487889'}
            } 
            zoom={18} 
            scrollWheelZoom={true} 
        >
            <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution="&copy; <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
            />
            <Markers />
            {/*
            <Marker 
                position={[40.8054,-74.0241]}
                draggable={true}
                animate={true}
            >
                <Popup>Hola!</Popup>
            </Marker>
            */}
        </MapContainer>
    </div>
  )
}

export default Map