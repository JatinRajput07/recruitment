// import type { NextPage } from 'next'
import dynamic from 'next/dynamic'
import Layout from '../components/Layout/Layout'
import DashBoard from '../components/View/admin/DashBoard'



export default function Index() {
  return (
    <>
      <div id="wrapper">

        <Layout>
          <DashBoard />
        </Layout>
      </div>

    </>
  )
}

