import dynamic from "next/dynamic";

const MapWithNoSSR = dynamic(() => import('../components/Map'), { ssr: false })
export default function map() {

  return (
    <div className="min-h-screen h-2 bg-gray-200">
      <MapWithNoSSR />
    </div>
  )
}