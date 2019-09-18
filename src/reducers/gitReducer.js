import {SET_DATA, SET_INPUT} from '../constants'

const initialState = {
    input : "",
    data: []
}

export const gitReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_DATA:
            return { ...state, data: action.payload }
        case SET_INPUT:
            return {...state, input : action.payload}
        default:
            return { ...state }

    }
}
