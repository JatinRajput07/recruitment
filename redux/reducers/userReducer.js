import * as constants from '../constants';

const initialState = {
   home: [],
   faqs: [],
   notifications: []
};

export const userReducer  = (state= initialState, action) =>{

    switch (action.type) {
        case constants.SET_HOME_DATA:
            return {
                ...state,
                home : action.payload
            }
            
        //     break;
        case constants.SET_FAQS:
            return {
                ...state,
                faqs : action.payload
            }
            
        case constants.SET_CMS:
            return {
                ...state,
                cms : action.payload
            }

        case constants.SET_NOTIFICATIONS:
            return {
                ...state,
                notifications: action.payload
            }
            
        //     break;
    
        default:
        return state
    }

}