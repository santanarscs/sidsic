import dynamic from "next/dynamic";
import Link from 'next/link'
import { ArrowLeftIcon } from '@heroicons/react/outline'
const MapWithNoSSR = dynamic(() => import('../components/Map'), { ssr: false })
export default function map() {

  return (
    <div className="min-h-screen h-2 bg-gray-200">
      <div className="h-14 bg-blue-600 w-full flex items-center">
        <Link href="/">
          <a>
            <ArrowLeftIcon className=" ml-4 h-6 w-h-6 text-white" />
          </a>
        </Link>
      </div>
      <MapWithNoSSR />
    </div>
  )
}