import { useDispatch, useSelector } from "react-redux"
import Router, { useRouter } from 'next/router'
import { setModal } from "../../../../redux/actions/alertsActions"
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { user_register } from "../../../../redux/actions/authAction";
import { showErrorAlert } from '../../../../redux/actions/alertsActions'

/* eslint-disable @next/next/no-img-element */
const Complate_SignUp = ({ data, setData }) => {


	const router = useRouter();
	const { auth, alerts } = useSelector((state => state))
	const dispatch = useDispatch()

	const validationSchema = Yup.object().shape({
		nation_id_card: Yup.mixed().required("National ID Card file is required"),
		any_other: Yup.mixed().required("Company Registration Document file is required"),
	});

	const { handleSubmit, handleChange, values, errors } = useFormik({
		initialValues: {
			nation_id_card: '',
			any_other: '',
		},
		validationSchema,
		onSubmit: d => {
			
			setData((prev) => ({
				...prev,
				...d
			}))
			// console.log(d, "<>>>>>>>>>>>>>>>>>>>>>>..")
			// console.log(data, "<>>>>>>>>>>>>>>>>>>>>>>..")

			dispatch(user_register({...data,...d}, router))
			dispatch(setModal({
				isOpen: 0,
				type: null,
				step: null
			}))
		},
	});

	return (
		<>
			<div className="login_from">
				<form id="login_form" onSubmit={handleSubmit} className="form">
					<h3 className="text-center">Welcome to EDGE</h3>
					<h5 className="text-center"> Please uplaod the legal document for the verification</h5>

					<div className="form-group gst">
						<label>National ID Card<span className="text-danger">*</span> </label>
						<input
							type="file"
							name="nation_id_card"
							className="form-control"
							onChange={handleChange}
							values={values.nation_id_card}
							placeholder="National ID Card Upload"
						/>
						<img src="/images/upld.png" alt="" />
						<p>{errors.nation_id_card ? errors.nation_id_card : null}</p>
					</div>
					<div className="form-group gst">
						<label>Any Other <span className="text-danger">*</span> </label>
						<input
							type="file"
							name="any_other"
							className="form-control"
							onChange={handleChange}
							values={values.any_other}
							placeholder="Company Registration Document"
						/>
						<img src="/images/upld.png" alt="" />
						<p>{errors.any_other ? errors.any_other : null}</p>
					</div>

					<div id="submit_btn" className="text-center">
						<button type="Submit">Creat Account</button>
					</div>

				</form>
			</div>
		</>
	)
}

export default Complate_SignUp