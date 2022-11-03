//Leaflet
import { Map, TileLayer, FeatureGroup, Circle } from 'react-leaflet';
import { EditControl } from "react-leaflet-draw"
import "leaflet/dist/leaflet.css"
import "leaflet-draw/dist/leaflet.draw.css"
import * as L from 'leaflet';

//Event handler
import omnivore from "@mapbox/leaflet-omnivore";

import { useEffect, useRef } from 'react';

const DrawingMap = ({ geojson, setGeojson }) => {
    const ref = useRef(null);

    useEffect(() => {
        console.log("ref", ref)
        if (ref.current?.getLayers().length === 0 && geojson) {
            console.log(ref.current?.getLayers().length)
            L.geoJSON(geojson).eachLayer((layer) => {
                console.log('layer', layer)
                if (
                    layer instanceof L.Polyline ||
                    layer instanceof L.Polygon ||
                    layer instanceof L.Marker
                ) {
                    if (layer?.feature?.properties.radius && ref.current) {
                        new L.Circle(layer.feature.geometry.coordinates.slice().reverse(), {
                        radius: layer.feature?.properties.radius,
                        }).addTo(ref.current);
                    } else {
                        ref.current?.addLayer(layer);
                    }
                }
            });
        }
    }, [geojson]);

    const handleChange = () => {
        /*
        const geo = ref.current?.toGeoJSON();
        console.log(geo);
        if (geo?.type === 'FeatureCollection') {
          setGeojson(geo);
        }
        */
        omnivore
        .geojson("/api/establecimiento").addTo(ref.current)
        console.log("Se agrego bien")
      };
    
    return (
        <FeatureGroup ref={ref}>
            <EditControl
                position='topleft'
                onEdited={handleChange}
                onCreated={() => { console.log("created") }}
                onDeleted={() => { console.log("deleted") }}
                draw={{
                    polygon: true,
                    marker: true,
                    polyline: false,
                    rectangle: false,
                    circle: false,
                    circlemarker: false
                }}
                edit={{ 
                    edit:true, 
                    remove:true
                }}
            />
        </FeatureGroup>
    )
};

export default DrawingMap