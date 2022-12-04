import Navbar from './Dashboard-Navbar'
import Sidebar from './Dashboard-Sidebar'
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useDispatch, useSelector } from 'react-redux'
import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/router';
import { handleLogout } from '../../redux/actions/authAction';
import { get } from '../../helpers/apiHelper';


export default function Layout({ requireAuth, children }) {
  const dispatch = useDispatch();
  const [tabs, setTabs] = useState(0)
  const [ok, setOk] = useState(false);
  const router = useRouter();
  const { alerts, auth, formTabs } = useSelector((state => state));

  useEffect(() => {
    alerts.success ? toast.dark(alerts.success) : ''
    alerts.failed ? toast.error(alerts.failed) : ''
    console.log(requireAuth,'=====@+===')
  }, [alerts])



  axios.interceptors.response.use(
    function (response) {
        // any status code that lie within the range of 2XX cause this function
        // to trigger
        return response;
    },

    function (error) {
        let res = error.response;
        if (res.status === 500) {
            return new Promise((resolve, reject) => {
              dispatch(clearAlerts())
                window.sessionStorage.clear()
                router.push("/admin/login");
                dispatch(handleLogout(router))
            });
        }
        return Promise.reject(error);
    }

);


  useEffect(() => {
    const tabs = localStorage.getItem('formTabs');
    console.log(tabs);
    setTabs(tabs);
    if (requireAuth) {
      fetchUser()
    } else {
      if (auth.isAuthenticated && router.asPath.includes('registeration')) {

        dispatch(clearAlerts())
        setOk(false);
        router.push('/admin/login')
      } else {
        setOk(true);

      }
    }
  }, [])

  const fetchUser = async () => {
    try {
      let res = await get('../api/v1/admin/me');
      console.log(res)
      if (res.status == true) {
        setOk(true);
        sessionStorage.setItem("user", JSON.stringify(res.data));

      }
    } catch (err) {
      console.log(err);
      setOk(false);
      router.push("/admin/login");
    }
  };

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