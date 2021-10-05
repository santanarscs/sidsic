import { Layout } from "../../components/Layout";

export default function NewDatabase(){
  return (
    <Layout title="Base de dados">
      <div className="mx-4 flex justify-between items-center mb-4">
        <h1 className="text-2xl text-gray-700 ">Nova Base de dados</h1>
      </div>
      <div className="mx-4 bg-white shadow-md p-4 rounded-sm">
        <h1>Formulário</h1>
      </div>
    </Layout>
  )
}