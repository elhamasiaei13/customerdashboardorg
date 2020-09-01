import React, { Component } from 'react'
import { connect } from 'react-redux';
import { withRouter, Redirect } from 'react-router-dom';
import * as actionCreator from '../../store/Action';
import axios from 'axios'
import Axios from 'axios';
import { FormattedMessage } from 'react-intl';
class SearchWaybillNumber extends Component {
    constructor(props) {
        super(props);
        this.state = {
            show: "none",
            waybillNumber: this.props.waybillNumber === " " ? "" : this.props.waybillNumber,
            path: "path",
            redirect: false
        }
        this.handleSubmit = this.handleSubmit.bind(this)
    }

  

    handleSubmit = (e) => {
        const { waybillNumber, path } = this.state
        this.props.history.push("/shipments/view/" + waybillNumber)
        e.preventDefault()
        this.props.set_waybillNumber(waybillNumber)
    }

    render() {
        const { waybillNumber, redirect } = this.state
        // if (redirect) {
        //     return (
        //         <Redirect to={"/shipments/view/" + waybillNumber} />
        //     )
        // }

        return (<span >

            <form onSubmit={this.handleSubmit}  >

                {/* <div className="input-group mb-3 marginSHNSW" > */}
                <div className="input-group mb-3 " >
                    <span
                        style={{ "paddingTop": "5px" }}
                    >
                        <FormattedMessage
                            id={"Shipment"}
                            defaultMessage={"Shipment"} />

                    </span>

                    <input
                        required
                        type="text"
                        className="form-control  input-searchWaybill"
                        placeholder=" شماره بارنامه"
                        value={waybillNumber}
                        onChange={(e) => { this.setState({ waybillNumber: e.target.value }) }}
                        aria-label=""
                        aria-describedby="basic-addon1" />
                    <div className="input-group-append">
                        <button className="btn btn-info"
                            type="submit"
                            // onClick={(e) => {
                            //     if(waybillNumber!="")
                            //     {this.setState({ redirect: true },
                            //         ()=> this.handleSubmit(e))}

                            // }}
                            >
                            <i className="ti-search">
                            </i></button>
                    </div>
                </div>



            </form>
        </span>
        )
    }
}

const mapDispachToProps = (dispach) => {
    return {
        data_tracking: (value) => { dispach(actionCreator.SET_DATA_TRACKING(value)) },
        set_waybillNumber: (value) => { dispach(actionCreator.SET_WAYBILLNUMBER(value)) },
    }
}

export default withRouter(connect(null, mapDispachToProps)(SearchWaybillNumber));
