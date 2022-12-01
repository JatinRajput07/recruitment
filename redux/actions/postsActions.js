import axios from 'axios'
import { del, get, post, put } from '../../helpers/apiHelper';
import { clearAlerts, setFailed, setLoading, setSuccess, showErrorAlert, showSuccessAlert } from './alertsActions';
// import { setUserDetail } from './authActions';
import * as constants from '../constants'

export const addNewPost = (data, router, setModalType, userId) => async(dispatch) => {
    try {
            data.type = 2
            console.log(data,"data<<<<<<<<<<<<<");
            // return
        dispatch(setLoading(true))
        const res = await post(`/api/post`,data)
        if(res.success){
            dispatch(getPosts(userId))
            dispatch(setLoading(false))
            setModalType &&  setModalType(0)
            dispatch(setSuccess(res.msg));
            setTimeout(() => {
                dispatch(clearAlerts())
            }, 1000);
            return res
        }
        
    } catch (err) {
        console.log(err)
        dispatch(setLoading(false))
        dispatch(setFailed(err.response.data.msg || err.response.data.message))
    }
}


export const addNewJob = (data, userId) => async(dispatch) => {
    try {
        dispatch(setLoading(true))
        const res = await post(`/api/provider/add_job`,data)
        if(res.success){
            // dispatch(getPosts(userId))
            dispatch(setLoading(false))
            // setModalType &&  setModalType(0)
            dispatch(setSuccess(res.message));
            setTimeout(() => {
                dispatch(clearAlerts())
            }, 1000);
            return res
        }
    } catch (err) {
        console.log(err)
        dispatch(setLoading(false))
        dispatch(setFailed(err.response.data.message || err.response.data.message))
    }

}



export const addMyPost = (data, router, setModalType, userId) => async(dispatch) => {

    try {
        
            data.type = 1

            console.log(data,"data<<<<<<<<<<<<<");
            // return
        
        dispatch(setLoading(true))
        const res = await post(`/api/post`,data)
        if(res.success){
            dispatch(getPosts(userId))
            dispatch(setLoading(false))
            setModalType &&  setModalType(0)
            dispatch(setSuccess(res.msg));
            setTimeout(() => {
                dispatch(clearAlerts())
            }, 1000);

            return res
        }
        
    } catch (err) {
        console.log(err)
        dispatch(setLoading(false))
        dispatch(setFailed(err.response.data.msg || err.response.data.message))
    }

}
export const addPostOurWorks = (data, router, setModalType, userId) => async(dispatch) => {

    try {
        // alert('hi')
            data.type = 3

            console.log(data,"data<<<<<<<<<<<<<");
            // return
        
        dispatch(setLoading(true))
        const res = await post(`/api/post`,data)
        if(res.success){
            dispatch(getPosts(userId))
            dispatch(setLoading(false))
            setModalType &&  setModalType(0)
            dispatch(setSuccess(res.msg));
            setTimeout(() => {
                dispatch(clearAlerts())
            }, 1000);

            return res
        }
        
    } catch (err) {
        console.log(err)
        dispatch(setLoading(false))
        dispatch(setFailed(err.response.data.msg || err.response.data.message))
    }

}

export const startMyFreeTrial = () => async(dispatch) => {

    try {
        
           
        
        dispatch(setLoading(true))
         const res = await get(`/api/startMyFreeTrial`);

         console.log(res,"<<<<<<<<<<<<<<,,ferersres>>>>>>>>>>>>>>>")

            dispatch(setLoading(false))
            dispatch(showSuccessAlert(res.message || res.msg))

          
        
    } catch (err) {
        console.log(err)
        dispatch(setLoading(false))
        dispatch(setFailed(err.response.data.msg || err.response.data.message))
    }

}

export const updatePost = (postId,data, router, setModalType, userId) => async(dispatch) => {

    try {

    
        dispatch(setLoading(true))
        const res = await put(`/api/post/${postId}`,data)
        if(res.success){
            dispatch(getPosts(userId))
            dispatch(setLoading(false))
            setModalType &&  setModalType(0)
            dispatch(setSuccess(res.msg));
            setTimeout(() => {
                dispatch(clearAlerts())
            }, 1000);
        }
        
    } catch (err) {
        console.log(err)
        dispatch(setLoading(false))
        dispatch(setFailed(err.response.data.msg || err.response.data.message))
    }

}

export const getPosts = (userId)=> async(dispatch)=>{

    try {
        // alert(userId)
        dispatch(getPostsStart())
        let res = await get(`../api/myPosts?userId=${userId}`)
        if(res.success){
            dispatch(getPostsSuccess(res.body))
        }

    } catch (err) {
        dispatch(getPostsFailed())
        dispatch(setFailed(err.response.data.message || err.response.data.msg));
        setTimeout(() => {
             dispatch(clearAlerts())
        }, 1000);
    }


}

export const getPlans = ()=> async(dispatch)=>{

    try {
        // alert(userId)
        dispatch(setLoading())
        let res = await get(`../api/getPlans`)
        if(res.success){
            dispatch(setPlans(res.body));
            dispatch(setLoading(false))
        }

    } catch (err) {
        dispatch(showErrorAlert(err.response.data.message || err.response.data.msg))
    }


}

export const deletePost = (postId, userId)=> async(dispatch)=>{

    try {
        // alert(userId)
       
        let res = await del(`../api/post/${postId}`)

        console.log(res,'res<<<<<<<<<<<<<<>>>>>>>>>>>>>>');
        // return
        if(res.success){
            dispatch(setSuccess(res.msg));
            dispatch(getPosts(userId))
        }

        setTimeout(() => {
            dispatch(clearAlerts())
       }, 1000);

    } catch (err) {
   
        dispatch(setFailed(err.response.data.message || err.response.data.msg));
        setTimeout(() => {
             dispatch(clearAlerts())
        }, 1000);
    }


}

export const getSinglePost = (id)=> async(dispatch)=>{

    try {
        dispatch(setLoading(true));
        let res = await get(`../api/post/${id}`)
        console.log(res)
        if(res.success){            
            dispatch(setPost(res.body));
            setTimeout(() => {
                dispatch(clearAlerts())
           }, 1000);
        //     dispatch(setSuccess(''))
        }

    } catch (err) {
       console.log(err)
        dispatch(setFailed(err.response.data.message || err.response.data.msg));
      
    }

}

// export const addComment = (data)=> async(dispatch)=>{

//     try {
//         dispatch(setLoading(true));
//         let res = await post(`../api/post/comment`,data)
//         console.log(res)
//         if(res.success){            
//             // dispatch(setPost(res.body));
//             // console.log
//             dispatch(setSuccess(res.msg))
//             setTimeout(() => {
//                 dispatch(clearAlerts())
//            }, 1000);
      
//         }
//         return res

//     } catch (err) {
//        console.log(err)
//        dispatch(setFailed('Login Required!'));
//        setTimeout(() => {
//         dispatch(clearAlerts())
//        }, 1000);
      
      
//     }

// }

export const boostMyPost = (post, status)=> async(dispatch)=>{

    try {
        dispatch(setLoading(true));
        let res = await put(`../api/boostMyPost/${post.id}/${status}`)
        console.log(res)
        dispatch(showSuccessAlert(res.msg))
        dispatch(getPosts(post.userId));
        dispatch(setItem(null))

    } catch (err) {
       console.log(err)
        dispatch(showErrorAlert(err.response.data.message || err.response.data.msg));
      
    }

}


export const setItem = (payload) => ({
    type : constants.SET_ITEM,
    payload
})

export const addComment= (payload) => ({
    type: constants.ADD_COMMENT,
    payload
})

export const likeUnlikePost= (payload) => ({
    type: constants.LIKE_UNLIKE_POST,
    payload
})

const getPostsStart = (payload) => ({
    type: constants.GET_POSTS_START,
    payload
})


const getPostsFailed = (payload) => ({
    type: constants.GET_POSTS_FAILED,
    payload
})
const getPostsSuccess = (payload) => ({
    type: constants.GET_POSTS_SUCCESS,
    payload
})

const setPost = (payload) => ({
    type: constants.SET_POST,
    payload
})

const setPlans = (payload) => ({
    type: constants.SET_PLANS,
    payload
})

