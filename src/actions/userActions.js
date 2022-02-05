import {SEARCH_USERS, SET_LOADING, CLEAR_USERS, GET_ERROR, SET_ALERT, REMOVE_ALERT, GET_USER, GET_REPOS} from './types';
import axios from 'axios';


export const searchUsers = text => async dispatch => {
    setLoading();
    try {
        const response = await axios.get(`https://api.github.com/search/users?q=${text}`);
        const data = await response.data.items;
        console.log(data);
        dispatch({
            type: SEARCH_USERS,
            payload: data
        })
    }
    catch (e) {
        dispatch({
            type: GET_ERROR, 
            payload: e
        })
    }
}

export const setLoading = () => {
    return {
        type: SET_LOADING
    }
}

export const clearUsers = () => {
    return {
        type: CLEAR_USERS
    }
}

export const setAlert = (msg, type) => {
    return {
        type: SET_ALERT,
        payload: {msg, type}
    }
}

export const removeAlert = () => {
    return {
        type: REMOVE_ALERT
    }
}

export const getUser = username => async dispatch => {
    try {
        setLoading();
        const response = await axios.get(`https://api.github.com/users/${username}`);
        const data = await response.data;
        dispatch({
            type: GET_USER,
            payload: data
        })
    }
    catch (e) {
        dispatch({
            type: GET_ERROR,
            payload: e
        })
    }
}

export const getRepos = username => async dispatch => {
    try {
        setLoading();
        const response = await axios.get(`https://api.github.com/users/${username}/repos?per_page=5&sort=created:asc`);
        const data = response.data;
        dispatch({
            type: GET_REPOS,
            payload: data
        })
    }
    catch (e) {
        dispatch({
            type: GET_ERROR,
            payload: e
        })
    }
}