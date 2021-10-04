import Head from 'next/head'
import { ReactNode } from 'react'
import { Sidebar } from './Sidebar'

type Props = {
  title?: string;
  children: ReactNode
}

function Layout({title, children}: Props){
  return (
    <div className="flex bg-gray-200 min-h-screen ">
      <Head>
        <title>{title}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width"/>
      </Head>
      <Sidebar />
      <div className="flex-1 flex flex-col  p-4">
        {children}
      </div>
    </div>
  )
}
export { Layout }