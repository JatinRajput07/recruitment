import { getLocalUser } from '../../helpers/utils'
import * as constants from '../constants'

const initialState = {
    user: typeof window !== 'undefined' &&  getLocalUser(),
    image: typeof window !== 'undefined' && getLocalUser()?.image ,
    userDetail:{name :  typeof window !== 'undefined' && getLocalUser()?.userDetail?.name, image:  typeof window !== 'undefined' && getLocalUser()?.image},
    // name: typeof window !== 'undefined' && JSON.parse(sessionStorage.getItem("user")) && JSON.parse(sessionStorage.getItem("user")).userDetail?.name ,
    authToken: typeof window !== 'undefined' && sessionStorage.getItem("authToken"),
    isAuthenticated: typeof window !== 'undefined' && sessionStorage.getItem("isAuthenticated"),
    role:typeof window !== 'undefined' &&  getLocalUser()?.role
}

 export const authReducer = (state = initialState,action)=>{
    switch (action.type) {
        
        case constants.REGISTER_START:
            return { 
               ...state,
               error : null,
               loading: true,

            }
        case constants.REGISTER_FAILED :
            return {
                ...state,
                user: '',
                authToken: ''
                // loading: false,
                // error: action.payload,
                // success: null,
            }

        case constants.REGISTER_SUCCESS :
            return {
                ...state,
                user: action.payload,
                authToken: action.payload.token,
                isAuthenticated:true
                // success: action.payload.msg,
            }

        case constants.LOGIN_SUCCESS :
            return {
                ...state,
                user: action.payload,
                name: action.payload.name,
                image: action.payload.image,
                authToken: action.payload.token,
                isAuthenticated: true,
                role:action.payload.role
                // success: action.payload.msg,
            }

        case constants.LOGOUT :
            return {
                ...state,
                user: null,
                authToken: null,
                isAuthenticated  : false,
                userDetail: null
                // success: action.payload.msg,
            }
        case constants.AUTHENTICATE :
            return {
                ...state,
                isAuthenticated  : true
                // success: action.payload.msg,
            }
    
        case constants.SET_USER_DETAIL :
            return {
                ...state,
                userDetail  : action.payload
                // success: action.payload.msg,
            }
        case constants.SET_USER :
            return {
                ...state, 
                user  : action.payload
                // success: action.payload.msg,
            }
    
        default:
            return state
    }

}


