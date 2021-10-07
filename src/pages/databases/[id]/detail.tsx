import { useState } from "react";
import dynamic from 'next/dynamic'
import Link from 'next/link'
import { Layout } from "../../../components/Layout";
// import { QueryBuilder } from "../../../components/QueryBuilder";

const QueryBuilder = dynamic(() => import('../../../components/QueryBuilder'))
export default function DetailDatabase() {
  const [metadatas, setMetadatas] = useState<any>();
  const [stateQuery, setStateQuery] = useState<any>();
  const [data, setData] = useState<any[]>([])
  return (
    <Layout title="Detalhes Base de dados">
      <div className="mx-4 flex justify-between items-center mb-4">
        <h1 className="text-4xl text-gray-700 ">Detalhes</h1>
      </div>
      <div className="mx-4 bg-white shadow-md p-4 rounded-sm mb-4">
        <h2 className="mb-2 text-xl text-bold text-gray-700">Busque da base de dados</h2>
        <QueryBuilder
            fields={metadatas}
            handleSetStateQuery={setStateQuery}
        />
        <button onClick={() => setData(['foo', 'bar'])} className="mt-4 bg-blue-500 text-white px-4 py-2 text-bold uppercase hover:bg-blue-400 transition-colors">Gerar consulta</button>
      </div>
      {!!data.length && (
        <div className="mx-4 bg-white shadow-md p-4 rounded-sm">
          <div className="flex items-center justify-between">
            <h2 className="mb-2 text-xl text-bold text-gray-700">Tabela de dados</h2>
            <button onClick={() =>setData([])} className="bg-green-500 text-white px-4 py-2 text-bold uppercase hover:bg-green-400 transition-colors">Gerar XLS</button>
          </div>
          <div className="flex items-center justify-center">
            <p>Tabela dinâmica</p>
          </div>
        </div>
      )}
    </Layout>
  )
}