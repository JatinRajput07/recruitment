import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { getCurrentUser } from '../../../redux/actions/authAction';
import { user_register } from '../../../redux/actions/authAction';

const Submit_Form = () => {

    const dispatch = useDispatch();
    const router = useRouter()
    const { auth, user } = useSelector(state => state)



    const validationSchema = Yup.object().shape({
        full_name: Yup.string().required('Full is required'),
        family_name: Yup.string().required('Family name is required'),
        citizenship: Yup.string().required('Citizenship is required'),
        date_birth: Yup.string().required('Date of Birth is required'),
        zip_code: Yup.string().required('Zip Code is required'),
        city: Yup.string().required('City is required'),
        email: Yup.string().trim().email("Invalid email address").required("Please enter your email address"),
        phone: Yup.number().required('Please enter your phone number'),
        country: Yup.string().required('Please enter your Country name'),
        city: Yup.string().required('Please enter your city name'),
        state: Yup.string().required('Please enter your state name'),
        address: Yup.string().required('Address is required'),
    });

    const formOptions = { resolver: yupResolver(validationSchema) };

    //   if (data) {
    //     const { ...defaultValues } = data
    //     formOptions.defaultValues = defaultValues;
    //   }

    // get functions to build form with useForm() hook
    const { register, handleSubmit, reset, formState } = useForm(formOptions);
    const { errors } = formState;

    function onSubmit(e) {
        console.log(e,'============>>>')
        dispatch(user_register(e, router))
    }

    return (
        <>
            <div className="container rounded bg-white mb-5">

                <form action="" onSubmit={handleSubmit(onSubmit)}>
                    <div className="row">
                        <div className="col-md-8 m-auto border rounded">
                            <div className="p-3 py-5">
                                <div className="">
                                    <h2 className="text-center mb-2">Job Application Form</h2>
                                </div>

                                <h6>Personal Detail</h6>
                                <div className="row mt-2">
                                    <div className="col-md-6 form-group">
                                        <label className="labels">Full Name</label>
                                        <input
                                            type="text"
                                            name='full_name'
                                            className={`form-control ${errors.full_name ? 'is-invalid' : ''}`}
                                            {...register('full_name')}
                                            placeholder="Full name"
                                        />
                                        <div className="invalid-feedback">{errors.full_name?.message}</div>
                                    </div>
                                    <div className="col-md-6 form-group">
                                        <label className="labels">Family Name</label>
                                        <input
                                            type="text"
                                            name='family_name'
                                            className={`form-control ${errors.family_name ? 'is-invalid' : ''}`}
                                            {...register('family_name')}
                                            placeholder="e.g john"
                                        />
                                        <div className="invalid-feedback">{errors.family_name?.message}</div>
                                    </div>
                                </div>

                                <div className="row mt-2">
                                    <div className="col-md-6 form-group">
                                        <label className="labels">Email</label>
                                        <input
                                            type="email"
                                            name='email'
                                            className={`form-control ${errors.email ? 'is-invalid' : ''}`}
                                            {...register('email')}
                                            placeholder="e.g example@mail.com"
                                        />
                                        <div className="invalid-feedback">{errors.email?.message}</div>
                                    </div>
                                    <div className="col-md-6 form-group">
                                        <label className="labels">Phone</label>
                                        <input
                                            type="text"
                                            name='phone'
                                            className={`form-control ${errors.phone ? 'is-invalid' : ''}`}
                                            {...register('phone')}
                                            placeholder="e.g 8958-(554)-(788)"
                                        />
                                        <div className="invalid-feedback">{errors.phone?.message}</div>
                                    </div>
                                </div>

                                <div className="row mt-3">
                                    <div className="col-md-12 form-group">
                                        <label className="labels">Address</label>
                                        <textarea
                                            className={`form-control ${errors.address ? 'is-invalid' : ''}`}
                                            name="address"
                                            id=""
                                            cols="30"
                                            rows="4"
                                            {...register('address')}
                                        >

                                        </textarea>
                                        <div className="invalid-feedback">{errors.address?.message}</div>
                                    </div>

                                </div>


                                <div className="row mt-2">
                                    <div className="col-md-6 form-group">
                                        <label className="labels">Citizenship</label>
                                        <input
                                            type="text"
                                            name='citizenship'
                                            className={`form-control ${errors.citizenship ? 'is-invalid' : ''}`}
                                            {...register('citizenship')}
                                            placeholder="e.g indian"
                                        />
                                        <div className="invalid-feedback">{errors.citizenship?.message}</div>
                                    </div>
                                    <div className="col-md-6 form-group">
                                        <label className="labels">Date Of Birth</label>
                                        <input
                                            type="date"
                                            className={`form-control ${errors.date_birth ? 'is-invalid' : ''}`}
                                            {...register('date_birth')}
                                            name='date_birth'
                                            placeholder="Doe"
                                        />
                                        <div className="invalid-feedback">{errors.date_birth?.message}</div>
                                    </div>
                                </div>

                                <div className="row mt-3">
                                    <div className="col-md-6 form-group">
                                        <label className="labels">City</label>
                                        <input
                                            type="text"
                                            name='city'
                                            className={`form-control ${errors.city ? 'is-invalid' : ''}`}
                                            {...register('city')}
                                            placeholder="e.g Jalandhar city"
                                        />
                                        <div className="invalid-feedback">{errors.city?.message}</div>
                                    </div>
                                    <div className="col-md-6 form-group">
                                        <label className="labels">State/Region</label>
                                        <input
                                            type="text"
                                            name='state'
                                            className={`form-control ${errors.state ? 'is-invalid' : ''}`}
                                            {...register('state')}
                                            placeholder=" e.g Punjab"
                                        />
                                        <div className="invalid-feedback">{errors.state?.message}</div>
                                    </div>
                                </div>

                                <div className="row mt-3">
                                    <div className="col-md-6 form-group">
                                        <label className="labels">Country</label>
                                        <input
                                            type="text"
                                            name='country'
                                            className={`form-control ${errors.country ? 'is-invalid' : ''}`}
                                            {...register('country')}
                                            placeholder="e.g India"
                                        />
                                        <div className="invalid-feedback">{errors.country?.message}</div>
                                    </div>
                                    <div className="col-md-6 form-group">
                                        <label className="labels">Zip Code</label>
                                        <input
                                            type="number"
                                            name='zip_code'
                                            className={`form-control ${errors.zip_code ? 'is-invalid' : ''}`}
                                            {...register('zip_code')}
                                            placeholder="e.g 166858"
                                        />
                                        <div className="invalid-feedback">{errors.zip_code?.message}</div>
                                    </div>
                                </div>



                                <div className="mt-5 text-center">
                                    <button disabled={formState.isSubmitting} className="btn btn-primary profile-button" type="submit">
                                        {formState.isSubmitting && <span className="spinner-border spinner-border-sm mr-1"></span>}Submit
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </>
    )
}

export default Submit_Form
