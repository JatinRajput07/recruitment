/* eslint-disable @next/next/no-img-element */

import { useState } from "react"
import { useDispatch } from "react-redux"
import { setModal } from "../../../../redux/actions/alertsActions"
import { useFormik } from 'formik';
import * as Yup from 'yup';


const Information = ({ data, setData }) => {

	const dispatch = useDispatch()
	// const [basic,setBasic] = useState(0)

	const validationSchema = Yup.object().shape({
		nationalInsurance: Yup.string().required('National insurance No. is required'),
		phone: Yup.number().required('Please enter your phone number'),
		specificRegister: Yup.string().required('Specific register for job is required, If not applicable write N/A'),
		cardNumber: Yup.number().required('Please Enter Account Number'),
		accountNumber: Yup.number().required(' Please enter your account number '),
		bankName: Yup.string().required('Please enter Bank Name'),
		holderName: Yup.string().required('holderName is required'),
		referenceEmail: Yup.string().trim().email("Invalid email address").required("Please enter your referenceEmail address"),
		referenceEmail2: Yup.string().trim().email("Invalid email address").required("Please enter your referenceEmail2 address"),
		// companyType: Yup.boolean().required().oneOf([0 , 1], 'Selecting the Company Typer field is required'),
	});

	const { handleSubmit, handleChange, values, errors } = useFormik({
		initialValues: {
			nationalInsurance: '',
			phone: '',
			specificRegister: '',
			cardNumber: '',
			accountNumber: '',
			bankName: '',
			branchName: '',
			holderName: '',
			referenceEmail: '',
			referenceEmail2: '',
			companyType :''  // 0 = Solo Traders ,  1 = Limited Company
		},
		validationSchema,
		onSubmit: d => {
	
			setData((prev) => ({
				...prev,
				...d
			}))


			dispatch(setModal({
				isOpen: 1,
				type: null,
				step: 3
			}))
		},
	});
	const handleRadioButtons = e => values.companyType = e.target.values


	return (
		<>
			<div className="login_from">
				<form id="login_form" onSubmit={handleSubmit} className="form">
					<h3 className="text-center">Welcome to EDGE</h3>
					<h5 className="text-center"> Informations</h5>
					
					<div className="row" >
						<div className="col-md-6" >
							<div className="form-group">
								<label>National Insurance<span className="text-danger">*</span> </label>
								<input
									type="text"
									name="nationalInsurance"
									className="form-control"
									onChange={handleChange}
									values={values.nationalInsurance}
									placeholder=" 885465588 "
								/>
								<p>{errors.nationalInsurance ? errors.nationalInsurance : null}</p>
							</div>
						</div>
						<div className="col-md-6" >
							<div className="form-group">
								<label>Phone Number<span className="text-danger">*</span> </label>
								<input
									type="number"
									name="phone"
									className="form-control"
									onChange={handleChange}
									values={values.phone}
									placeholder=" 885465588 "
								/>
								<p>{errors.phone ? errors.phone : null}</p>
							</div>
						</div>
						<div className="col-md-6" >
							<div className="form-group">
								<label>Specific register for job<span className="text-danger">*</span> </label>
								<input
									type="text"
									name="specificRegister"
									className="form-control"
									onChange={handleChange}
									values={values.specificRegister}
									placeholder=" Select a Specific Register  "
								/>
								<p>{errors.specificRegister ? errors.specificRegister : null}</p>
							</div>
						</div>
						<div className="col-md-6" >
							<div className="form-group">
								<label>Smart Card Number<span className="text-danger">*</span> </label>
								<input
									type="number"
									name="cardNumber"
									className="form-control"
									onChange={handleChange}
									values={values.cardNumber}
									placeholder=" Enter "
								/>
								<p>{errors.cardNumber ? errors.cardNumber : null}</p>
							</div>
						</div>
						<div className="col-md-12" >
							<div className="form-group2">
								<p> If not applicable write N/A</p>
								<h4>Bank Details</h4>
							</div>
						</div>
						<div className="col-md-12" >
							<div className="form-group">
								<label>Account Number<span className="text-danger">*</span> </label>
								<input
									type="number"
									name="accountNumber"
									className="form-control"
									onChange={handleChange}
									values={values.accountNumber}
									placeholder=" 882455632000145 "
								/>
								<p>{errors.accountNumber ? errors.accountNumber : null}</p>
							</div>
						</div>
						<div className="col-md-6" >
							<div className="form-group">
								<label>Bank Name<span className="text-danger">*</span> </label>
								<input
									type="text"
									name="bankName"
									className="form-control"
									onChange={handleChange}
									values={values.bankName}
									placeholder=" Yes bank "
								/>
								<p>{errors.bankName ? errors.bankName : null}</p>
							</div>
						</div>
						<div className="col-md-6" >
							<div className="form-group">
								<label>Branch Name<span className="text-danger">*</span> </label>
								<input
									type="text"
									name="branchName"
									className="form-control"
									onChange={handleChange}
									values={values.branchName}
									placeholder=" New york "
								/>
								<p>{errors.branchName ? errors.branchName : null}</p>
							</div>
						</div>
						<div className="col-md-12" >
							<div className="form-group">
								<label>Account Holder Name<span className="text-danger">*</span> </label>
								<input
									type="text"
									name="holderName"
									className="form-control"
									onChange={handleChange}
									values={values.holderName}
									placeholder=" Johan "
								/>
								<p>{errors.holderName ? errors.holderName : null}</p>
							</div>
						</div>
						<div className="col-md-6 " >
							<div className="form-group gst">
								<label>References Email 1<span className="text-danger">*</span> </label>
								<input
									type="email"
									name="referenceEmail"
									className="form-control"
									onChange={handleChange}
									values={values.referenceEmail}
									placeholder=" Enter email "
								/>
								<img src="/images/zip.png" alt="" />
								<p>{errors.referenceEmail ? errors.referenceEmail : null}</p>
							</div>
						</div>
						<div className="col-md-6 " >
							<div className="form-group gst">
								<label>References Email 2<span className="text-danger">*</span> </label>
								<input
									type="email"
									name="referenceEmail2"
									className="form-control"
									onChange={handleChange}
									values={values.referenceEmail2}
									placeholder=" Enter email "
								/>
								<img src="/images/zip.png" alt="" />
								<p>{errors.referenceEmail2 ? errors.referenceEmail2 : null}</p>
							</div>
						</div>



						<div className="col-md-6 radios">
							<div className="custom-control custom-radio custom-control-inline">
								<input
									type="radio"
									id="customRadioInline1"
									name="companyType"
									// onChange={handleChange}
									onChange={e => handleRadioButtons(e)}

									values='0'
									className="custom-control-input"
								/>
								<label className="custom-control-label" htmlFor="customRadioInline1"> <b />Sole Trader <p>{errors.companyType ? errors.companyType : null}</p> <b /> </label>
							</div>
						</div>



						<div className="col-md-6 radios">
							<div className="custom-control custom-radio custom-control-inline">
								<input
									type="radio"
									id="customRadioInline2"
									name="companyType"
									// onChange={handleChange}
									onChange={e => handleRadioButtons(e)}
									values='1'
									className="custom-control-input"
								/>
								<label className="custom-control-label" htmlFor="customRadioInline2"> <b /> Limited Company <p>{errors.companyType ? errors.companyType : null}</p> <b /> </label>
							</div>
						</div>
						
						<div className="col-md-8 mx-auto mt-5" >
							<div id="submit_btn" className="text-center">
								<button type="Submit">Next</button>
							</div>
						</div>
						
					</div>
				</form>
			</div>
		</>
	)
}



export default Information