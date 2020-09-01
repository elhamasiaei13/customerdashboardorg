import *as Types from './ActionType'

export const SET_AUTHENTICATE = (value) => {
    return {
        type: Types.SET_AUTHENTICATE,
        payload: value
    }
}

export const CHANGE_AUTHENTICATE = (value) => {
    return dispatch => {
        dispatch(SET_AUTHENTICATE(value))
    }
}

export const SET_DATA_TRACKING = (value) => {
    return {
        type: Types.SET_DATA_TRACKING,
        payload: value
    }
}

export const SET_WAYBILLNUMBER = (value) => {
    return {
        type: Types.SET_WAYBILLNUMBER,
        payload: value
    }
}

export const SET_PASSWORD = (value) => {
    return {
        type: Types.SET_PASSWORD,
        payload: value
    }
}

export const SET_USERNAME = (value) => {
    return {
        type: Types.SET_USERNAME,
        payload: value
    }
}

export const SET_SEARCHPARAM = (value) => {
    return {
        type: Types.SET_SEARCHPARAM,
        payload: value
    }
}

export const SET_READYSEARCHPARAM = (value) => {
    return {
        type: Types.SET_READYSEARCHPARAM,
        payload: value
    }
}

export const TOGGLE_MESSAGE = (value) => {
    return {
        type: Types.TOGGLE_MESSAGE,
        payload: value
    }
}

export const TOGGLE_PRELOADER = (value) => {
    return {
        type: Types.TOGGLE_PRELOADER,
        payload: value
    }
}