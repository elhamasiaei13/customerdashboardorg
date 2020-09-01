import React from 'react'
import { connect } from 'react-redux';
import * as actionCreator from '../../store/Action';
import { useDispatch } from 'react-redux';
import moduleName from '../container/Test1'
import { bindActionCreators } from 'redux';
import { store } from '../../index';
import * as ErrorCode from '../../config/ErrorCode';

const ErrorCatchHandeling = (error, locality = "") => {
    if (error.message !== "Network Error") {
        if (error.response) {
            if (error.response.status >= 400 && error.response.status < 500) {

                if (error.response.status == 401) {

                    store.dispatch(actionCreator.SET_AUTHENTICATE(false))
                    if (locality = "login") {
                        store.dispatch(actionCreator.TOGGLE_MESSAGE({ show: true, content: ErrorCode.API__INVALID_USERNAME_PASSWORD }))
                    }
                } else if (error.response.status == 404) {

                    store.dispatch(actionCreator.TOGGLE_MESSAGE({ show: true, content: ErrorCode.API__OBJECT_NOT_FOUND }))
                } else {

                    store.dispatch(actionCreator.TOGGLE_MESSAGE({ show: true, content: ErrorCode.API__CLIENT_ERROR }))
                }
            } else if (error.response.status == 500) {

                store.dispatch(actionCreator.TOGGLE_MESSAGE({ show: true, content: ErrorCode.API__SERVER_ERROR }))
            } else {
            }
        }

    } else {

        store.dispatch(actionCreator.TOGGLE_MESSAGE({ show: true, content: ErrorCode.NETWORK_ERROR }))
    }
}



export default ErrorCatchHandeling;

// store.dispatch(actionCreator.TOGGLE_MESSAGE({ show: false, content: " " }))

// handleresponse(res, type)
