import { BellIcon } from "@heroicons/react/outline"
import { useKeycloak } from "@react-keycloak/ssr"
import { KeycloakInstance, KeycloakTokenParsed } from "keycloak-js"
import Link from 'next/link'
type ParsedToken = KeycloakTokenParsed & {
  name?: string;
  
  email?: string

  preferred_username?: string

  given_name?: string

  family_name?: string
}

function Header() {
  const { keycloak } = useKeycloak<KeycloakInstance>()

  const parsedToken: ParsedToken | undefined = keycloak?.tokenParsed

  return (
    <div className="h-14 w-full flex items-center">
      <div className="p-4 mx-4 w-full flex items-center justify-end ml-auto  text-gray-700">
        <BellIcon className="h-7 w-7" />
        <div className="flex flex-col items-end ml-4">
          <strong>{parsedToken?.name}</strong>
          <Link href="/logout">
            <a className="text-red-500 text-bold">Sair</a>
          </Link>
        </div>
      </div>
    </div>
  )
}

export { Header }