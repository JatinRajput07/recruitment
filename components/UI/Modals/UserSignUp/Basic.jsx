import { useDispatch } from "react-redux"
import { setModal, formTabs } from "../../../../redux/actions/alertsActions"
import { yupResolver } from '@hookform/resolvers/yup';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useState } from "react";
import axios from "axios"

/* eslint-disable @next/next/no-img-element */
const Basic = ({ data, setData }) => {


	const validationSchema = Yup.object().shape({
		name: Yup.string().required('name is required'),
		email: Yup.string().trim().email("Invalid email address").required("Please enter your email address"),
		// .matches(/^[aA-zZ\s]+$/, "Only alphabets are allowed for this field "),
		// checkEmail: Yup.boolean(),
		// email: Yup.string()
		// .required('Email is required')
		// .test('Unique Email', 'Email already in use', // <- key, message
		// 	function (value) {
		// 		return new Promise((resolve, reject) => {
		// 			axios.get(`http://localhost:7806/api/user/${value}`)
		// 				.then((res) => {
		// 					resolve(true)
		// 				})
		// 				.catch((error) => {
		// 					if (error.response.data.content === "The email has already been taken.") {
		// 						resolve(false);
		// 					}
		// 				})
		// 		})
		// 	}
		// ),
		address: Yup.string().required('Address is required'),
		password: Yup.string().min(6, 'Password must be at least 6 characters').required('Password is required'),
		occupation: Yup.string().required('Occupation is required'),
		bio: Yup.string().required('Bio is required')
		//   confirmPassword: Yup.string()
		//       .oneOf([Yup.ref('password'), null], 'Passwords must match')
		//       .required('Confirm Password is required'),

	});


	const dispatch = useDispatch();

	// const [tabs, setTabs] = useState(0)

	const { handleSubmit, handleChange, handleBlur, setValues, values, errors } = useFormik({
		initialValues: {
			role: 0,
			name: '',
			email: '',
			address: '',
			password: '',
			occupation: '',
			bio: ''
		},
		validationSchema,
		// validateOnChange: false,
		// validateOnBlur: false,
		onSubmit: d => {
			// d.preventDefault();
			console.log(d, "<>>>>>>>>>>>>>>>>>>>>>>..");
			setData((prev) => ({
				...prev,
				...d
			}))

			// if (d?.password?.length < 6) {
			// 	dispatch(showErrorAlert('Password must be 6 digits long.!'));
			// 	return
			// }

			// return
			// setData((prev) => ({ ...data }))
			dispatch(setModal({
				isOpen: 1,
				type: null,
				step: 2
			}))


			// console.log(JSON.stringify(data, null, 2));
		},
	});

	return (
		<>
			<div className="login_from">
				<form onSubmit={handleSubmit} id="login_form" className="form">
					<h3 className="text-center">Welcome to EDGE</h3>
					<h4 className="text-center">User Sign Up</h4>

					<div className="form-group">
						<label>Name<span className="text-danger">*</span> </label>
						<input
							type="text"
							name="name"
							onChange={handleChange}
							values={values.name}
							className="form-control"
							placeholder=" Full name "
						/>
						<p>{errors.name ? errors.name : null}</p>
					</div>


					<div className="form-group">
						<label>Email<span className="text-danger">*</span> </label>
						<input
							type="email"
							name="email"
							onChange={handleChange}
							// onBlur={(e) => {
							// 	handleBlur(e);
							// 	if (errors.email) {
							// 		setValues({
							// 			...values,
							// 			checkEmail: true,
							// 		})
							// 	}
							// }
							// }
							values={values.email}
							className="form-control"
							placeholder=" Enter Email "
						/>
						<p>{errors.email ? errors.email : null}</p>
					</div>

					<div className="form-group">
						<label>Password<span className="text-danger">*</span> </label>
						<input
							type="password"
							name="password"
							onChange={handleChange}
							values={values.password}
							className="form-control"
							placeholder=" ******** "
						/>
						<p>{errors.password ? errors.password : null}</p>
					</div>


					<div className="form-group">
						<label>Address<span className="text-danger">*</span> </label>
						<input
							type="text"
							name="address"
							onChange={handleChange}
							values={values.address}
							className="form-control"
							placeholder=" Enter full address"
						/>
						<p>{errors.address ? errors.address : null}</p>
					</div>


					<div className="form-group">
						<label>Occupation<span className="text-danger">*</span> </label>
						<input
							type="text"
							name="occupation"
							className="form-control"
							onChange={handleChange}
							values={values.occupation}
							placeholder="Enter Occupation"
						/>
						<p>{errors.occupation ? errors.occupation : null}</p>
					</div>


					<div className="form-group">
						<label>How You Heard About Us<span className="text-danger">*</span> </label>
						<textarea
							type="text"
							name="bio"
							onChange={handleChange}
							values={values.bio}
							className="form-control"
							placeholder="Bio"
							cols="30"
							rows="6">
						</textarea>
						<p>{errors.bio ? errors.bio : null}</p>
					</div>

					<div id="submit_btn" className="text-center">
						<button type="Submit">Next</button>
					</div>

					<div className="have_account mt-4">
						<p>Already have account?
						</p>
					</div>
				</form>
			</div>
		</>
	)
}

export default Basic