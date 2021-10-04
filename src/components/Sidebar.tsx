import { HomeIcon, DocumentReportIcon, DatabaseIcon } from '@heroicons/react/outline'
import { ActiveLink } from './ActiveLink'
function Sidebar() {
  return (
    <div className="w-64 bg-white">
      <div>
        <ul className="mt-10 space-y-4">
          <li>
            <ActiveLink href="/dashboard" passHref>
              <a className="flex ml-4 py-2">
                <HomeIcon className="h-6 w-6" />
                <span className="ml-4 font-medium">Início</span>
              </a>
            </ActiveLink>
          </li>
          <li>
            <ActiveLink href="/databases" passHref>
              <a className="flex ml-4 py-2">
                <DatabaseIcon className="h-6 w-6" />
                <span className="ml-4 font-medium">Bases de Dados</span>
              </a>
            </ActiveLink>
          </li>
          <li>
            <ActiveLink href="/reports" passHref>
              <a className="flex ml-4 py-2">
                <DocumentReportIcon className="h-6 w-6" />
                <span className="ml-4 font-medium">Relatórios</span>
              </a>
            </ActiveLink>
          </li>
        </ul>
      </div>
    </div>
  )
}

export { Sidebar }