import { GetServerSideProps } from 'next';
import React from 'react';
import { Layout } from '../components/Layout'
import { withAuth } from '../hof/withAuth';
export default function Home() {
  return (
    <Layout title="Pagina inicial">
      <div className="mx-4 flex justify-between items-center mb-4">
        <h1 className="text-2xl text-gray-700 ">Página Inicial</h1>
      </div>
      
    </Layout>
  )
}

export const getServerSideProps: GetServerSideProps = withAuth(async (ctx, {token}) => {
  return {
      props: {
          
      },
  };
});