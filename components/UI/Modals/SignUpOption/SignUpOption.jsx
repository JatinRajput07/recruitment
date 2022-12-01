/* eslint-disable @next/next/no-img-element */
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import { useRouter } from 'next/router';
import { setModal } from '../../../../redux/actions/alertsActions';


const OptionModel = ({ setModelType }) => {
    const dispatch = useDispatch()
    // const { alerts } = useSelector((state => state));
    return (
        <>
            <form id="login_form">
                <h3 className="text-center">Welcome to EDGE</h3>
                <div className="sign_as">

                    <a href="" onClick={() => dispatch(setModal({
                         isOpen: 1,
                         type: null,
                         step:1
                    
                    }))} className="sign_in" data-target="#choose_signup_type" data-toggle="modal">  Sign Up As a User</a>


                    <a href="" onClick={() => dispatch(setModal({
                           isOpen: 1,
                           type: 2
                    }))}

                        data-toggle="modal" data-target="#choose_signup_type" className="sign_in"> Sign Up As a Organization
                    </a>

                </div>
            </form>
        </>
    )
}

export default OptionModel