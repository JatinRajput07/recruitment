// import type { NextPage } from 'next'
import dynamic from 'next/dynamic'
// import Layout from '../../components/Layout/Layout'
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useDispatch, useSelector } from 'react-redux'
import React, { useState, useEffect } from 'react'
import  Submit_Info from '../../components/View/Users/Submit_Info'



export default function Index() {


  const { alerts, auth, formTabs } = useSelector((state => state));

  useEffect(() => {
    alerts.success ? toast.dark(alerts.success) : ''
    alerts.failed ? toast.error(alerts.failed) : ''
}, [alerts])

  return (
    <>
      {/* <div id="wrapper"> */}

        {/* <Layout> */}
        <ToastContainer position="top-right" />  
            <Submit_Info/>
        {/* </Layout>
      </div> */}

    </>
  )
}
