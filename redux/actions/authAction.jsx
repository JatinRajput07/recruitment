import axios from "axios";
import * as constants from '../constants'
import { get, post, put } from "../../helpers/apiHelper";
import { setFailed, setModal, setSuccess, clearAlerts, showSuccessAlert, showErrorAlert } from "../actions/alertsActions"


export const user_register = (data, router) => async (dispatch) => {
    try {
        dispatch(clearAlerts())
        const res = await post(`/api/v1/user/Create`, data)
        if (res.status == true) {
            dispatch(registerSuccess(res.data))
            dispatch(setSuccess('Signup SuccessFull'));
            router.push('/success');
            setTimeout(() => {
                dispatch(clearAlerts())
            }, 1000);
        }
    } catch (err) {
        dispatch(setFailed(err.response.data.message))
    }
}

export const login = (data, router) => async (dispatch) => {
    try {
        dispatch(clearAlerts())
        const res = await post(`/api/v1/admin/login`, data)
        if (res.status == true) {
            sessionStorage.setItem('user', JSON.stringify(res.data))
            sessionStorage.setItem('authToken', res.data.token)
            dispatch(loginSuccess(res.data))
            dispatch(setSuccess('Login Successfull'));
            sessionStorage.setItem('isAuthenticated', true)
            router.push('/');
            setTimeout(() => {
                dispatch(clearAlerts())
            }, 1000);
        }
    } catch (err) {
        dispatch(setFailed(err.response.data.message))
        setTimeout(() => {
            dispatch(clearAlerts())
        }, 1000);
    }
}

export const getCurrentUser = () => async (dispatch) => {
    try {
        let res = await get('/api/v1/admin/me');
        console.log(res)
        if (res.status == true) {
            sessionStorage.setItem("user", JSON.stringify(res.data));
            dispatch(setUser(res.data))
            dispatch(setUserDetail({name: res.data.full_name, image: res.data.image}))
        }
    } catch (err) {
        console.log(err)
        console.log(err.response)
        dispatch(setFailed(err.response.data.msg))

    }

}





export const changePassword = (data, router, setModalType) => async (dispatch) => {

    // console.log
    try {

        dispatch(clearAlerts())
        data.name = data.firstName + " " + data.lastName

        const res = await post(`/api/change_password`, data)
        if (res.success) {
            // dispatch(registerSuccess(res.body))
            dispatch(setSuccess(res.msg));

            setModalType(0);
            setTimeout(() => {
                dispatch(clearAlerts())
            }, 1000);

        }



    } catch (err) {
        console.log(err)
        console.log(err.response)
        dispatch(setFailed(err.response.data.msg))
    }

}



const registerFailed = (payload) => ({
    type: constants.REGISTER_FAILED,
    payload
})

export const setUser = (payload) => ({
    type: constants.SET_USER,
    payload
})

const registerSuccess = (payload) => ({
    type: constants.REGISTER_SUCCESS,
    payload
})

const registerStart = (payload) => ({
    type: constants.REGISTER_START,
    payload
})

export const setUserDetail = (payload) => ({
    type: constants.SET_USER_DETAIL,
    payload
})


const loginSuccess = (payload) => ({
    type: constants.LOGIN_SUCCESS,
    payload
})


export const handleLogout = (router) => async (dispatch) => {
    dispatch(setSuccess('Logout Success!'))
    sessionStorage.clear()
    dispatch(logout());
    router.push('/admin/login')
    dispatch(clearAlerts())
}

const logout = (payload) => ({
    type: constants.LOGOUT,
    payload
})

const authenticate = () => ({
    type: constants.AUTHENTICATE
})

