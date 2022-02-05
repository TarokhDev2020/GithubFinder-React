import {SEARCH_USERS, SET_LOADING, CLEAR_USERS, GET_ERROR, SET_ALERT, REMOVE_ALERT, GET_USER, GET_REPOS} from '../actions/types';

const defaultState = {
    users: null,
    _user: {},
    repos: [],
    loading: false,
    error: null,
    alert: null
}

export default (state = defaultState, action) => {
    switch (action.type) {

        case SET_LOADING:
            return {
                ...state,
                loading: true,
            }

        case GET_ERROR:
            return {
                ...state,
                error: action.payload
            }

        case SEARCH_USERS:
            return {
                ...state,
                users: action.payload,
                loading: false,
            } 
            
        case CLEAR_USERS:
            return {
                ...state,
                users: null,
                loading: false
            }  
            
        case SET_ALERT:
            return {
                ...state,
                alert: action.payload
            }
            
        case REMOVE_ALERT:
            return {
                ...state,
                alert: null
            } 
            
        case GET_USER:
            return {
                ...state,
                _user: action.payload,
                loading: false
            }
            
        case GET_REPOS:
            return {
                ...state,
                repos: action.payload,
                loading: false
            }    

        default:
            return state
    }
}