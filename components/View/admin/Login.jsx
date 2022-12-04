import { useDispatch, useSelector } from 'react-redux';
import { login } from '../../../redux/actions/authAction';
import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {

  const dispatch = useDispatch()
  const { alerts, auth } = useSelector((state => state));
  useEffect(() => {
    alerts.success ? toast.dark(alerts.success) : ''
    alerts.failed ? toast.error(alerts.failed) : ''
}, [alerts])


  const [data, setData] = useState({
    role: 1
  });
  const router = useRouter();


  const validationSchema = Yup.object().shape({
    email: Yup.string().trim().email("Invalid email address").required("Please enter your email address"),
    password: Yup.string().min(6, 'Password must be at least 6 characters').required('Password is required'),
  });

  const formOptions = { resolver: yupResolver(validationSchema) };

  const { register, handleSubmit, reset, formState } = useForm(formOptions);
  const { errors } = formState;

  function onSubmit(e) {
    console.log(e, '============>>>')
    dispatch(login({...e,role:1}, router))
  }


  return (
    <>
    <ToastContainer position="top-right" /> 
      <div className="container">
        <div className="row justify-content-center">

          <div className="col-xl-10 col-lg-12 col-md-9">

            <div className="card o-hidden border-0 shadow-lg my-5">
              <div className="card-body p-0">

                <div className="row">

                  <div className="col-lg-6 m-auto">
                    <div className="p-5">
                      <div className="text-center">
                        <h1 className="h4 text-gray-900 mb-4">Admin Login</h1>
                      </div>
                      <form  onSubmit={handleSubmit(onSubmit)} className="user">

                        <div className="form-group">
                          <input
                            type="email"
                            name='email'
                            className={`form-control form-control-user ${errors.email ? 'is-invalid' : ''}`}
                            {...register('email')}
                            placeholder="e.g example@mail.com"
                          />
                          <div className="invalid-feedback">{errors.email?.message}</div>
                        </div>

                        <div className="form-group">
                          <input
                            type="password"
                            name='password'
                            className={`form-control form-control-user ${errors.password ? 'is-invalid' : ''}`}
                            {...register('password')}
                            placeholder="e.g example@mail.com"
                          />
                          <div className="invalid-feedback">{errors.password?.message}</div>
                        </div>
                        <div className="form-group">
                          <div className="custom-control custom-checkbox small">
                            <input type="checkbox" className="custom-control-input" id="customCheck" />
                            <label className="custom-control-label" htmlFor="customCheck">Remember
                              Me</label>
                          </div>
                        </div>
                        <button disabled={formState.isSubmitting}  type="submit" className="btn btn-primary btn-user btn-block">
                        {formState.isSubmitting && <span className="spinner-border spinner-border-sm mr-1"></span>}Login
                        </button>

                        

                      </form>

                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </>
  )

}


export default Login