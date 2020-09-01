import React, { Component } from 'react'
import ShipmentTrackingDetail from './ShipmentTrackingDetail'
import { connect } from 'react-redux';
import Breadcrumb from '../presentational/breadcrumb/Breadcrumb';
import Breadcrumblayout from '../presentational/breadcrumb/Breadcrumblayout';
import ShipmentActionBar from './ShipmentActionBar';
import SearchWaybillNumber from './SearchWaybillNumber';
import ContainerFluid from '../content/ContainerFluid';
import logo from '../../img/shipper.png';
import Row from '../presentational/Row';
import Card from '../presentational/card/Card';
import Col from '../presentational/Col';
import * as actionCreator from '../../store/Action';
import ErrorHandeling from '../container/ErrorHandeling';
import { withRouter, Route, Redirect } from 'react-router-dom';
import Api from '../../config/Api';
import ErrorMessage from '../presentational/ErrorMessage'
import Preloader from '../presentational/Preloader';
import * as ErrorCode from '../../config/ErrorCode'

class ShipmentTracking extends Component {
    constructor(props) {
        super(props);
        this.state = { show: false, data: [], status: 'null', message: null, loading: false }
    }

    componentDidMount(props) {
        this.props.TOGGLE_MESSAGE({ show: false, content: "" })
        this.getItemsShipmentTracking()
    }

    getItemsShipmentTracking() {
        const { waybillNumber, userName, password } = this.props
        if (waybillNumber !== " ") {

            this.setState({ loading: true })
            Api.getShipmentTracking('/shipments/' + waybillNumber, { userName: userName, password: password })
                .then(response => {
                    if (response != undefined) {
                        this.state.data = response
                        this.state.status = "found"
                    }
                    this.state.show = true
                    this.state.loading = false
                    this.setState({})
                }).catch((error) => {
                    this.state.status = "notFound"
                    this.setState({})
                }).finally(() => {
                    this.setState({ loading: false })
                })
        }
    }

    render() {
        const { waybillNumber, userName, password } = this.props
        const { show, data, status, message, loading } = this.state
        return (
            <>
                <Breadcrumblayout
                    // nav={<ShipmentActionBar />}
                    title={
                        <div className="d-flex flex-row comment-row m-t-0 ">
                            <div className="p-2">
                                <img src={logo} alt="(user)" className="rounded-circle" width="50"
                                    className="rounded-circle"
                                />
                            </div>
                            <div className="comment-text w-100 p-t-16">
                                <SearchWaybillNumber waybillNumber={waybillNumber} />
                            </div>
                        </div>

                    }
                />

                {loading && <Preloader />}
                <ContainerFluid >
                    {message ? <ErrorMessage error={message} />
                        : <>
                            {status == "null"
                                ?
                                <Row>
                                    <Col md={12}>
                                    </Col>
                                </Row>
                                : status == "notFound" ?
                                    <Row>
                                        <Col md={12}>
                                            <Card cardBodyclassName=" bg-cyan text-white text-center">
                                                please input correct waybill number
                                                notfound
                                </Card>
                                        </Col>
                                    </Row>
                                    :
                                    <>
                                        <ShipmentTrackingDetail
                                            waybillNumber={waybillNumber}
                                            data={data}
                                            show={this.state.show}
                                            userName={userName}
                                            password={password}
                                        />
                                    </>
                            }
                        </>}

                </ContainerFluid>
            </>
        )
    }
}

const mapStateToProps = (store) => {
    return {
        userName: store.Reducer.userName,
        password: store.Reducer.password
    }
}


const mapDispachToProps = (dispach) => {

    return {
        set_waybillNumber: (value) => { dispach(actionCreator.SET_WAYBILLNUMBER(value)) },
        SET_AUTHENTICATE: (value) => { dispach(actionCreator.SET_AUTHENTICATE(value)) },
        TOGGLE_MESSAGE: (value) => { dispach(actionCreator.TOGGLE_MESSAGE(value)) },

    }
}


export default withRouter(connect(mapStateToProps, mapDispachToProps)(ShipmentTracking));
