import {ERROR_COMMENTS, LOAD_COMMENTS} from "../actionTypes";

export const loadStart = () => (
    {
        type: LOAD_COMMENTS
    }
)

export const errorComments = (error) => (
    {
        type: ERROR_COMMENTS,
        payload: error

    }
)