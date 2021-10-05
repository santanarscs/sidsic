import { Map as MapContainer, TileLayer, Marker, Popup } from "react-leaflet";


const Map = () => {
  return (
    <MapContainer
      center={[-27.2092052, -49.6401092]}
      zoom={15}
      style={{ width: '100%', height: '100%'}}
    >
    <TileLayer url="https://a.tile.openstreetmap.org/{z}/{x}/{y}.png" />
    
  </MapContainer>
  );
};

export default Map;
