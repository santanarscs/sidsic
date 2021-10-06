import { Layout } from "../../components/Layout";
import Link from 'next/link'
import { PencilIcon, PrinterIcon, SearchIcon, TrashIcon } from "@heroicons/react/outline";

const reports = [
  {id: 1, title: 'Relatório de barragens 2021.2', initialData: '18/07/2021', finishDate: '', type: 'BARRAGENS', isOpen: 'Aberto'},
  {id: 2, title: 'Relatório de rodovias 2021.1', initialData: '20/07/2021', finishDate: '', type: 'RODOVIAS', isOpen: 'Aberto'},
  {id: 3, title: 'Relatório de telecomunicações 2021.1', initialData: '23/07/2021', finishDate: '01/10/2021', type: 'TELECOMUNICAÇÕES', isOpen: 'Concluído'},
  {id: 4, title: 'Relatório de águas 2021.1', initialData: '15/06/2021', finishDate: '23/09/2021', type: 'ÁGUAS', isOpen: 'Concluído'},
  {id: 5, title: 'Relatório de barragens 2021.1', initialData: '01/06/2021', finishDate: '01/07/2021', type: 'BARRAGENS', isOpen: 'Concluído'},
]

export default function Report() {
  return (
    <Layout title="Relatórios">
      <div className="mx-4 flex justify-between items-center mb-4">
        <h1 className="text-4xl text-gray-700 ">Relatórios</h1>
        <Link href="/reports/new">
        <a className=" px-4 py-2 bg-blue-500 text-white uppercase tracking-wider shadow-sm rounded-sm hover:bg-blue-400 transition-colors">
          Novo
        </a>
        </Link>
      </div>
      <div className="mx-4 bg-white shadow-md p-4 rounded-sm">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-100">
            <tr>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Título</th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Data de Inicio</th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Data de conclusão</th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Tipo</th>
              <th scope="col" className="px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider text-center">Status</th>
              <th scope="col" className="px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider text-center">Ações</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200 text-gray-700 text-sm">
            {reports.map(report => (
              <tr key={report.id}>
                <td className="px-6 py-3">{report.title}</td>
                <td className="px-6 py-3">{report.initialData}</td>
                <td className="px-6 py-3">{report.finishDate}</td>
                <td className="px-6 py-3">{report.type}</td>
                <td className="px-6 py-3 text-center">
                  <span className={`
                    text-xs p-2 rounded-lg tracking-wider font-bold
                    ${report.isOpen === 'Aberto' ? 'bg-yellow-200 text-yellow-800' : 'bg-green-200 text-green-800'}
                  `}>{report.isOpen}</span>
                </td>
                <td className="px-6 py-3 flex space-x-1 justify-center">
                  <Link href="">
                    <a className="bg-blue-500 h-5 w-5 flex items-center justify-center text-white rounded-sm">
                      <SearchIcon className="h-4 w-4" />
                    </a>
                  </Link>
                  {report.isOpen === 'Aberto' && (
                    <Link href="">
                    <a className="bg-green-500 h-5 w-5 flex items-center justify-center text-white rounded-sm">
                      <PencilIcon className="h-4 w-4" />
                    </a>
                  </Link>
                  )}
                  {report.isOpen === 'Concluído' && (
                    <Link href="">
                    <a className="bg-yellow-500 h-5 w-5 flex items-center justify-center text-white rounded-sm">
                      <PrinterIcon className="h-4 w-4" />
                    </a>
                  </Link>
                  )}
                  {report.isOpen === 'Aberto' && (
                  <Link href="">
                    <a className="bg-red-500 h-5 w-5 flex items-center justify-center text-white rounded-sm">
                      <TrashIcon className="h-4 w-4" />
                    </a>
                  </Link>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Layout>
  )
}