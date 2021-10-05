import { Layout } from "../../components/Layout";
import Link from 'next/link'
const databases = [
  { id: 1, totalCount: 20293, type: 'BARRAGEM', lastUpdate: '23/07/2021' },
  { id: 2, totalCount: 10343, type: 'ÁGUAS', lastUpdate: '28/08/2021'},
  { id: 3, totalCount: 3029, type: 'AERODROMOS', lastUpdate: '21/03/2021'},
  { id: 4, totalCount: 503, type: 'TELECOMUNICAÇÕES', lastUpdate: '01/02/2021'}

]
export default function index() {
  return (
    <Layout title="Base de dados">
      <div className="mx-4 flex justify-between items-center mb-4">
        <h1 className="text-2xl text-gray-700 ">Base de dados</h1>
        <Link href="/databases/new">
        <a className=" px-4 py-2 bg-blue-500 text-white uppercase tracking-wider shadow-sm rounded-sm hover:bg-blue-400 transition-colors">
          Nova
        </a>
        </Link>
      </div>
      <div className="mx-4 bg-white shadow-md p-4 rounded-sm">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-100">
            <tr>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Tipo</th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Última atualização</th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Nºde infraestruturas</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200 text-gray-700">
            {databases.map(database => (
              <tr key={database.id}>
                <td className="px-6 py-3">{database.type}</td>
                <td className="px-6 py-3">{database.lastUpdate}</td>
                <td className="px-6 py-3">{database.totalCount}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Layout>
  )
}