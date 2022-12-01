
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../../../../redux/actions/authAction';
import { useState } from 'react';
import { useRouter } from 'next/router';


const Login = ({setModalType}) => {

    const dispatch = useDispatch()

    const {alerts, auth } = useSelector((state => state));
  
    const [data, setData] = useState({
      role: 2
    });
    const router = useRouter();

    

    const handleChange = (e)=>{
        setData(()=>{
          return {
            ...data, 
            [e.target.name] : e.target.value
          }
        })
    }
  
    const handleSubmit = (e)=>{
       e.preventDefault();
       dispatch(login(data,router,setModalType));
    }
  

    return (
        <div className="login_from">
        <form id="login_form" className="form" onSubmit={handleSubmit}>
            <h3 className="text-center">Welcome to EDGE</h3>
            <h4 className="text-center">Provider Sign In</h4>
            <div className="form-group">
                <label>Email<span className="text-danger">*</span> </label>
                <input
                      type="email"
                      placeholder="Enter Email"
                      className="form-control"
                      name="email"
                      value={data && data.email}
                      onChange = {handleChange}
                      required
                    />
            </div>
            <div className="form-group">
                <label>Password<span className="text-danger">*</span> </label>
                <input
                      type="password"
                      placeholder="Enter Password"
                      className="form-control"
                      name="password"
                      value={data && data.password}
                      onChange = {handleChange}
                      required
                    />
            </div>
            {/* <div className="form-group">
                <label className="forgot_password"><a href data-toggle="modal" data-target="#forgot" > Forgot Password?</a> </label><br />
            </div> */}
            <div id="submit_btn" className="text-center">
                {/* <a href="" data-toggle="modal" data-target="#signup_model2">
                  <button disabled={alerts.loading} type="submit"> Submit</button>{" "}
                </a> */}

                <div id="submit_btn" className="form-group signin11">
              <input disabled={alerts.loading} onChange={handleChange} type="submit" defaultValue="Login" data-toggle="modal" data-target="#successfully" data-dismiss="modal" />
                </div>
            
              </div>

            <div className="have_account text-center" >
                <p> <a href=""> Create new account? </a></p>
            </div>
        </form>
    </div>
    )
}

export default Login