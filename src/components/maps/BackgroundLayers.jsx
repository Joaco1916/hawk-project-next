import { LayerGroup, LayersControl, TileLayer } from "react-leaflet"

import { layers } from "../../utils/maps/layers.js"

const BackgroundLayers = () => {
    return(
        <LayersControl position="topright">
            {
                layers.map( (layer) => (
                    <LayersControl.BaseLayer name={layer.name}>
                        <TileLayer
                            url={layer.url}
                            subdomains={layer.subdomains}
                        />
                    </LayersControl.BaseLayer>
                ))
            }
        </LayersControl>
    )
}

export default BackgroundLayers