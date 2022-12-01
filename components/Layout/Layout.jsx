import Navbar from './Dashboard-Navbar'
import Sidebar from './Dashboard-Sidebar'
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useDispatch, useSelector } from 'react-redux'
import React, { useState, useEffect } from 'react'


export default function Layout({ requireAuth, children }) {

  const { alerts, auth, formTabs } = useSelector((state => state));

  useEffect(() => {
    alerts.success ? toast.dark(alerts.success) : ''
    alerts.failed ? toast.error(alerts.failed) : ''
}, [alerts])

console.log(alerts,'====alerts=====')

  return (
    <>
      <Sidebar />
      <div id="content-wrapper" className="d-flex flex-column">
     <ToastContainer position="top-right" />  
        <div id="content">
          <Navbar />
          {children}
        </div>

      </div>
    </>
  )
}