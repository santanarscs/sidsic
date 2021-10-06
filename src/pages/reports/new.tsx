import { useState } from "react";
import { RichText } from "../../components/Forms/RichText";
import { Layout } from "../../components/Layout";
import axios from 'axios'
import { FileInputButton } from "../../components/Forms/FileInputButton";


type Response = {
  header: string[],
  data: any[],
}

export default function NewReport() {
  const [step, setStep] = useState(1)
  const [data, setData] = useState<string[]>([])
  const [header, setHeader] = useState<any[]>([])

  const onChange = async (formData: any) => {
    const config = {
      headers: { 'content-type': 'multipart/form-data' },
      onUploadProgress: (event: any) => {
        console.log(`Current progress:`, Math.round((event.loaded * 100) / event.total));
      },
    };

    const response = await axios.post<Response>('/api/uploads', formData, config);

    
    const { header, data } = response.data
    setHeader(header)
    setData(data)
  };



  function renderUploadFile() {
    return (
      <div>
        <div className="flex flex-col w-full my-3">
          <label htmlFor="" className="text-gray-800 mb-1">Título</label>
          <input type="text" className="rounded-sm relative w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-800 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"/>
        </div>
        {data.length ? (
          <div>
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-100">
                <tr>
                  {header.map(item => <th key={item} scope="col" className="p-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">{item}</th>)}
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200 text-gray-700">
                {data.map((item, index) => (
                  <tr key={`${item}-${index}`}>
                    {header.map(itemValue => (
                      <td className="px-3 py-2" key={`${itemValue}-${index}-data`}>{item[itemValue]}</td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <>
              <label className="text-gray-800 my-2">Faça o upload da tabela com as infraestruturas</label>
              <FileInputButton
                label="Upload do arquivo"
                uploadFileName="files"
                onChange={onChange}
              />
          </>
        )}
      </div>
    )
  }

  function renderDescriptionOfMethodology() {
    return (
      <div>
        <h3 className="text-xl text-gray-700 my-2">Descreva a metodologia utilizada</h3>
        <RichText />
      </div>
    )
  }

  function renderLevelOfRisk() {
    return (
      <div>
        <h3 className="text-xl text-gray-700 my-2">Descreva o nível de risco das infraestruturas</h3>
        <RichText />
      </div>
    )
  }

  return (
    <Layout title="Novo Relatório">
      <div className="mx-4 flex justify-between items-center mb-4">
        <h1 className="text-2xl text-gray-700 ">Novo Relatório</h1>
      </div>
      <div className=" mx-4 p-4 bg-white">
        <div className="flex items-center">
          <div className={`flex items-center relative ${step >= 1 ? 'text-white' : 'text-blue-500'}`}>
            <div className={`rounded-full transition duration-500 ease-in-out h-12 w-12 py-3 border-2 border-blue-600 ${step >= 1 ? 'bg-blue-600': 'bg-transparent'}`}>
              <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-bookmark ">
                  <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path>
              </svg>
            </div>
            <div className="absolute top-0 -ml-10 text-center mt-16 w-32 text-xs font-medium uppercase text-blue-600">
              Arquivo
            </div>
          </div>
          <div className={`flex-auto border-t-2 transition duration-500 ease-in-out ${step > 1 ? 'border-blue-600' : 'border-gray-300'}`}></div>
          <div className={`flex items-center relative text-gray-500  ${step >= 2 && 'text-blue-600'}`}>
            <div className={`rounded-full transition duration-500 ease-in-out h-12 w-12 py-3 border-2 border-gray-300  ${step >= 2 && 'border-blue-600 bg-blue-600 text-white'}`}>
              <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-user-plus ">
                  <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                  <circle cx="8.5" cy="7" r="4"></circle>
                  <line x1="20" y1="8" x2="20" y2="14"></line>
                  <line x1="23" y1="11" x2="17" y2="11"></line>
              </svg>
            </div>
            <div className="absolute top-0 -ml-10 text-center mt-16 w-32 text-xs font-medium uppercase text-gray-500">Metodologia</div>
          </div>
          <div className={`flex-auto border-t-2 transition duration-500 ease-in-out ${step >= 3 ? 'border-blue-600' : 'border-gray-300'}`}></div>
          <div className={`flex items-center relative text-gray-500 ${step >= 3 && 'text-blue-600'}`}>
            <div className={`rounded-full transition duration-500 ease-in-out h-12 w-12 py-3 border-2 border-gray-300 ${step >= 3 && 'border-blue-600 bg-blue-600 text-white'}`}>
              <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-database ">
                <ellipse cx="12" cy="5" rx="9" ry="3"></ellipse>
                <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"></path>
                <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"></path>
              </svg>
            </div>
            <div className="absolute top-0 -ml-10 text-center mt-16 w-32 text-xs font-medium uppercase text-gray-500">Nível</div>
            </div>
        </div>
        <div className="mt-10">
          {step === 1 && renderUploadFile()}
          {step === 2 && renderDescriptionOfMethodology()}
          {step === 3 && renderLevelOfRisk()}
        </div>
        <div className="mt-8 flex items-center justify-between">
          <div>
            {step !== 1 && <button onClick={() => setStep(step -1)} className="border border-blue-500 text-blue-500 px-4 py-2 rounded-sm hover:bg-blue-50 transition-colors">Anterior</button>}
            
          </div>
          <div>
            {step !== 3 && <button onClick={() => setStep(step + 1)} className="border border-blue-500 text-blue-500 px-4 py-2  rounded-sm hover:bg-blue-50 transition-colors">Próximo</button>}
            {step === 3 && <button className="border border-blue-500 text-white bg-blue-500 px-4 py-2  rounded-sm hover:bg-blue-700 transition-colors">Finalizar</button> }
          </div>
        </div>
      </div>
    </Layout>
  )
}