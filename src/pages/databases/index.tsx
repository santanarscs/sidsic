import { Layout } from "../../components/Layout";
import Link from 'next/link'
import { SearchIcon } from "@heroicons/react/outline";
import { Pagination } from '../../components/Pagination'
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
        <h1 className="text-4xl text-gray-700 ">Base de dados</h1>
      </div>
      <div className="mx-4 bg-white shadow-md p-4 rounded-sm">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-100">
            <tr>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Tipo</th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Última atualização</th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Nºde infraestruturas</th>
              <th scope="col" className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">Ações</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200 text-gray-700 text-sm">
            {databases.map(database => (
              <tr key={database.id}>
                <td className="px-6 py-3">{database.type}</td>
                <td className="px-6 py-3">{database.lastUpdate}</td>
                <td className="px-6 py-3">{database.totalCount}</td>
                <td>
                <td className="px-6 py-3 flex justify-center">
                  <Link href={`/databases/${database.id}/detail`}>
                    <a className="bg-blue-500 h-5 w-5 flex items-center justify-center text-white rounded-sm">
                      <SearchIcon className="h-4 w-4" />
                    </a>
                  </Link>
                </td>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <Pagination 
          totalCountOfRegisters={100}
          currentPage={1}
          onPageChange={() => console.log('testing')}
        />
      </div>
    </Layout>
  )
}