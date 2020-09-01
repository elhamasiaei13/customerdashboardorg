import axios from 'axios';
import { connect } from "react-redux";
import {BASE_URL } from './constants'
import * as actionCreator from '../store/Action';
import ErrorHandeling from '../componenets/container/ErrorHandeling'
import ErrorCatchHandeling from '../componenets/container/ErrorCatchHandeling';
import { store } from '../index';

class Api {
        static token() {
            if (localStorage.getItem('customer_fe_token')) { return JSON.parse(localStorage.getItem('customer_fe_token')) }
            else { return null; }
        }

        static set_header() {
            const header = {
                'Content-Type': 'application/json',
                "Authorization": "Bearer " + this.token()
            }
            return (header)
        }

        static get(uri, auth = { userName: '', password: '' }) {
            const encoded= encodeURI(BASE_URL + uri)
            return axios.get(encoded, {
                params: {},
                auth: { username: auth.userName, password: auth.password }
            })
        }
    

        // static get(uri, auth = { userName: '', password: '' }) {
        //     const encoded = encodeURI(BASE_URL + uri, { headers: this.set_header() })
        //     store.dispatch(actionCreator.TOGGLE_PRELOADER(true))
        //     return axios.get(encoded)
        //         .then((response) => {
        //             return ErrorHandeling(response, "shipments")
        //         })
        //         .catch((error) => {
        //             ErrorCatchHandeling(error)
        //         })
        // }

        // static get(uri, type) {
        //     return axios.get(BASE_URL + uri, { headers: this.set_header() })
        //         .then(response => { return ErrorHandeling(response, "shipments") })
        //         .catch(error => { ErrorCatchHandeling(error) });
        // }


        static getShipments(uri,auth = { userName: '', password: '' }) {

            const encoded= encodeURI(BASE_URL + uri)
            return axios.get(encoded, {
                params: {},
                auth: { username: auth.userName, password: auth.password }
            }).then((response) => {
                return ErrorHandeling(response, "shipments")
            })
            .catch((error) => {
                ErrorCatchHandeling(error)
            })
            // const encoded = encodeURI(BASE_URL + uri)
            // return axios.get(encoded, { headers: this.set_header()})
            //     .then((response) => {
            //         return ErrorHandeling(response, "shipments")
            //     })
            //     .catch((error) => {
            //         ErrorCatchHandeling(error)
            //     })

        }


        static getShipmentTracking(uri,auth = { userName: '', password: '' }) {
            const encoded = encodeURI(BASE_URL + uri)
            return axios.get(encoded, {
                params: {},
                auth: { username: auth.userName, password: auth.password }
            })
                .then((response) => {
                    return ErrorHandeling(response, "shipmentTracking")
                })
                .catch((error) => {
                    ErrorCatchHandeling(error)
                })
        }

        // static getShipmentTracking(uri,auth = { userName: '', password: '' }) {
        //     const encoded = encodeURI(BASE_URL + uri)
        //     return axios.get(encoded, {
        //         headers: this.set_header()
        //     })
        //         .then((response) => {
        //             return ErrorHandeling(response, "shipmentTracking")
        //         })
        //         .catch((error) => {
        //             ErrorCatchHandeling(error)
        //         })
        // }

        static getCod(uri, auth = { userName: '', password: '' }) {
            const encoded = encodeURI(BASE_URL + uri)
            return axios.get(encoded,{
                params: {},
                auth: { username: auth.userName, password: auth.password }
            })
                .then((response) => {
                    return ErrorHandeling(response, "Cod")
                })
                .catch((error) => {
                    ErrorCatchHandeling(error)
                })
        }
        // static getCod(uri, auth = { userName: '', password: '' }) {
        //     const encoded = encodeURI(BASE_URL + uri)
        //     return axios.get(encoded, {
        //         headers: this.set_header()
        //     })
        //         .then((response) => {
        //             return ErrorHandeling(response, "Cod")
        //         })
        //         .catch((error) => {
        //             ErrorCatchHandeling(error)
        //         })
        // }

        static getImage(uri, auth = { userName: '', password: '' }) {
            return axios.get(BASE_URL + uri,
                {
                    auth: { username: auth.userName, password: auth.password },
                    responseType: 'arraybuffer'
                })
        }
        

        static getDownloadCsv(params, auth = { userName: '', password: '' }) {
            const encoded = encodeURI(BASE_URL + '/shipments/export/csv?' + params)
            return (axios.get(encoded, {
                auth: { username: auth.userName, password: auth.password }, 
                responseType: 'blob',
            }).then((response) => {
                return(response)
               
            })
                .catch((error) => {
                    console.log('error :>> ', error);
                }))
        }
        
    

        static getWorld = async () => {
            // return await axios.get(this.baseUrl + "custom/world-continents.geo.json");
            return await axios.get("https://code.highcharts.com/mapdata/countries/ir/ir-all.geo.json");
            // custom/world-continents.js
            // custom/world-continents.geo.json
            // custom/ir-all.geo.json
            // "custom/ir-all.geo.json"
     };
}

export default (Api);

