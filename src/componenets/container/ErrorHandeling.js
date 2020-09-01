import React from 'react'
import { connect } from 'react-redux';
import * as actionCreator from '../../store/Action';
import { useDispatch } from 'react-redux';
import moduleName from '../container/Test1'
import { bindActionCreators } from 'redux';
import { store } from '../../index';
import * as ErrorCode from '../../config/ErrorCode';

const handleresponse = (res, type) => {}
    

const ErrorHandeling = (res, type = "") => {

    switch (type) {
        case "shipments":
            {
                const response = res.data
                if (response.data) {

                    if (response.data.elements) {

                        return (response.data)

                    } else {
                        store.dispatch(actionCreator.TOGGLE_MESSAGE({ show: true, content: ErrorCode.API__INVALID_DATA_FORMAT }))
                    }
                } else {
                    store.dispatch(actionCreator.TOGGLE_MESSAGE({ show: true, content: ErrorCode.API__INVALID_DATA_FORMAT }))
                }
            }
            break;

        case "Cod": {
            const response = res.data
            let dataCOD = null
            let msg = null
            if (response.data) {
                return response.data
            } else {
                store.dispatch(actionCreator.TOGGLE_MESSAGE({ show: true, content: ErrorCode.API__INVALID_DATA_FORMAT }))
            }
        }
            break;

        case "shipmentTracking": {
            const response = res.data
            if (response.data) {
                return response.data
            } else {
                store.dispatch(actionCreator.TOGGLE_MESSAGE({ show: true, content: ErrorCode.API__INVALID_DATA_FORMAT }))
            }
        }
            break;

        default:

            return (res.data)
            break;
    }
    
}


export default ErrorHandeling
