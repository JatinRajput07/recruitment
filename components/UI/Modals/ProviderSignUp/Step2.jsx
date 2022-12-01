/* eslint-disable @next/next/no-img-element */
import React from 'react'
import { useFormik } from 'formik';
import { yupResolver } from '@hookform/resolvers/yup';

const Step2 = () => {


  const validationSchema = Yup.object().shape({

    gst: Yup.string()
      .required('GST is required'),
    nationalId: Yup.string()
      .required('National Id is required'),
    companyRegistrationDoc: Yup.string()
      .required('Company RegistrationDoc is required'),
  })

  const formik = useFormik({
    initialValues: {
      gst: '',
      nationalId: '',
      companyRegistrationDoc: '',
    },
    validationSchema,
    onSubmit: (data) => {
      console.log(JSON.stringify(data, null, 2));
    },
  });



  return (
    <div><div className="login_from">
      <form id="login_form" className="form" action="" method="post">
        <h3 className="text-center">Welcome to EDGE</h3>
        <h5 className="text-center">
          {" "}
          Please uplaod the legal document for the verification
        </h5>
        {/* <div className="form-group">
          <label>
            Organization Name<span className="text-danger">*</span>{" "}
          </label>
          <input
            type="text"
            name="username"
            className="form-control"
            placeholder=" ABC Orgaination "
          />
        </div> */}
        <div className="form-group gst">
          <label>
            GST<span className="text-danger">*</span>{" "}
          </label>
          <input
            type="file"
            name="username"
            className="form-control"
            placeholder=" Gst Document Upload"
          />
          <img src="/images/upld.png" alt='' />
        </div>
        <div className="form-group gst">
          <label>
            National ID Card<span className="text-danger">*</span>{" "}
          </label>
          <input
            type="file"
            name="username"
            className="form-control"
            placeholder="National ID Card Upload"
          />
          <img src="/images/upld.png" alt='' />
        </div>
        <div className="form-group gst">
          <label>
            Company Registration Document<span className="text-danger">*</span>{" "}
          </label>
          <input
            type="file"
            name="password"
            className="form-control"
            placeholder="Company Registration Document"
          />
          <img src="/images/upld.png" alt='' />
        </div>
        <div id="submit_btn" className="text-center">
          <a href="">
            <button> Submit</button>{" "}
          </a>
        </div>
      </form>
    </div>
    </div>
  )
}

export default Step2