import React, { Component } from 'react'
import Table from '../presentational/table/Table';
import Card from '../presentational/card/Card';
import Api from '../../config/Api';
import FormData from '../presentational/input/FormData';
import Row from '../presentational/Row'
import Col from '../presentational/Col'
import { connect } from 'react-redux';
import * as actionCreator from '../../store/Action'
import Preloader from '../presentational/Preloader';
import ErrorMessage from '../presentational/ErrorMessage'
import * as ErrorCode from '../../config/ErrorCode'
import { FormattedMessage } from 'react-intl';
import { withRouter } from 'react-router-dom';
import ViewDatepicker from '../presentational/input/ViewDatepicker'
import moment from 'moment-jalaali';
import Show from './ShowSearchParam';
class COD extends Component {
    constructor(props) {
        super(props);
        this.state = {
            date: '1398-07-14',
            data: {},
            message: null,
            loading: false,
        }
    }

    getItems() {
        const { userName, password, readySearchParam } = this.props
        this.setState({ loading: true })
        Api.getCod("/shipments/cod?" + readySearchParam, { userName: userName, password: password })
            .then((response) => {
                if (response != undefined) {
                    this.setState({ data: response })
                }
            })
            .finally(() => {
                this.setState({ loading: false })
            })
    }

    componentDidMount() {
        this.isComponentMounted = true;
        if (this.props.message.show) {
            this.props.TOGGLE_MESSAGE({ show: false, content: "" })
        }
        this.getItems()
    }

    componentWillUnmount = () => {
        this.isComponentMounted = false;
      };

    showBody(title, value) {
        const keyshowBody = "7894560"
        const sum = {
            codAmount: value.codAmountSum,
        }
        if (value.codAmountSum) {
            value.shipments.push(sum)
        }

        let arrayBody = []
        arrayBody.push(
            <li key={"wrapperShowBody" + keyshowBody + title}>
                <div key={"cod" + title + 1} className="COD_L_P" >
                    <strong>{title}</strong>
                </div>

                <Table
                    defaultKey={"ShowCodTable"}
                    classTable=" table-striped table-hover"
                    theader={['#', "waybillNumber",
                        "codAmount", "reference",
                        , "codPaymentReferenceInfo", "IssuanceDate", "consignee", "consigneeCity", "description"]}
                    tbody={value.shipments ? value.shipments : []}
                />
            </li>
        )

        return (
            <ul className="ul-ls-none" key={"showBodyul" + keyshowBody}>
                {arrayBody}
            </ul>
        )
    }

    showCOD() {
        const { data } = this.state
        let array = []
        const date = ""
        let value = ""
        let method = ""
        let Naghd = ""
        let pos = ""
        let keyCod = "10458697"
        let key = Object.keys(data).forEach((date, i) => {
            array.push(
                <>
                    <hr className="hrCard" key={"showCODHR" + data} />
                    <li className="COD_lable" key={"showCOD" + data}>
                        {date}
                    </li>
                </>
            )
            method = data[date]
            Object.keys(method).forEach((KM, VM) => {
                ++keyCod
                array.push(
                    <li className="COD_body" key={"showCODKM" + keyCod + date} >
                        {this.showBody(KM, method[KM])}
                    </li>
                )
            })
        })
        return (<> {array}</>)
    }

    ShowSearchParam(searchParam) {
        let arraySP = []
        if (searchParam !== null) {
            if (searchParam.allNumbers != null || searchParam.allNumbers != undefined) {
                arraySP.push(
                    <Col md={12} >
                        <FormData
                            label={
                                <FormattedMessage
                                    id={"allNumber"}
                                    defaultMessage={"allNumber"}
                                />
                            }
                            value={searchParam.allNumbers}
                            labelClassName="col-sm-1 "
                            valueClassName="col-md-11"
                            wrapperClassName={"m-r-1-69r"}
                        />
                    </Col>
                )
            }
            if (searchParam.waybillNumbers != null || searchParam.waybillNumbers != undefined) {
                arraySP.push(
                    <Col md={12} >
                        <FormData
                            label={
                                <FormattedMessage
                                    id={"waybillNumber"}
                                    defaultMessage={"waybillNumber"}
                                />
                            }
                            value={searchParam.waybillNumbers}
                            labelClassName="col-sm-1 "
                            valueClassName="col-md-11"
                            wrapperClassName={"m-r-1-69r"}
                        />
                    </Col>
                )
            }
            if (searchParam.partNumbers != null || searchParam.partNumbers != undefined) {
                arraySP.push(
                    <Col md={12} >
                        <FormData
                            label={
                                <FormattedMessage
                                    id={"partNumber"}
                                    defaultMessage={"partNumber"}
                                />
                            }
                            value={searchParam.partNumbers}
                            labelClassName="col-sm-1 "
                            valueClassName="col-md-11"
                            wrapperClassName={"m-r-1-69r"}
                        />
                    </Col>
                )
            }
            if (searchParam.references != null || searchParam.references != undefined) {
                arraySP.push(
                    <Col md={12} >
                        <FormData
                            label={
                                <FormattedMessage
                                    id={"references"}
                                    defaultMessage={"references"}
                                />
                            }
                            value={searchParam.references}
                            labelClassName="col-sm-1 "
                            valueClassName="col-md-11"
                            wrapperClassName={"m-r-1-69r"}
                        />
                    </Col>
                )
            }


            if (searchParam.issuingDateFrom != undefined) {
                var date = moment(searchParam.issuingDateFrom).format('jYYYY-jMM-jDD')
                arraySP.push(
                    <Col md={4} className="prvn-show-date" >
                        <ViewDatepicker
                            disabled={true}
                            label={
                                <FormattedMessage
                                    id={"issuingDateFrom"}
                                    defaultMessage={"issuingDateFrom"}
                                />
                            }
                            id="title2"
                            name='issuingDateFrom'
                            value={date + " " + searchParam.issuingTimeFrom}
                            labelClassName="col-sm-4 "
                            valueClassName="col-md-8"
                        />
                    </Col>)
            }

            if (searchParam.issuingDateTo != undefined) {
                var date = moment(searchParam.issuingDateTo).format('jYYYY-jMM-jDD')
                arraySP.push(
                    <Col md={4} className="prvn-show-date">
                        <ViewDatepicker
                            disabled={true}
                            label={
                                <FormattedMessage
                                    id={"issuingDateTo"}
                                    defaultMessage={"issuingDateTo"}
                                />
                            }
                            id="title2"
                            name='issuingDateTo'
                            value={date + " " + searchParam.issuingTimeTo}
                            labelClassName="col-sm-4 "
                            valueClassName="col-md-8"
                        />
                    </Col>)
            }

            if (searchParam.paymentMethods != null) {
                const arraypaymentMethods = []
                searchParam.paymentMethods.map((item, index) => {
                    arraypaymentMethods.push(item.label + ",")
                })
                arraySP.push(
                    <Col md={4}>
                        <FormData
                            label={
                                <FormattedMessage
                                    id={"paymentMethods"}
                                    defaultMessage={"paymentMethods"}
                                />
                            }
                            value={arraypaymentMethods}
                            labelClassName="col-sm-4 "
                            valueClassName="col-md-8"
                        />
                    </Col>)
            }

            if (searchParam.currentStates != null) {
                const arraycurrentStates = []
                searchParam.currentStates.map((item, index) => {
                    arraycurrentStates.push(item.label + ",")
                })
                arraySP.push(
                    <Col md={4}>
                        <FormData
                            label={
                                <FormattedMessage
                                    id={"currentStates"}
                                    defaultMessage={"currentStates"}
                                />
                            }
                            value={arraycurrentStates}
                            labelClassName="col-sm-4 "
                            valueClassName="col-md-8"
                        />
                    </Col>)
            }

            if (searchParam.deliveryDateFrom != undefined) {
                var date = moment(searchParam.deliveryDateFrom).format('jYYYY-jMM-jDD')

                arraySP.push(
                    <Col md={4} className="prvn-show-date">
                        <ViewDatepicker
                            disabled={true}
                            label={
                                <FormattedMessage
                                    id={"deliveryDateFrom"}
                                    defaultMessage={"deliveryDateFrom"}
                                />
                            }
                            id="title2"
                            name='deliveryDateFrom'
                            value={date + " " + searchParam.deliveryTimeFrom}
                            readOnly={true}
                            labelClassName="col-sm-4 "
                            valueClassName="col-md-8"
                        />
                    </Col>)
            }

            if (searchParam.deliveryDateTo != undefined) {
                var date = moment(searchParam.deliveryDateTo).format('jYYYY-jMM-jDD')
                arraySP.push(
                    <Col md={4} className="prvn-show-date">
                        <ViewDatepicker
                            disabled={true}
                            label={
                                <FormattedMessage
                                    id={"deliveryDateTo"}
                                    defaultMessage={"deliveryDateTo"}
                                />
                            }
                            placeholder={"تاریخ صدور تا"}
                            id="title2"
                            name='deliveryDateTo'
                            value={date + " " + searchParam.deliveryTimeTo}
                            labelClassName="col-sm-4 "
                            valueClassName="col-md-8"
                        />
                    </Col>
                )
            }

            if (searchParam.shipperCities != null) {
                const arrayshipperCity = []
                searchParam.shipperCities.map((item, index) => {
                    arrayshipperCity.push(item.label + ", ")
                    arraySP.push(
                        <Col md={4}>
                            <FormData
                                label={
                                    <FormattedMessage
                                        id={"shipperCities"}
                                        defaultMessage={"shipperCities"}
                                    />
                                }
                                value={arrayshipperCity}
                                labelClassName="col-sm-4 "
                                valueClassName="col-md-8"
                            />
                        </Col>)
                })
            }

            if (searchParam.consigneeCities != null) {
                const arrayconsigneeCity = []
                searchParam.consigneeCities.map((item, index) => {
                    arrayconsigneeCity.push(item.label + ", ")
                    arraySP.push(
                        <Col md={4}>
                            <FormData
                                label={
                                    <FormattedMessage
                                        id={"consigneeCities"}
                                        defaultMessage={"consigneeCities"}
                                    />
                                }
                                value={arrayconsigneeCity}
                                labelClassName="col-sm-4 "
                                valueClassName="col-md-8"
                            />
                        </Col>)
                })
            }

            if (searchParam.COD != null) {
                arraySP.push(
                    <Col md={4}>
                        <FormData
                            label={
                                <FormattedMessage
                                    id={"hasCOD?"}
                                    defaultMessage={"hasCOD?"}
                                />
                            }
                            value={searchParam.COD.label}
                            labelClassName="col-sm-4 "
                            valueClassName="col-md-8"
                        />
                    </Col >
                )
            }
        }
        return arraySP
    }

    // testshow(){
    //     ["partNumbers,allNumbers"].map((item)=>{
    //         const {searchParam}=this.props

    //           if (searchParam !=null && searchParam.COD != null) {
    //             return(
    //                 <Row>
    //                 <Col md={4}>
    //                     <FormData
    //                         label={
    //                             <FormattedMessage
    //                                 id={"hasCOD?"}
    //                                 defaultMessage={"hasCOD?"}
    //                             />
    //                         }
    //                         value={searchParam.COD.label}
    //                         labelClassName="col-sm-4 "
    //                         valueClassName="col-md-8"
    //                     />
    //                 </Col>
    //                 </Row>)

    //         }   

    //     })
    // }
    isEmpty(obj) {
        for (var key in obj) {
            if (obj.hasOwnProperty(key))
                return false;
        }
        return true;
    }
    render() {
        const { loading, message } = this.state
        return (<>
            {message ? <ErrorMessage error={message} />
                :
                <Card>
                    <Row>
                        {Show.ShowSearchParam(this.props.searchParam)}
                        {/* {this.ShowSearchParam(this.props.searchParam)} */}
                    </Row>

                    {loading ?
                        <Preloader />
                        :
                        <ul className="ul-ls-none"  >
                            {this.isEmpty(this.state.data) ?

                                <Row>
                                    <Col md={12} xs={12}  >
                                        <Card cardBodyclassName=" bg-cyan text-white text-center " >
                                            <span className={"1001.4XX"}>
                                                گزارشی یافت نشد.
                                            </span>
                                        </Card>
                                    </Col>

                                </Row > :

                                this.showCOD()}

                        </ul>
                    }
                </Card>}
        </>
        )
    }
}

const mapStateToProps = (store) => {
    return {
        userName: store.Reducer.userName,
        password: store.Reducer.password,
        searchParam: store.Reducer.searchParam,
        readySearchParam: store.Reducer.readySearchParam,
        message: store.Reducer.message,

    }
}


const mapDispachToProps = (dispach) => {
    return {
        TOGGLE_MESSAGE: (value) => { dispach(actionCreator.TOGGLE_MESSAGE(value)) },
    }
}

export default connect(mapStateToProps, mapDispachToProps)(COD);