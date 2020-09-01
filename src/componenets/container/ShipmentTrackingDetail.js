import React, { Component } from 'react'
import Card from '../presentational/card/Card'
import Table from '../presentational/table/Table';
import ShipperResultParts from './ShipperResultParts'
import ShipperPayment from './ShipperPayment'
import ShipperCOD from './ShipperCOD'
import ShipperNumbers from './ShipperNumbers'
import Row from '../presentational/Row';
import Col from '../presentational/Col';
import ShipperStatus from '../presentational/timeLine/ShipperStatus';
import ShowImage from '../container/ShowImage';
import ShipperPersonData from './ShipperPersonData'
import * as actionCreator from '../../store/Action'
import { connect } from 'react-redux';
import PersonDataView from './PersonDataView';
import FormData from '../presentational/input/FormData';
import { FormattedMessage } from 'react-intl';
class ShipmentTrackingDetail extends Component {

    constructor(props) {
        super(props);
    }
    componentDidMount() {
        window.scrollTo(0, 0);
    }

    render() {
        const { data, show, waybillNumber, userName, password } = this.props
        return (
            <> {show ?
                <>
                    <Card>
                        <Row>
                            <Col md={12} lg={6}>
                                <Row>
                                    <Col md={12} lg={12}>
                                        <h4 className="card-title text-info m-b-0" >فرستنده</h4>
                                        <hr className="hrCard" />
                                        <PersonDataView data={data.shipper ? data.shipper : false} />
                                    </Col>
                                </Row>

                                <Row>
                                    <Col md={12} lg={12}>
                                        <FormData
                                            label={
                                                <FormattedMessage
                                                    id={"description"}
                                                    defaultMessage={"description"}
                                                />
                                            }
                                            value={data.shipper ? data.shipper.notes ? data.shipper.notes : '' : false}
                                            labelClassName=""
                                            valueClassName=" col-sm-12 col-md-10"

                                        />
                                    </Col>
                                </Row>
                            </Col>

                            <Col md={12} lg={6}>
                                <Row>
                                    <Col md={12} lg={12}>
                                        <h4 className="card-title text-info m-b-0" >گیرنده</h4>
                                        <hr className="hrCard" />
                                        <PersonDataView data={data.consignee ? data.consignee : false} />

                                    </Col>
                                </Row>

                                <Row>
                                    <Col md={12} lg={12}>
                                        {/* <hr /> */}
                                        <FormData
                                            label={
                                                <FormattedMessage
                                                    id={"description"}
                                                    defaultMessage={"description"}
                                                />
                                            }
                                            // value={data.consignee.notes}
                                            value={data.consignee ? data.consignee.notes ? data.consignee.notes : '' : false}
                                            labelClassName=""
                                            valueClassName=" col-sm-12 col-md-10"
                                        />
                                    </Col>
                                </Row>

                            </Col>
                        </Row>
                    </Card>

                    <Row>
                        <Col md={12}  key={"parcels" + Math.random().toString(36).substr(2)}>
                            <Card
                               
                                cardTitle={
                                    <FormattedMessage
                                        id={"parcels"}
                                        defaultMessage={"parcels"}
                                    />
                                }
                                noHr={true}>
                                <Table
                                    classTable=" table-hover"
                                    theader={['partNumber', 'DIMs', 'grossWeight', "volumetricWeight", 'content'
                                        , 'packageType', 'declaredValue']}
                                    tbody={data.parcels}
                                    classHeader={"hiddenTopBorder"}
                                />
                                <ShipperResultParts data={data} />
                            </Card>
                        </Col>
                    </Row>

                    <Row>
                        <Col lg={4} md={6}  key={"ShipperPayment" + Math.random().toString(36).substr(2)} >
                            <Card
                                key={"Shipping" + Math.random().toString(36).substr(2)}

                                cardTitle={
                                    <FormattedMessage
                                        id={"Shipping"}
                                        defaultMessage={"Shipping"}
                                    />
                                }
                            >
                                <ShipperPayment data={data.paymentInfo ? data.paymentInfo : false} />
                            </Card>
                        </Col>

                        <Col lg={4} md={6}  key={"ShipperCOD" + Math.random().toString(36).substr(2)} >
                            <Card
                                cardTitle={
                                    <FormattedMessage
                                        id={"COD"}
                                        defaultMessage={"COD"}
                                    />
                                }
                            >
                                <ShipperCOD data={data.paymentInfo ? data.paymentInfo : false} />
                            </Card>
                        </Col>

                        <Col lg={4} md={6} key={"ShipperNumbers" + Math.random().toString(36).substr(2)}>
                            <Card
                                cardTitle={
                                    <FormattedMessage
                                        id={"ShipperNumbers"}
                                        defaultMessage={"ShipperNumbers"}
                                    />
                                }
                            >
                                <ShipperNumbers data={data} />
                            </Card>
                        </Col>

                    </Row >

                    <Card >
                        <Row>
                            <Col lg={6} md={12} key={"CurrentState" + Math.random().toString(36).substr(2)}>
                                <h4 className="card-title text-info m-b-0" >
                                    <FormattedMessage
                                        id={"CurrentState&status"}
                                        defaultMessage={"CurrentState&status"}
                                    />
                                </h4>
                                <hr className="hrCard" />
                                <ShipperStatus data={data} />
                            </Col>

                            <Col md={12} lg={6}  key={"ShowImage" + Math.random().toString(36).substr(2)}>
                                <h4 className="card-title text-info m-b-0" >
                                    <FormattedMessage
                                        id={"Signatureـofـreceiverـdeliveryـandـotherـimages"}
                                        defaultMessage={"Signatureـofـreceiverـdeliveryـandـotherـimages"}
                                    />
                                </h4>
                                <hr className="hrCard" />
                                <ShowImage
                                    waybillNumber={waybillNumber}
                                    data={data.attachments ? data.attachments : []}
                                    userName={userName}
                                    password={password} />
                            </Col>
                        </Row >
                    </Card>
                </>
                :
                <></>}
            </>)
    }
}

const mapStateToProps = (store) => {
    return {
        // waybillNumber: store.Reducer.waybillNumber
    }
}

const mapDispachToProps = (dispach) => {
    return {
        set_waybillNumber: (value) => { dispach(actionCreator.SET_WAYBILLNUMBER(value)) },
    }
}

export default (connect(mapStateToProps, mapDispachToProps)(ShipmentTrackingDetail));


