import * as constants from '../constants';

const initialState = {
    loading: false,
    posts: [],
    failed: '',
    post: '',
    item: null,
    plans: []
};

export const postsReducer = (state = initialState, action) => {

    switch (action.type) {
        case constants.GET_POSTS_START:
            return {
                ...state,
                loading: true,
                posts: []
            }

        case constants.GET_POSTS_SUCCESS:
            return {
                ...state,
                loading: false,
                posts: action.payload
            }

        case constants.GET_POSTS_FAILED:
            return {
                ...state,
                failed: action.payload,
                loading: false,
                posts: []
            }

        case constants.ADD_COMMENT:
            return {
                ...state
            }

        case constants.LIKE_POST:
            return {
                ...state
            }

        case constants.SET_POST:
            return {
                ...state,
               post: action.payload
            }

        case constants.SET_ITEM:
            return {
                ...state,
               item: action.payload
            }

        case constants.SET_PLANS:
            return {
                ...state,
               plans: action.payload
            }


        default:
            return state

    }

}