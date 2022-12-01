import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Basic from './Basic'
import Complate_SignUp from './Complete'
import Information from './Information'
import Upload_Doc from './Upload_doc'

const Parent = () => {

  const { alerts } = useSelector((state) => state);
  const dispatch = useDispatch();

  const [data, setData] = useState({

  });
  
  return (
    <>
      {alerts?.modal?.step == 1 && <Basic data={data} setData={setData} />}
      {alerts?.modal?.step == 2 && <Information data={data} setData={setData} />}
      {alerts?.modal?.step == 3 && <Upload_Doc data={data} setData={setData} />}
      {alerts?.modal?.step == 4 && <Complate_SignUp data={data} setData={setData} />}
    </>
  )
}

export default Parent