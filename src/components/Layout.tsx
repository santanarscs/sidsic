import Head from 'next/head'
import React, { ReactNode } from 'react'
import { Sidebar } from './Sidebar'
import { motion } from "framer-motion";
import { Header } from './header';
type Props = {
  title?: string;
  children: ReactNode
}

function Layout({title, children}: Props){
  return (
    <div className="flex bg-gray-200 min-h-screen "  >
      <Head>
        <title>{title}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width"/>
      </Head>
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <Header />
        <motion.div className="p-4"  initial='initial' animate='animate' exit={{ opacity: 0 }}>
          {children}
        </motion.div>
      </div>
    </div>
  )
}
export { Layout }