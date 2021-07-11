import { FETCH_POST_REQUEST, FETCH_USERS_FAILURE, FETCH_USERS_SUCCESS } from "./postTypes"

const initialState = {
    loading: false,
    posts: [],
    error: '',
    page: 0
}

const postReducer = (state = initialState, action)  => {
    switch(action.type) {
        case FETCH_POST_REQUEST:
            return {
                ...state,
                loading: true
            }
        case FETCH_USERS_SUCCESS:
            let newPost = state.posts.concat(action.payload)
            return {
                ...state,
                loading: false,
                posts: newPost,
                error: '',
                page: state.page + 1,
            }
        case FETCH_USERS_FAILURE:
            return {
                ...state,
                loading: false,
                posts: [],
                error: action.payload
            }
        default:
            return state
    }
}

export default postReducer;