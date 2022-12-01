import * as constants from '../constants'
import axios from 'axios'
import { del, get, post, put } from '../../helpers/apiHelper';
import { clearAlerts, setFailed, setLoading, setSuccess, showErrorAlert, showSuccessAlert } from './alertsActions'

export const getOccupations = () => async(dispatch) => {
    try {
        let res = await get(`../api/v1/occupation`)
        if(res.status == 'success'){
            dispatch(setOccupations(res.data))
        }
    } catch (err) {
        console.log(err)
    }
}

const getOccupationsStart = (payload) => ({
    type: constants.GET_OCCUPATIONS_START,
    payload
})

const setOccupations = (payload) => ({
    type: constants.GET_OCCUPATIONS_SUCCESS,                    
    payload
})

const getOccupationsFailed = (payload) => ({
    type: constants.GET_OCCUPATIONS__FAILED,
    payload
})






/*
|-----------------------------------------------------------------------------------
|                           PROVIDER JOBS
|-----------------------------------------------------------------------------------
*/

export const get_my_job = () => async(dispatch) => {
    try {
        const res = await get(`/api/v1/provider/get_my_jobs`)
        if(res.status == 'success'){
            console.log(res,'=======My Jobs Response======');
            dispatch(setMyJobList(res.data))
        }
    } catch (err) {
        console.log(err)
        dispatch(setFailed(err.response.data.msg))
    }
}


const getMyJobListStart = (payload) => ({
    type: constants.GET_MY_JOBS_START,
    payload
})

const setMyJobList = (payload) => ({
    type: constants.GET_MY_JOBS_SUCCESS,                    
    payload
})

const getMyJobListFailed = (payload) => ({
    type: constants.GET_MY_JOB_FAILED,
    payload
})


/*
|-----------------------------------------------------------------------------------
|                           USER JOBS
|-----------------------------------------------------------------------------------
*/


export const getJobs = () => async(dispatch) => {
    try {
        let res = await get(`../api/v1/get_jobs`)
        if(res.status == 'success'){
            dispatch(setJob(res.data))
        }
    } catch (err) {
        console.log(err)
    }
}

const getJobStart = (payload) => ({
    type: constants.GET_JOBS_START,
    payload
})


const setJob = (payload) => ({
    type: constants.GET_JOBS_SUCCESS,                    
    payload
})

const getJobFailed = (payload) => ({
    type: constants.GET_JOBS_FAILED,
    payload
})


const setNotifications = (payload)=> ({
    type : constants.SET_OCCUPATIONS,
    payload
})


