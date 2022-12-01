import axios from "axios";
import * as constants from '../constants'
import { get, post, put } from "../../helpers/apiHelper";
import { setFailed, setModal, setSuccess, clearAlerts, showSuccessAlert, showErrorAlert } from "../actions/alertsActions"

export const register = (data, router) => async (dispatch) => {
    try {
        const res = await post(`/api/v1/provider/signup`, data)
        dispatch(clearAlerts())
        if (res.status == 'success') {
            console.log('success')
            dispatch(registerSuccess(res.data))
            dispatch(setSuccess('Signup successfull'));
            // dispatch(setUserDetail({name: res.body.name, image: res.body.image.original }))
            sessionStorage.setItem('user', JSON.stringify(res.data))
            sessionStorage.setItem('authToken', res.token)
            sessionStorage.setItem('isAuthenticated', true)
            
            router.push('/');
            dispatch(setModal({
                isOpen: 0,
                type: 2
            }))
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

export const user_register = (data, router) => async (dispatch) => {
    try {
        dispatch(clearAlerts())
        const res = await post(`/api/v1/user/Create`, data)
        
        console.log(res,'============')

        if (res.status == true) {
            dispatch(registerSuccess(res.data))
            dispatch(setSuccess('Signup SuccessFull'));
            // dispatch(setUserDetail({name: res.body.name, image: res.body.image.original }))
            // sessionStorage.setItem('user', JSON.stringify(res.data))
            // sessionStorage.setItem('authToken', res.token)
            // sessionStorage.setItem('isAuthenticated', true)
            router.push('/success');
            setTimeout(() => {
                dispatch(clearAlerts())
            }, 1000);
        }
    } catch (err) {
        console.log(err,'=====>>>====>>>=--')
        dispatch(setFailed(err.response.data.message))
    }
}

export const login = (data, router) => async (dispatch) => {
    try {
        dispatch(clearAlerts())
        const res = await post(`/api/v1/admin/login`, data)
        if (res.status == 'success') {
            sessionStorage.setItem('user', JSON.stringify(res.data))
            sessionStorage.setItem('authToken', res.token)
            dispatch(loginSuccess(res.data))
            dispatch(setSuccess('Login Successfull'));
            sessionStorage.setItem('isAuthenticated', true)
            dispatch(setModal({
                isOpen: 0,
                type: 1
            }))
            if(res.data.role == '0'){
                router.push('/user/my_account');
            }else{
                router.push('/');
            }

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
        let res = await get('/api/v1/me');
        console.log(res)
        if (res.status == 'success') {
            // setOk(true);
            sessionStorage.setItem("user", JSON.stringify(res.data));
            dispatch(setUser(res.data))
            // dispatch(setUserDetail({name: res.body.userDetail.name, image: res.body.image, bio: res.body.userDetail.bio, isNotification: res.body.isNotification, phone: res.body.phone, country_code : res.body.country_code}))
        }
    } catch (err) {
        console.log(err)
        console.log(err.response)
        dispatch(setFailed(err.response.data.msg))

    }

}

export const updateBusinessProfile = (data, router, setModalType) => async (dispatch) => {
    // console.log
    try {
        const fd = new FormData();
        console.log(data, '<<<<<<<<<<<data');
        // return
        data.businessImages && data?.businessImages?.forEach(image => fd.append('businessImages', image))

        fd.append('name', data.name)
        fd.append('categoryId', data.categoryId)
        fd.append('countrycode', data.countrycode)
        fd.append('latitude', data.latitude)
        fd.append('location', data.location)
        fd.append('longitude', data.longitude)
        fd.append('password', data.password)
        fd.append('phoneno', data.phoneno)
        fd.append('website', data.website)
        fd.append('country', data.country)


        dispatch(clearAlerts())
        data.name = data.firstName + " " + data.lastName

        const res = await put(`/api/updateBusiness/${data.businessId}`, fd, {
            headers: {
                'content-type': 'multipart/form-data'
            }
        })


        if (res.success) {
            // dispatch(registerSuccess(res.body))
            dispatch(setSuccess(res.msg));
            dispatch(getCurrentUser())

            // dispatch(setUserDetail({name: res.body.userDetail.name, image: res.body.image }))
            // sessionStorage.setItem('user', JSON.stringify(res.body))
            // sessionStorage.setItem('authToken', res.body.token)
            // sessionStorage.setItem('isAuthenticated', true)
            setTimeout(() => {
                dispatch(clearAlerts())
            }, 1000);

        }



    } catch (err) {
        console.log(err)
        console.log("???????", err.response)
        dispatch(setFailed(err.response.data.msg || err.response.data.message))
    }

}

export const verifyOtp = (data, router, setModalType) => async (dispatch) => {

    // console.log
    try {

        dispatch(clearAlerts())
        data.name = data.firstName + " " + data.lastName

        const res = await post(`/api/verify_otp`, data)
        console.log(res, 'res<<<<<<<<<<<<<<')
        if (res.success) {
            // dispatch(registerSuccess(res.body))
            // if(data.role == 2){
            dispatch(setSuccess(res.msg));
            //     dispatch(showSuccessAlert('Otp verified. Please wait for admin Approval before login!'));
            //     router.push('/');
            //     return
            // }
            sessionStorage.setItem('isAuthenticated', true)
            router.push('/');
            dispatch(authenticate())
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

export const forgotPassword = (data, router, setModalType) => async (dispatch) => {

    // console.log
    try {

        dispatch(clearAlerts())
        data.name = data.firstName + " " + data.lastName

        const res = await post(`/api/forgot_password`, data)
        console.log(res, 'res<<<<<<<<<<<<<<')
        if (res.success) {
            // dispatch(registerSuccess(res.body))
            dispatch(setSuccess(res.msg));

            router.push('/');
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
    // Cookies.remove()
    dispatch(logout());
    // dispatch(updateSocketObject(null))
    router.push('/')
    dispatch(clearAlerts())


}

const logout = (payload) => ({
    type: constants.LOGOUT,
    payload
})

const authenticate = () => ({
    type: constants.AUTHENTICATE
})

