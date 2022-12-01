import { combineReducers } from "redux";
import { authReducer } from "./authReducer";
import { alertsReducer } from "./alertsReducer";
import { postsReducer } from "./postsReducer";
import { userReducer } from "./userReducer";
import  { jobReducer }  from "./jobReducer";
import socketReducer from "./socketReducer";



const reducers = combineReducers({
    auth : authReducer,
    alerts: alertsReducer,
    posts: postsReducer,
    user: userReducer,
    socket : socketReducer,
    jobs:jobReducer
})

export default reducers