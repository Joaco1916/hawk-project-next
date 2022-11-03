import { Marker, Popup } from "react-leaflet"

const Markers = () => {
    return (
        <Marker 
            position={
                {lat: '-38.70074152930493', lng: '-62.26818047487889'}
            }
            draggable={true}
            animate={true}
        >
            <Popup>Vos vivis acá!</Popup>
        </Marker>
    )
}

export default Markers