import React, { Component } from 'react'
import { connect } from 'react-redux';
import * as actionCreator from '../../store/Action';
import {Redirect, withRouter } from 'react-router-dom';

class SearchNav extends Component {
    constructor(props) {
        super(props);
        this.state = {
            show: "none",
            waybillNumber: '',
            redirect: false,
            path: null
        }
        // this.handleSubmit = this.handleSubmit.bind(this)
    }
  

    // handleSubmit = (e) => {
    //     e.preventDefault()
    //     this.setState({ path: this.state.waybillNumber })

    //     this.props.set_waybillNumber(this.state.waybillNumber)
    //     // this.props.DATA_TRACKING("undefined")
    //     this.setState({ redirect: true })
    //     setTimeout(() => {
    //         this.setState({ waybillNumber: '' })
    //     }, 200);

    // }

    render() {

        const { redirect, waybillNumber, path } = this.state
        return (

            <ul className="navbar-nav float-left mr-auto">
                {/* {redirect ? <> <Redirect to={{
                    pathname: "/shipment/" + path,
                }} />
                </> : ''} */}
                <li className="nav-item search-box">
                    <span className="nav-link waves-effect waves-dark"
                    >
                        {/* <form onSubmit={this.handleSubmit}>
                            <input
                                required={true}
                                value={waybillNumber}
                                type="text"
                                placeholder="Search"
                                onChange={(e) => { this.setState({ waybillNumber: e.target.value }) }} />
                            <button type="submit" nClick={() => this.handleSubmit()}>
                            <i className="mdi mdi-magnify font-15 mr-1"></i></button>
                        </form> */}
                    </span>


                </li>
            </ul >
        )
    }
}

const mapStateToProps = (store) => {
    return {
        // waybillNumber: store.Reducer.waybillNumber,

    }
}

const mapDispachToProps = (dispach) => {
    return {
        // DATA_TRACKING: (value) => { dispach(actionCreator.SET_DATA_TRACKING(value)) },
        set_waybillNumber: (value) => { dispach(actionCreator.SET_WAYBILLNUMBER(value)) },

    }
}
export default withRouter(connect(mapStateToProps, mapDispachToProps)(SearchNav));
