/* eslint-disable @next/next/no-img-element */



import { useDispatch, useSelector } from "react-redux"
import Router, { useRouter } from 'next/router'
import { setModal } from "../../../../redux/actions/alertsActions"
import { useFormik } from 'formik';
import * as Yup from 'yup';

import { showErrorAlert } from '../../../../redux/actions/alertsActions'



const Upload_Doc = ({ data, setData }) => {


	const dispatch = useDispatch()

	// const [data, setData] = useState({
	// 	role: 0
	//   })

	const FILE_SIZE = 720 * 1024;
	const SUPPORTED_FORMATS = [
		"image/jpg",
		"image/jpeg",
		"image/gif",
		"image/png"
	];

	const validationSchema = Yup.object().shape({
		passport: Yup.mixed().required("Passport file is required")
			// .test("fileSize", "File too large", value => value && value.size <= FILE_SIZE )
			.test("fileFormat", "Unsupported Format", value => value && SUPPORTED_FORMATS.includes(value.type)),
		qualification: Yup.mixed().required("Qualification file is required"),
		drivingLicence: Yup.mixed().required("DrivingLicence file is required"),
		cv: Yup.mixed().required("CV file is required"),
		dbs: Yup.mixed().required("DBS file is required"),

	});

	const { handleSubmit, handleChange, values, errors } = useFormik({
		initialValues: {
			passport: '',
			qualification: '',
			drivingLicence: '',
			cv: '',
			dbs: ''
		},
		validationSchema,
		onSubmit: d => {
			setData((prev) => ({
				...prev,
				...d
			}))
			console.log(data,"FINAL DATA?????>>>>>>>>>>>>><<<<<<<<<<<<<<")
			dispatch(setModal({
				isOpen: 1,
				type: null,
				step: 4
			}))
		},
	});

	return (
		<>
			<div className="login_from">
				<form id="login_form" className="form" onSubmit={handleSubmit}>
					<h3 className="text-center">Welcome to EDGE</h3>
					<h5 className="text-center"> Upload document</h5>
					<div className="form-group gst up_losd_passport">
						<label>Passport<span className="text-danger">*</span> </label>
						<input
							type="file"
							name="passport"
							className="form-control"
							onChange={handleChange}
							values={values.passport}
							placeholder=" File "
						/>
						<img src="/images/up.png" alt="" />
						<p>{errors.nationalInsurance ? errors.nationalInsurance : null}</p>
					</div>
					<div className="form-group gst up_losd_passport">
						<label>Qualification<span className="text-danger">*</span> </label>
						<input
							type="file"
							name="qualification"
							className="form-control"
							onChange={handleChange}
							values={values.qualification}
							placeholder=" File "
						/>
						<img src="/images/up.png" alt="" />
						<p>{errors.qualification ? errors.qualification : null}</p>
					</div>

					<div className="form-group gst up_losd_passport">
						<label>Driving licence<span className="text-danger">*</span> </label>
						<input
							type="file"
							name="drivingLicence"
							className="form-control"
							onChange={handleChange}
							values={values.drivingLicence}
							placeholder=" Driving licence "
						/>
						<img src="/images/up.png" alt="" />
						<p>{errors.drivingLicence ? errors.drivingLicence : null}</p>
					</div>

					<div className="form-group gst up_losd_passport">
						<label>CV<span className="text-danger">*</span> </label>
						<input
							type="file"
							name="cv"
							className="form-control"
							onChange={handleChange}
							values={values.cv}
							placeholder=" File "
						/>
						<img src="/images/up.png" alt="" />
						<p>{errors.cv ? errors.cv : null}</p>
					</div>

					<div className="form-group gst up_losd_passport">
						<label>DBS<span className="text-danger">*</span> </label>
						<input
							type="file"
							name="dbs"
							className="form-control"
							onChange={handleChange}
							values={values.dbs}
							placeholder=" File "
						/>
						<img src="/images/up.png" alt="" />
						<p>{errors.dbs ? errors.dbs : null}</p>
					</div>


					<div id="submit_btn" className="text-center">
							<button type="Submit">Next</button>
						</div>

					{/* <div id="submit_btn" className="text-center">
						<a href="" onClick={() => dispatch(setModal({
							isOpen: 1,
							type: null,
							step: 4
						}))}  ><button> Creat Account</button> </a>
					</div> */}
				</form>
			</div>
		</>
	)
}

export default Upload_Doc