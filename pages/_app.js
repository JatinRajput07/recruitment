import '../styles/globals.css'
import { wrapper } from '../redux/store'
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';

function MyApp({ Component, pageProps }) {

  const {auth, socket} = useSelector((state)=> state)
  const dispatch = useDispatch();
  
  axios.defaults.headers.common["Authorization"] =  `Bearer ${auth.authToken}`

  return <Component {...pageProps} />
  
}


export default wrapper.withRedux(MyApp)

// import React, { useEffect } from 'react';
// import DataLoader from '../components/UI/Loader';
// import type { AppProps } from 'next/app'
// import { wrapper } from '../redux/store'
// import 'react-pure-modal/dist/react-pure-modal.min.css';
// import axios from 'axios';
// import { useDispatch, useSelector } from 'react-redux';
// // import io from "socket.io-client";
// import { connectSocket } from '../redux/actions/socketActions';
// import { openWebSocket } from '../redux/actions/chatActions';
// import { getNotifications } from '../redux/actions/userActions';

// // export const SOCKET_URI = 'http://localhost:7806'
// // 
// export const SOCKET_URI = 'https://www.prosmapgarage.com'



// function MyApp({ Component, pageProps }:AppProps) {

//   // const {auth, socket} = useSelector((state)=> state)
//   // const dispatch = useDispatch();

//   useEffect(() => {

//     // dispatch(openWebSocket());
   
     
//   }, [])

//   // useEffect(() => {

//   //   auth.authToken && dispatch(getNotifications())
     
//   // }, [auth.authToken])
  
  

  // axios.defaults.headers.common["Authorization"] =  `Bearer ${auth.authToken}`

//   const [loading, setLoading] = React.useState(false);

//   // React.useEffect(() => {      
//   //     setLoading(true);
//   // }, []);

//   return loading ? <Component {...pageProps} />: <DataLoader/>
// }

// export default wrapper.withRedux(MyApp)