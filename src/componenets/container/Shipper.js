import React, { Component } from 'react';
import Table from '../presentational/table/Table';
import Pagination from '../presentational/table/Pagination';
import Card from '../presentational/card/Card';
import SearchForm from '../container/SearchForm';
import Col from '../presentational/Col';
import * as actionCreator from '../../store/Action'
import { connect } from 'react-redux';
import ErrorHandeling from './ErrorHandeling';
import { withRouter, Route, Redirect } from 'react-router-dom';
import Api from '../../config/Api';
import ErrorMessage from '../presentational/ErrorMessage'
import { exportDefaultSpecifier } from '@babel/types';
import Preloader from '../presentational/Preloader';
import * as ErrorCode from '../../config/ErrorCode';
import Row from '../presentational/Row';
import FormDatePicker from '../presentational/input/FormDatePicker';
import ViewHichestanDatePicker from '../presentational/input/ViewHichestanDatePicker';
import FormData from '../presentational/input/FormData';
import { FormattedMessage } from 'react-intl'
import moment from 'moment-jalaali';
import show from './ShowSearchParam';
class Shipper extends Component {

    constructor(props) {
        super(props);
        this.state = {
            total: 0,
            data: [], message: null,
            size: 10,
            loading: false,
            activePage: 1,
            itemsCountPerPage: 10,
            sortOrder: '',
            sortField: '',
            showSearchForm: true,
        }
        this.changeData = this.changeData.bind(this)
        this.searchValue = this.searchValue.bind(this)
        this.changeSize = this.changeSize.bind(this)
        this.sortTable = this.sortTable.bind(this)
    }



    componentDidMount() {
        this.isComponentMounted = true;
        if (this.props.message.show) {
            this.props.TOGGLE_MESSAGE({ show: false, content: "" })
        }
        window.scrollTo(0, 0);

        this.getData()
    }

    componentWillUnmount = () => {
        this.isComponentMounted = false;
    };

    searchValue = (searchParam) => {
        this.props.SET_SearchParam(searchParam)
        if (searchParam != null) {
            const { activePage, itemsCountPerPage } = this.state
            this.getData(activePage, itemsCountPerPage, searchParam)
        }
    }


    changeData(page = this.state.activePage) {
        this.state.activePage = page
        this.setState({})
        this.getData(page, this.state.itemsCountPerPage, this.props.searchParam)
    }


    changeSize(size) {
        this.setState({ itemsCountPerPage: size })
        this.getData(this.state.activePage, size, this.props.searchParam)
    }

    sortTable(field, order) {
        this.setState({
            sortOrder: order,
            sortField: field,
            activePage: 1
        })
        // this.getData()
    }


    getData(page = 1, size = this.state.itemsCountPerPage, searchParam = this.props.searchParam) {
        this.setState({ loading: true })
        let newsCOD = null
        let newcurrentStates = []
        let newsconsigneeCity = []
        let newpaymentMethods = []
        let search = ""
        if (searchParam != null) {
            Object.keys(searchParam).forEach(function (key, index) {
                if (searchParam[key] != undefined) {
                    if (key == "currentStates") {
                        searchParam[key].map(item => {
                            newcurrentStates.push(item.value)
                        })
                        search = search + "&" + key + "=" + newcurrentStates
                    } else if (key == "consigneeCities") {
                        searchParam[key].map(item => {
                            newsconsigneeCity.push(item.value.split("--", 1))
                        })
                        search = search + "&" + "consigneeCityCodes" + "=" + newsconsigneeCity
                    } else if (key == "shipperCities") {
                        searchParam[key].map(item => {
                            newsconsigneeCity.push(item.value.split("--", 1))
                        })
                        search = search + "&" + "shipperCityCodes" + "=" + newsconsigneeCity
                    } else if (key == "paymentMethods") {
                        searchParam[key].map(item => {
                            newpaymentMethods.push(item.value)
                        })
                        search = search + "&" + key + "=" + newpaymentMethods
                    } else if (key == "COD") {
                        search = search + "&" + "hasCod" + "=" + searchParam[key].value
                    } else if (key == "deliveryDateFrom" || key == "issuingDateTo" || key == "issuingDateFrom" || key == "deliveryDateTo") {
                        // search  = search + "&" + key + "=" + searchParam[key].format('jYYYY-jMM-jDD HH:mm:00')
                        if (searchParam[key] !== undefined) {
                            const mergeDateTime = (date, time) => {
                                if (time != undefined) {
                                    var time = time.split(':');
                                    date.set({
                                        hours: time[0],
                                        minutes: time[1]
                                    })
                                    return (date)
                                }
                                else {
                                    time = "00:00"
                                    var time = time.split(':');
                                    date.set({
                                        hours: time[0],
                                        minutes: time[1]
                                    })
                                    return (date)
                                }
                            }

                            switch (key) {

                                case "deliveryDateFrom":
                                    var date = mergeDateTime(moment(searchParam[key]), searchParam.deliveryTimeFrom)
                                    search = search + "&" + key + "=" + moment(date).format('jYYYY-jMM-jDD HH:mm')
                                    break;

                                case "deliveryDateTo":
                                    var date = mergeDateTime(moment(searchParam[key]), searchParam.deliveryTimeTo)
                                    search = search + "&" + key + "=" + moment(date).format('jYYYY-jMM-jDD HH:mm')
                                    break;

                                case "issuingDateTo":
                                    var date = mergeDateTime(moment(searchParam[key]), searchParam.issuingTimeTo)
                                    search = search + "&" + key + "=" + moment(date).format('jYYYY-jMM-jDD HH:mm')
                                    break;

                                case "issuingDateFrom":
                                    var date = mergeDateTime(moment(searchParam[key]), searchParam.issuingTimeFrom)
                                    search = search + "&" + key + "=" + moment(date).format('jYYYY-jMM-jDD HH:mm')
                                    break;

                                default:
                                    break;
                            }
                        }
                    } else if (key == "waybillNumbers") {
                        search = search + "&" + key + "=" + searchParam[key]
                    } else if (key == "allNumbers") {
                        search = search + "&" + key + "=" + searchParam[key]
                    } else if (key == "partNumbers") {
                        search = search + "&" + key + "=" + searchParam[key]
                    } else if (key == "references") {
                        search = search + "&" + key + "=" + searchParam[key]
                    }
                }
            });
        }
        if (search !== "") {
            this.props.SET_READYSEARCHPARAM(search)
        }
        const { userName, password } = this.props
        return (
            Api.getShipments("/shipments?page=" + page + "&size=" + size + search, { userName: userName, password: password })
                .then(
                    (response) => {
                        if (response != undefined) {
                            // this.state.data = response.elements ? response.elements : []
                            this.setState({
                                loading: false,
                                data: response.elements,
                                total: response.total
                            })
                        } else {
                            this.setState({ loading: false })
                        }
                    }).finally(() => {
                    })
        )
    }

    render() {
        const { data, total, message, loading, itemsCountPerPage, activePage, showSearchForm } = this.state;
        const { searchParam, userName, password } = this.props;
        return (
            <Col md={12} key={Math.random().toString(36).substr(2)} >
                <Card
                    key={Math.random().toString(36).substr(2)}
                    cardTitle={
                        <span onClick={() => { this.setState({ showSearchForm: !showSearchForm }) }} >
                            جستجو
                  &nbsp; <i className={showSearchForm ? "ti-angle-down" : "ti-angle-up"}></i>
                        </span>
                    }
                >
                    {showSearchForm ?
                        <SearchForm
                            searchParam={searchParam}
                            searchValue={this.searchValue}
                            userName={userName}
                            password={password}
                        />
                        :
                        <Row>
                            {show.ShowSearchParam(this.props.searchParam)}
                        </Row>
                    }
                </Card>
                {message
                    ? <ErrorMessage error={message} />
                    :
                    <Card key={Math.random().toString(36).substr(1)} >
                        {loading ? <Preloader /> :
                            <>
                                <Pagination
                                    total={total}
                                    changeData={this.changeData}
                                    activePage={activePage}
                                    itemsCountPerPage={itemsCountPerPage}
                                    changeSize={this.changeSize}
                                />
                                <Row>
                                    <Col md={12} key={Math.random().toString(36).substr(2)}>
                                        <Table
                                            classTable=" table-striped table-hover"
                                            classHeader="bg-inverse text-white text-center"
                                            classBody=" directionLTR"
                                            theader={['#', "waybillNumber",
                                                "issuingDate", "deliveryDate",
                                                , "shipper", "shipperCity", "consignee",
                                                "consigneeCity", "paymentMethod", "chargeParty", "currentState",
                                                , "activity"]}
                                            tbody={data.length > 0 ? data : []}
                                            // tbody = {this.state.datatest}
                                            defaultKey="shipment"
                                            sortTable={this.sortTable}
                                            sort={true}
                                            activePage={activePage}
                                            indexVariable={this.state}
                                        />
                                    </Col>
                                </Row>
                                <Pagination
                                    total={total}
                                    changeData={this.changeData}
                                    activePage={activePage}
                                    itemsCountPerPage={itemsCountPerPage}
                                    changeSize={this.changeSize}
                                />
                            </>}
                    </Card>}
            </Col>
        )
    }
}

const mapStateToProps = (store) => {
    return {
        userName: store.Reducer.userName,
        password: store.Reducer.password,
        searchParam: store.Reducer.searchParam,
        message: store.Reducer.message,
    }
}

const mapDispachToProps = (dispach) => {
    return {
        SET_AUTHENTICATE: (value) => { dispach(actionCreator.SET_AUTHENTICATE(value)) },
        SET_SearchParam: (value) => { dispach(actionCreator.SET_SEARCHPARAM(value)) },
        SET_READYSEARCHPARAM: (value) => { dispach(actionCreator.SET_READYSEARCHPARAM(value)) },
        TOGGLE_MESSAGE: (value) => { dispach(actionCreator.TOGGLE_MESSAGE(value)) },
    }
}
export default withRouter(connect(mapStateToProps, mapDispachToProps)(Shipper));
