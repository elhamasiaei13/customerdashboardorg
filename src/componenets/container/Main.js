import React, { Component } from 'react';
import { Route, Redirect, withRouter } from 'react-router-dom';
import Breadcrumb from '../presentational/breadcrumb/Breadcrumb';
import ContainerFluid from '../Layout/content/ContainerFluid';
import Shipper from './Shipper';
import Row from '../presentational/Row';
import LoginForm from './LoginForm';
import ResetPass from './ResetPass';
import DatePickerTest from './DatePickerTest';
import { connect } from 'react-redux';
import ShipmentTracking from './ShipmentTracking';
import Col from '../presentational/Col';
import logo from '../../img/shipper.png';
import { FormattedMessage } from 'react-intl';
import COD from '../container/COD'
import Button from '../presentational/button/Button';
import { Link, Switch } from 'react-router-dom';
import Error404 from '../presentational/Error404'
import Home from './Home'
import ButtonLoader from "../container/ButtonLoader"
class Main extends Component {
    render() {
        const { authentication, waybillNumber, } = this.props
        return (
            <Switch>
                <AuthenticatedRoute
                    path={"/resetPassword"}
                    component={() => {
                        return <>
                            <ResetPass />
                        </>
                    }}
                    authentication={authentication}
                />

                <AuthenticatedRoute
                    path={"/shipments/view/:waybillNumber"}
                    component={() => {
                        return <>
                            <ShipmentTracking
                                waybillNumber={this.props.location.state ? this.props.location.state.waybillNumber : waybillNumber} />
                        </>
                    }}
                    authentication={authentication}
                />

                <AuthenticatedRoute
                    exact path={"/shipments/view"}
                    component={() => {
                        return <>
                            <ShipmentTracking waybillNumber={waybillNumber} />
                        </>
                    }}
                    authentication={authentication}
                />

                <AuthenticatedRoute
                    path={"/shipments/reports/COD"}
                    component={() => {
                        return <>
                            <Breadcrumb
                                nav={<Link
                                    to={{
                                        pathname: "/shipments",
                                        state: false
                                    }}
                                >
                                    <Button
                                        label={
                                            <FormattedMessage
                                                id={"back"}
                                                defaultMessage={"back"}
                                            />
                                        }
                                        buttonclass="btn btn-dark waves-effect waves-light"
                                    />
                                </Link>}
                                title={
                                    <FormattedMessage
                                        id={"ReportCOD"}
                                        defaultMessage={"ReportCOD"}
                                    />
                                }
                            />
                            <ContainerFluid >
                                <COD />
                            </ContainerFluid >
                        </>
                    }}
                    authentication={authentication}
                />
                <AuthenticatedRoute
                    exact path={"/shipments"}
                    component={() => {
                        return (<>
                            <Breadcrumb
                                nav={
                                    <><Link to="shipments/reports/COD">
                                        <Button
                                            label={
                                                <FormattedMessage
                                                    id={"ReportCOD"}
                                                    defaultMessage={"ReportCOD"}
                                                />
                                            }
                                            buttonclass="btn btn-info waves-effect waves-light"
                                        />
                                    </Link>
                                        <ButtonLoader />
                                    </>}
                                title={
                                    <div className="d-flex flex-row comment-row m-t-0 ">
                                        <div className="p-2">
                                            <img src={logo} alt="(user)" className="rounded-circle" width="50"
                                                className="rounded-circle"
                                            />
                                        </div>
                                        <div className="comment-text w-100 p-t-16">
                                            <FormattedMessage
                                                id={"Shipments"}
                                                defaultMessage={"Shipments"} />
                                        </div>
                                    </div>
                                }
                            />
                            <ContainerFluid >
                                <Row>
                                    <Shipper />
                                </Row>
                            </ContainerFluid >
                        </>)
                    }}
                    authentication={authentication}
                />

                <AuthenticatedRoute
                    exact path={"/"}
                    component={() => {
                        return (<>
                            <Breadcrumb
                                nav={<Link to="shipments/reports/COD">
                                    <Button
                                        label={
                                            <FormattedMessage
                                                id={"ReportCOD"}
                                                defaultMessage={"ReportCOD"}
                                            />
                                        }
                                        buttonclass="btn btn-info waves-effect waves-light"
                                    />
                                </Link>}
                                title={
                                    <div className="d-flex flex-row comment-row m-t-0 ">
                                        <div className="p-2">
                                            <img src={logo} alt="(user)" className="rounded-circle" width="50"
                                                // className="nav-searchWaybillNumber" 
                                                className="rounded-circle"
                                            />
                                        </div>
                                        <div className="comment-text w-100 p-t-16">
                                            <FormattedMessage
                                                id={"Shipments"}
                                                defaultMessage={"Shipments"} />
                                        </div>
                                    </div>
                                }
                            />
                            <ContainerFluid >
                                <Row>
                                    <Shipper />
                                </Row>
                            </ContainerFluid>
                        </>)
                    }}
                    authentication={authentication}
                />

                {/* <AuthenticatedRoute
                   exact path={"/"}
                    component={() => {
                        return (<>
                            <Breadcrumb
                                title={<FormattedMessage
                                    id={"home"}
                                    defaultMessage={"home"} />}
                            />
                            <ContainerFluid >
                                <Home />
                            </ContainerFluid>
                        </>)
                    }}
                    
                    authentication={authentication}
                /> */}

                <Route exact path="/login"
                    render={() => {
                        return (
                            <>
                                {authentication ?
                                    <>
                                        {waybillNumber === " " ?
                                            <Redirect to={"/shipments"} />
                                            :
                                            <Redirect
                                                to={{
                                                    pathname: `/shipments/view/${waybillNumber}`,
                                                    state: { waybillNumber: waybillNumber }
                                                }}
                                            // to={"/shipments/view"} 
                                            />
                                        }
                                    </>
                                    :
                                    <ContainerFluid >
                                        {authentication}
                                        <LoginForm
                                        />
                                    </ContainerFluid>
                                }
                            </>
                        )
                    }} />

                <Route
                    render={() => {
                        return (
                            <>
                                <Error404 />
                            </>
                        )
                    }} />

            </Switch>
        )
    }
}

const mapStateToProps = (store) => {
    return {
        waybillNumber: store.Reducer.waybillNumber,
        // redirect: store.Reducer.redirect,
    }
}

const AuthenticatedRoute = ({ component: Component, authentication, ...rest }) => (
    <Route {...rest} render={props => (
        authentication
            ? (
                <Component {...props} />
            ) : (<>
                <Redirect to={{
                    pathname: '/login',
                    state: props.location.pathname
                }} />
            </>)
    )} />
)

export default withRouter(connect(mapStateToProps)(Main))

