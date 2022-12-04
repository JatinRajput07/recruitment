// import type { NextPage } from 'next'
import dynamic from 'next/dynamic'
import Layout from '../components/Layout/Layout'
import DashBoard from '../components/View/admin/DashBoard'


require("bootstrap");

export default function Index() {
  return (
    <>
      <div id="wrapper">

        <Layout  requireAuth={true}>
          <DashBoard />
        </Layout>
      </div>

    </>
  )
}

