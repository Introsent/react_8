import {applyMiddleware, createStore} from "redux";
import {commentsReducer} from "./commentsReducer/commentsReducer";
import thunk from "redux-thunk";

export const store = createStore(commentsReducer, applyMiddleware(thunk));