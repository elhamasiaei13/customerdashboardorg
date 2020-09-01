import React, { Component } from 'react'
import { Link, withRouter } from 'react-router-dom/cjs/react-router-dom.min';
import MenuItem from '../sider/MenuItem';
import { connect } from 'react-redux';
import * as actionCreator from '../../store/Action'
import { FormattedMessage } from 'react-intl';

class Menu extends Component {
    constructor(props) {
        super(props);
        this.state = {
            shipment: false,
            shipmentTracking: false,
            dashboard: false
        }
    }

    componentWillMount() {
        const { waybillNumber, location } = this.props
        switch (location.pathname) {
            case "/shipments":
                this.changeActive("/shipments")
                break;
            case "/shipments/view/" + (location.state?location.state.waybillNumber:""):
                this.changeActive("/shipments/view/")
                break;
            case "/shipments/view/":
                this.changeActive("/shipments/view/")
                break;
            case "/":
                this.changeActive("/shipments")
              break;
            default:
                this.changeActive("")
                break;
        }
    }

    componentWillReceiveProps() {
        const { waybillNumber, history } = this.props
        switch (history.location.pathname) {
            case "/shipments":
                this.changeActive("/shipments")
                break;

            case "/shipments/view/"+ (history.location.state?history.location.state.waybillNumber:""):
                this.changeActive("/shipments/view/")
                break;
            case "/shipments/view/":
                this.changeActive("/shipments/view/")
                break;
            case "/":
                this.changeActive("/")
                break;
            default:
                this.changeActive("")
                break;
        }
    }

    changeActive(arg) {

        if (arg === "/shipments") {
            this.setState({
                shipmentTracking: false,
                dashboard: false
            })
            this.setState({ shipment: true })
        }
        else if (arg === "/shipments/view/") {
            this.setState({
                shipment: false,
                dashboard: false
            })
            this.setState({ shipmentTracking: true })
        }
        else if (arg === "/") {
            this.setState({
                shipment: false,
                shipmentTracking: false
            })
            this.setState({ dashboard: true })
        }
        else {
            this.setState({
                shipment: false,
                shipmentTracking: false,
                dashboard: false
            })
        }
    }

    render() {
        const { shipmentTracking, shipment, dashboard } = this.state
        return (
            <>
                {/* <Link
                    to={{
                        pathname: "/",
                        state: true
                    }}
                    onClick={() => { this.changeActive("/") }}
                >

                    <MenuItem
                        classMenu={dashboard ? "active" : ''}
                        title={
                            <FormattedMessage
                                id={"dashboard"}
                                defaultMessage={"dashboard"}
                            />
                        }
                        icon={"mdi mdi-av-timer"}
                    />
                </Link> */}

                <Link
                    to={{
                        pathname: "/shipments",
                        state: false
                    }}
                    onClick={() => { this.changeActive("/shipments") }}
                >
                    <MenuItem
                        classMenu={shipment ? "active" : ''}
                        title={
                            <FormattedMessage
                                id={"listShipments"}
                                defaultMessage={"listShipments"}
                            />
                        }
                        icon={"mdi mdi-map"}
                    />
                </Link>

                <Link
                    to={{
                        pathname: `/shipments/view/`,
                        state: { waybillNumber: " " }
                    }}
                    onClick={() => {
                        this.changeActive("/shipments/view/")
                        this.props.set_waybillNumber(" ")
                    }}
                >
                    <MenuItem
                        classMenu={shipmentTracking ? "active" : ''}
                        title={
                            <FormattedMessage
                                id={"ShipmentTracking"}
                                defaultMessage={"ShipmentTracking"}
                            />
                        }
                    />
                </Link>
            </>
        )
    }
}

const mapStateToProps = (store) => {
    return {
        waybillNumber: store.Reducer.waybillNumber,
    }
}

const mapDispachToProps = (dispach) => {
    return {
        set_waybillNumber: (value) => { dispach(actionCreator.SET_WAYBILLNUMBER(value)) },
    }
}




export default withRouter(connect(mapStateToProps, mapDispachToProps)(Menu));

