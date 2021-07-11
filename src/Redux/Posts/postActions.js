import { FETCH_POST_REQUEST, FETCH_USERS_FAILURE, FETCH_USERS_SUCCESS } from "./postTypes"
import axios from "axios"
import {getPost} from '../../Services/PostService'

export const fetchPostRequest = () => {
    return {
        type: FETCH_POST_REQUEST
    }
}

export const fetchPostSuccess = (posts) => {
    return {
        type: FETCH_USERS_SUCCESS,
        payload: posts
    }
}

export const fetchPostFailure = (error) => {
    return {
        type: FETCH_USERS_FAILURE,
        payload: error
    }
}

export const fetchPosts = (page) => {
    return (dispatch) => {
        dispatch(fetchPostRequest)
        getPost(page)
        .then(response => {
            const post = response.data;
            dispatch(fetchPostSuccess(post))
        })
        .catch(error => {
            const errorMessage = error.message;
            dispatch(fetchPostFailure(errorMessage))
        })
    }
}