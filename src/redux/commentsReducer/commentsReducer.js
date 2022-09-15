import {ERROR_COMMENTS, GET_COMMENTS, LOAD_COMMENTS} from "../actionTypes";
import {errorComments, loadStart} from "./actions";

const initialState = {
    comments: [],
    loading: false,
    error: null
}

export const commentsReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOAD_COMMENTS:
            return {
                ...state,
                loading: true
            }
        case GET_COMMENTS:
            return {
                ...state,
                comments: action.payload,
                loading: false
            }

        case ERROR_COMMENTS:
            return {
                ...state,
                error: action.payload
            }
        default:
            return state
    }
}

export const getComments = () => {
    return async dispatch => {
        dispatch(loadStart())
        try {
            const response = await fetch('https://jsonplaceholder.typicode.com/comments');
            const data = await response.json();
            dispatch({
                type: GET_COMMENTS,
                payload: data
            })
        } catch(e) {
            dispatch(errorComments(e.toString()));
        }

    }
}