import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Router, { useRouter } from 'next/router'
import { setModal } from '../../../../redux/actions/alertsActions'
import { register } from '../../../../redux/actions/authAction'
// import { get, post, put } from "../../helpers/apiHelper";
import { showErrorAlert } from '../../../../redux/actions/alertsActions'
import * as Yup from 'yup';

const Step1 = ({ setModalType }) => {

  const router = useRouter();
  const { auth, alerts } = useSelector((state => state))

  const dispatch = useDispatch()


  const [data, setData] = useState({
    role: 2
  })
  const [selectImage, setSelectImage] = useState([]);


  const handleSubmit = (e) => {
    e.preventDefault();
    if (data?.password?.length < 6) {
      dispatch(showErrorAlert('Password must be 6 digits long.!'));
      return
    }
    if (data?.password != data?.confirmPassword) {
      dispatch(showErrorAlert('Password and confirm password should be same!'));
      return
    }
    // console.log('selectImage----------------------------------',selectImage)
    let dataa = new FormData();

    dataa.append('businessLicence', selectImage.businessLicence)
    dataa.append('companyRegister', selectImage.companyRegister)
    dataa.append('gstNumber', selectImage.gstNumber)
    dataa.append('organization', data.organization);
    dataa.append('location', data.location);
    dataa.append('address', data.address);
    dataa.append('email', data.email);
    dataa.append('password', data.password);
    dataa.append('role', data.role);
    dispatch(register(dataa, router, setModalType))
  }


  const handleChange = (e) => {
    e.preventDefault();
    setData(() => {
      return {
        ...data,
        [e.target.name]: e.target.value
      }
    })
  }


  const handleFileChange = (e) => {
    setSelectImage((prev) => ({
      ...prev,
      [e.target.name]: e.target.files[0]
    }));
  }

  const handlePhoneChange = (e) => {
    setData(() => {
      return {
        ...data,
        phone: e
      }
    })
  }


  // action="application/x-www-form-urlencoded"


  return (
    <div className="login_from">
      <form id="login_form" className="form" onSubmit={handleSubmit}  >
        <h3 className="text-center">Welcome to EDGE</h3>
        <h4 className="text-center">Provider Sign Up</h4>
        <div className="form-group">
          <label>
            Organization Name<span className="text-danger">*</span>{" "}
          </label>
          <input
            type="text"
            name="organization"
            className="form-control"
            placeholder=" Full name "
            onChange={handleChange}
            value={data && data.organization}
            required
          />
          <div className="text-danger">
            {/* <p className='validate_error'> {formik.errors.organization ? formik.errors.organization : null}</p> */}
          </div>
        </div>
        <div className="form-group">
          <label>
            Address<span className="text-danger">*</span>{" "}
          </label>
          <input
            type="text"
            name="address"
            className="form-control"
            placeholder=" Enter full address"
            onChange={handleChange}
            value={data && data.address}
            required
          />
          {/* <p className='validate_error'> {formik.errors.address ? formik.errors.address : null}</p> */}
        </div>
        <div className="form-group">
          <label>
            Loaction<span className="text-danger">*</span>{" "}
          </label>
          <input
            type="text"
            name="location"
            className="form-control"
            placeholder="New york"
            onChange={handleChange}
            value={data && data.location}
            required
          />
          {/* <p className='validate_error'>{formik.errors.location ? formik.errors.location : null}</p> */}
        </div>
        <div className="form-group">
          <label>
            Phone Number<span className="text-danger">*</span>{" "}
          </label>
          <input
            type="number"
            name="phone"
            className="form-control"
            placeholder="Enter number"
            onChange={handleChange}
            value={data && data.phone}
            required
          />
          {/* <p className='validate_error'>{formik.errors.phone ? formik.errors.phone : null}</p> */}
        </div>
        <div className="form-group">
          <label>
            Email<span className="text-danger">*</span>{" "}
          </label>
          <input
            type="email"
            name="email"
            className="form-control"
            placeholder="Enter email"
            onChange={handleChange}
            value={data && data.email}
            required
          />
          {/* <p className='validate_error'>{formik.errors.email ? formik.errors.email : null}</p> */}
        </div>
        <div className="form-group">
          <label>
            Password<span className="text-danger">*</span>{" "}
          </label>
          <input
            type="password"
            name="password"
            className="form-control"
            placeholder="************"
            onChange={handleChange}
            value={data && data.password}
            required
          />
          {/* <p className='validate_error'>{formik.errors.password ? formik.errors.password : null}</p> */}
        </div>
        <div className="form-group">
          <label>
            Confirm Password<span className="text-danger">*</span>{" "}
          </label>
          <input
            type="password"
            name="confirmPassword"
            className="form-control"
            placeholder="************"
            onChange={handleChange}
            value={data && data.confirmPassword}
            required
          />
          {/* <p className='validate_error'> {formik.errors.confirmPassword ? formik.errors.confirmPassword : null}</p> */}
        </div>

        <div className="form-group">
          <label>
            GST <span className="text-danger">*</span>{" "}
          </label>
          <input
            type="file"
            name="gstNumber"
            className="form-control"
            placeholder="GST file upload"
            onChange={handleFileChange}
            // value={data && data.gstNumber}
            required
          />
          {/* <p className='validate_error'> {formik.errors.confirmPassword ? formik.errors.confirmPassword : null}</p> */}
        </div>

        <div className="form-group">
          <label>
            Business Licence <span className="text-danger">*</span>{" "}
          </label>
          <input
            type="file"
            name="businessLicence"
            className="form-control"
            placeholder="businessLicence file upload"
            onChange={handleFileChange}
            // value={data && data.businessLicence}
            required
          />
          {/* <p className='validate_error'> {formik.errors.confirmPassword ? formik.errors.confirmPassword : null}</p> */}
        </div>

        <div className="form-group">
          <label>
            Company Register <span className="text-danger">*</span>{" "}
          </label>
          <input
            type="file"
            name="companyRegister"
            className="form-control"
            placeholder="companyRegister file upload"
            onChange={handleFileChange}
            // value={data && data.companyRegister}
            required
          />
          {/* <p className='validate_error'> {formik.errors.confirmPassword ? formik.errors.confirmPassword : null}</p> */}
        </div>



        <div id="submit_btn" className="text-center">
          <div id="submit_btn" className="form-group signin11">
            <input disabled={alerts.loading} onChange={handleChange} type="submit" defaultValue="Sign Up" data-toggle="modal" data-target="#successfully" data-dismiss="modal" />
          </div>

        </div>


        <div className="have_account mt-4">
          <p>Already have account? {/* <a href="" > Sign In </a> */}</p>
        </div>
      </form>
    </div>
  )
}

export default Step1