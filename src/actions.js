import axios from 'axios'
import {SET_DATA, SET_INPUT} from './constants'

export function getData(uname){
    return async function (dispatch){
        const response = await axios.get(`https://api.github.com/users/${uname}`)
        return dispatch({
            type : SET_DATA,
            payload : response.data
        })
    }
}

export function handleChange(e){
    return function(dispatch){
        return dispatch({
            type : SET_INPUT,
            payload : e.target.value
        })
    }
}