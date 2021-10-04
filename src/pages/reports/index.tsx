import { Layout } from "../../components/Layout";
import Link from 'next/link'

const reports = [
  {id: 1, initialData: Date.now(), finishDate: Date.now(), type: 'BARRAGENS', isOpen: 'Aberto'},
  {id: 2, initialData: Date.now(), finishDate: Date.now(), type: 'RODOVIAS', isOpen: 'Aberto'},
  {id: 3, initialData: Date.now(), finishDate: Date.now(), type: 'TELECOMUNICAÇÕES', isOpen: 'Concluído'},
  {id: 4, initialData: Date.now(), finishDate: Date.now(), type: 'ÁGUAS', isOpen: 'Concluído'},
  {id: 5, initialData: Date.now(), finishDate: Date.now(), type: 'BARRAGENS', isOpen: 'Concluído'},
]

export default function Report() {
  return (
    <Layout title="Relatórios">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl text-gray-700 ">Relatórios</h1>
        <Link href="/reports/new">
        <a className=" px-4 py-2 bg-blue-500 text-white uppercase tracking-wider shadow-sm rounded-sm hover:bg-blue-400 transition-colors">
          Novo
        </a>
        </Link>
      </div>
      <div className="bg-white shadow-md p-4 rounded-sm">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-100">
            <tr>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Data de Inicio</th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Data de conclusão</th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Tipo</th>
              <th scope="col" className="px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider text-center">Status</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200 text-gray-700">
            {reports.map(report => (
              <tr key={report.id}>
                <td className="px-6 py-3">{report.initialData}</td>
                <td className="px-6 py-3">{report.finishDate}</td>
                <td className="px-6 py-3">{report.type}</td>
                <td className="px-6 py-3 text-center">
                  <span className={`
                    text-xs p-2 rounded-lg tracking-wider font-bold
                    ${report.isOpen === 'Aberto' ? 'bg-yellow-200 text-yellow-800' : 'bg-green-200 text-green-800'}
                  `}>{report.isOpen}</span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Layout>
  )
}