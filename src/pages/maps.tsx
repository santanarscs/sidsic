import dynamic from "next/dynamic";
import "leaflet/dist/leaflet.css";

export default function map() {
  const MapWithNoSSR = dynamic(() => import("../components/Map"), {
    ssr: false
  });
  return (
    <MapWithNoSSR />
  )
}