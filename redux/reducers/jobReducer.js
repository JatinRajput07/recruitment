import * as constants from '../constants';

const initialState = {
    loading: false,
    posts: [],
    failed: '',
    jobs: [],
    myjobs:[]
};

export const jobReducer = (state = initialState, action) => {
    switch (action.type) {
        case constants.GET_OCCUPATIONS_SUCCESS:
            return {
                ...state,
                loading: false,
                posts: action.payload
            }

        case constants.GET_JOBS_SUCCESS:
            return {
                ...state,
                loading: false,
                jobs: action.payload
            }

        case constants.GET_MY_JOBS_SUCCESS:
            return{
                ...state,
                loading: false,
                myjobs:action.payload
            }

        default:
            return state
    }
}