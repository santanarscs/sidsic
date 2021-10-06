import { MapContainer, TileLayer, Marker, MapConsumer } from 'react-leaflet'
import { LatLngExpression } from 'leaflet'
import "leaflet/dist/leaflet.css";
type MapView = {
  center: LatLngExpression
  zoom: number
  setView(center: LatLngExpression, zoom?: number): void
}

const mapView: MapView = {
  center: [0, 0],
  zoom: 3,
  setView(center: LatLngExpression, zoom?: number) {
    this.center = center
    if (zoom) {
      this.zoom = zoom
    }
  }
}

export default function Map() {
  return (
    <MapContainer
      center={[-15.7950519,-47.8727724]}
      zoom={5}
      preferCanvas={true}
      style={{ width: '100%', height: '100%'}}
    >
      <MapConsumer>
        {(map) => {
          const width =
            window.innerWidth ||
            document.documentElement.clientWidth ||
            document.body.clientWidth

          if (width < 768) {
            map.setMinZoom(2)
          }

          map.addEventListener('dragend', () => {
            mapView.setView(map.getCenter())
          })
          map.addEventListener('zoomend', () => {
            mapView.setView(map.getCenter(), map.getZoom())
          })

          return null
        }}
      </MapConsumer>
    <TileLayer
      attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    />
    
  </MapContainer>
  );
};