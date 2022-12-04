import axios from 'axios'
import { get, post, put } from '../../helpers/apiHelper';
import { clearAlerts, setFailed, setLoading, setSuccess, showSuccessAlert } from './alertsActions';
// import { getCurrentUser, handleLogout, setUserDetail } from './authActions';
import * as constants from '../constants';


export const toggleNotification = (data) => async(dispatch) => {

    try {
        const res = await put(`/api/notificationOnOff`,data)
        if(res.success){
            dispatch(setSuccess(res.msg));           
            setTimeout(() => {
                dispatch(clearAlerts())
            }, 1000);
        }
    } catch (err) {
        console.log(err)
        dispatch(setFailed(err.response.data.msg))
    }

}
export const readNotifications = (data) => async(dispatch) => {
    try {
        const res = await get(`/api/readNotifications`)
        if(res.success){
           dispatch(getNotifications())
        }
    } catch (err) {
        console.log(err)
        dispatch(setFailed(err.response.data.msg))
    }
}

export const getNotifications = () => async(dispatch) => {
    try {

        const res = await get(`/api/getNotifications`);
        if(res.success){
            dispatch(setNotifications(res.body))
        }
        
    } catch (err) {
        console.log(err)
        // dispatch(setFailed(err.response.data.msg))
    }


}

export const getCms = (type) => async(dispatch) => {
    try {
        const res = await get(`/api/cms?type=${type}`)
        console.log(res)
        if(res.success){
        //     // dispatch(setSuccess(res.msg));           
        //     // setTimeout(() => {
        //     //     dispatch(clearAlerts())
        //     // }, 1000);
            dispatch(setCms(res.body))
        }
        
    } catch (err) {
        console.log(err)
        dispatch(setFailed(err.response.data.msg))
    }

}

export const deleteMyAccount = (router) => async(dispatch) => {

    try {

        const res = await get(`/api/deleteMyAccount`)

        console.log(res,"???????????????response");
        dispatch(showSuccessAlert('Account deleted successfully!'))
        dispatch(handleLogout(router))
        
    } catch (err) {
        console.log(err)
        dispatch(setFailed(err.response.data.msg))
    }

}

export const getFaqs = (data) => async(dispatch) => {
    try {
        const res = await get(`/api/v1/faq`)
        console.log(res);
        if(res.status == 'success'){
            dispatch(setFaqs(res.data))
            // dispatch(setSuccess(res.msg));           
            // setTimeout(() => {
            //     dispatch(clearAlerts())
            // }, 1000);
        }
    } catch (err) {
        console.log(err)
        dispatch(setFailed(err.response.data.msg))
    }
}


export const userList = (data) => async(dispatch) => {
    try {
        const res = await get(`/api/v1/admin/userList`)
        console.log(res,'=====userslist====');
        if(res.status == true){
            dispatch(setUserList(res.data))
            // dispatch(setSuccess('Fetch all users Successfull'));           
            setTimeout(() => {
                dispatch(clearAlerts())
            }, 1000);
        }
    } catch (err) {
        console.log(err)
        dispatch(setFailed(err.response.data.msg))
    }
}

export const getUser = (data) => async(dispatch) => {
    try {
        const res = await get(`/api/v1/admin/getUser/${data}`)
        console.log(res,'=====userslist====');
        if(res.status == true){
            dispatch(setUserList(res.data))
            dispatch(setSuccess(res.message));           
            setTimeout(() => {
                dispatch(clearAlerts())
            }, 1000);
        }
    } catch (err) {
        console.log(err)
        dispatch(setFailed(err.response.data.msg && err.response.data.message))
    }
}





export const updateUserProfile = (fd) => async(dispatch) => {
    try {
        console.log('data',data)

        let data = new FormData();
        data.append("name",fd.name)
        data.append("bio",fd.bio)
        data.append("image",fd.image)
        data.append("isEmailVisible",fd.isEmailVisible)
        data.append("facebookLink",fd.facebookLink)
        data.append("instaLink",fd.instaLink)
        data.append("twitterLink",fd.twitterLink)
        data.append("aboutUs",fd.aboutUs)
        fd.phone ? data.append("phone", fd.phone):''
        fd.country_code ? data.append("country_code",fd.country_code):''

        const res = await post(`/api/editProfile`,data,{
            headers: {
                "Content-Type": "multipart/form-data",
              },
        })
        if(res.success){
            dispatch(getCurrentUser())
            dispatch(setSuccess(res.msg));         
            dispatch(setUserDetail({name : res.body.userDetail.name, image: res.body.image, bio: res.body.userDetail.bio, phone: res.body.phone, country_code: res.body.country_code}))  
            setTimeout(() => {
                dispatch(clearAlerts())
            }, 1000);
        }
        
    } catch (err) {
        console.log(err)
        dispatch(setFailed(err.response.data.msg))
    }

}

export const getHome = (id, limit, currentPage, userType, country)=> async(dispatch)=>{

    try {
        dispatch(setLoading(true))
        let res = await get(`api/home?id=${id}&limit=${limit}&currentPage=${currentPage}&userType=${userType}&country=${country}`)
        if(res.success){
            dispatch(setSuccess(''))
            dispatch(setHome(res.body))
        }
        return res.body

    } catch (err) {
        console.log(err)
        dispatch(setFailed(err.response.data.message || err.response.data.msg));
        setTimeout(() => {
             dispatch(clearAlerts())
        }, 1000);
    }


}

const setHome = (payload)=> ({
    type : constants.SET_HOME_DATA,
    payload
})

const setCms = (payload)=> ({
    type : constants.SET_CMS,
    payload
})

const setFaqs = (payload)=> ({
    type : constants.SET_FAQS,
    payload
})

const setNotifications = (payload)=> ({
    type : constants.SET_NOTIFICATIONS,
    payload
})

const setUserList = (payload)=> ({
    type : constants.SET_USER_LIST,
    payload
})