import React, { Component } from 'react'
import Form from '../presentational/form/Form'
import FormTextArea from '../presentational/input/FormTextArea'
import Select from '../presentational/input/Select'
// import FormDatePicker from '../presentational/input/FormDatePicker'
import FormDatePicker from '../presentational/input/FormHichestanDatePicker'
import FormHich from '../presentational/input/FormHich'
import Button from '../presentational/button/Button';
import ButtonGroup from '../presentational/button/ButtonGroup';
import moment from 'moment-jalaali'
// import DatePicker from 'react-datepicker2';
import Row from '../presentational/Row'
import Col from '../presentational/Col'
import Card from '../presentational/card/Card'
import CardBody from '../presentational/card/CardBody'
import Api from '../../config/Api';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import * as actionCreator from '../../store/Action'
import { DateTimeInput } from 'react-hichestan-datetimepicker';
import ReactSelect from 'react-select';
import DatePicker from "react-datepicker2";
import TimeField from 'react-simple-timefield'
// import TimePicker from 'react-times';
const initialDate = { value: undefined, status: "init" }
// const initi
class SearchForm extends Component {
    initialState = {
        typeFieldSearchNumbers: this.props.searchParam == null ? { value: 'allNumbers', label: 'شماره بارنامه/ ‌شماره پارت‌/‌ کد ارجاع' }
            : this.props.searchParam.typeFieldSearchNumbers != undefined ? this.props.searchParam.typeFieldSearchNumbers :
                { value: 'allNumbers', label: 'شماره بارنامه/ ‌شماره پارت‌/‌ کد ارجاع' },
        waybillNumbers: undefined,
        allNumbers: undefined,
        partNumbers: undefined,
        references: undefined,
        issuingDateFrom: undefined,
        issuingDateTo: undefined,
        currentStates: undefined,
        deliveryDateFrom: undefined,
        deliveryDateTo: undefined,
        paymentMethods: undefined,
        consigneeCities: undefined,
        shipperCities: undefined,
        openMenu: false,
        openMenuCnsgn: false,
        inputValueConsigneeCity: undefined,
        inputValueShipperCity: undefined,
        myDateinputValueCityTime: undefined,
        COD: undefined,
        optionsCity: [],
        optionsConsigneeCity: [],
        testDatepicker: undefined,
        issuingTimeFrom: undefined,
        issuingTimeTo: undefined,
        deliveryTimeFrom: undefined,
        deliveryTimeTo: undefined,
        testValue: undefined
    }

    constructor(props) {
        super(props);
        this.reset = this.reset.bind(this);
        this.state = this.initialState;
        this.onTimeChange = this.onTimeChange.bind(this);
        this.onModalTimeChange = this.onModalTimeChange.bind(this);
        this.resetDate = this.resetDate.bind(this);
        this.onInputDateChange = this.onInputDateChange.bind(this);
        this.handleKeyPress = this.handleKeyPress.bind(this);
    }

    componentWillUnmount() {
        var aTags = document.getElementsByTagName("input");
        for (var i = 0; i < aTags.length; i++) {
            if (aTags[i].className === "datepicker-input datepicker-input form-control dirLtR") {
                aTags[i].removeEventListener("keydown", this.handleKeyPress)
            }
        }
    }


    componentDidMount() {
        this.getItemsSearchParam()
        var inputDates = document.getElementsByTagName("input");
        for (var i = 0; i < inputDates.length; i++) {
            if (inputDates[i].className == "datepicker-input datepicker-input form-control dirLtR") {
                inputDates[i].addEventListener("keydown", this.handleKeyPress)
            }

        }
    }


    handleKeyPress(event) {
        if (event.keyCode === 13 && event.target.className == "datepicker-input datepicker-input form-control dirLtR ignore--click--outside") {
            this.onInputDateChange(event);
            event.preventDefault();
            this.handleBlur(event);
        } else if (event.keyCode === 27) {

            this.handleBlur(event)
        } else if (event.keyCode === 9) {
            this.handleBlur(event)
        }
    }

    handleBlur(event) {
        var calendar = document.getElementsByClassName("calendarContainer jalaali undefined")
        if (event.target.className === "datepicker-input datepicker-input form-control dirLtR ignore--click--outside") {
            event.target.className = "datepicker-input datepicker-input form-control dirLtR"
            for (var i = 0; i < calendar.length; i++) {
                calendar[i].remove();
            }
        }
    }


    getItemsSearchParam() {
        const { searchParam } = this.props
        if (searchParam !== null) {
            this.setState({
                waybillNumbers: searchParam.waybillNumbers,
                allNumbers: searchParam.allNumbers,
                partNumbers: searchParam.partNumbers,
                references: searchParam.references,
                issuingDateFrom: searchParam.issuingDateFrom,
                issuingDateTo: searchParam.issuingDateTo,
                currentStates: searchParam.currentStates,
                deliveryDateFrom: searchParam.deliveryDateFrom,
                deliveryDateTo: searchParam.deliveryDateTo,
                paymentMethods: searchParam.paymentMethods,
                consigneeCities: searchParam.consigneeCities,
                shipperCities: searchParam.shipperCities,
                COD: searchParam.COD,
                typeFieldSearchNumbers: searchParam.typeFieldSearchNumbers,
                issuingTimeFrom: searchParam.issuingTimeFrom,
                issuingTimeTo: searchParam.issuingTimeTo,
                deliveryTimeFrom: searchParam.deliveryTimeFrom,
                deliveryTimeTo: searchParam.deliveryTimeTo,
            })
        }
    }

    onChange(event) {
        const target = event.target;
        const value = target.value;
        const name = target.name;
        this.setState({
            [name]: value
        });
    }

    handleSubmit = (e) => {
        e.preventDefault()
        this.props.searchValue(this.state)
    }


    reset = () => {
        this.setState(() => this.initialState)
        this.props.searchValue(null, null)
    }

    getOptions(query, type) {
        const { userName, password } = this.props
        let arrayValueCity = []
        Api.get("/cities?term=" + query, { userName: userName, password: password })
            .then(response => {
                response.data.data.elements.map((item) => {
                    arrayValueCity.push({
                        value: item.shortCode + '--' + item.nameEn + '--' + item.provinceShortCode + item.provinceNameEn + '--' + item.countryShortCode
                            + '--' + item.countryNameEn, label: item.countryNameFa + "-" + item.provinceNameFa + "-" + item.nameFa
                    })
                })
                if (type == "consignee") {
                    this.state.optionsConsigneeCity = arrayValueCity
                    this.state.openMenuCnsgn = true
                } else if (type == "shipper") {
                    this.state.optionsCity = arrayValueCity
                    this.state.openMenu = true
                }
                this.setState({})
            })
    }

    onInputChangeConsigneeCity = (query, { action }) => {
        if (action !== "set-value") {
            this.setState({ inputValueConsigneeCity: query });
            if (query.length > 1) {
                this.getOptions(query, "consignee")
            } else {
                this.setState({ openMenuCnsgn: false })
            }
        }
    }

    onInputChangeShipperCity = (query, { action }) => {
        if (action !== "set-value") {
            this.setState({ inputValueShipperCity: query });
            if (query.length > 1) {
                this.getOptions(query, "shipper")
            } else {
                this.setState({ openMenu: false })
            }
        }
    }

    handleChange = (event) => {
        const newState = {};
        newState[event.target.name] = event.target.value;
        this.setState(newState);
    };

    setPlaceHolder() {
        const { typeFieldSearchNumbers } = this.state
        switch (typeFieldSearchNumbers.value) {
            case 'references':
                return ("کدهای ارجاع")
                break;
            case 'allNumbers':
                return ("شماره پارت‌ها/‌شماره بارنامه‌ها/‌کدهای ارجاع")
                break;
            case 'waybillNumbers':
                return ("شماره بارنامه‌ها")
                break;
            case 'partNumbers':
                return ("شماره پارت‌ها")
                break;
            default:
                return ("شماره ها")
                break;
        }
    }


    onTimeChange(event, value) {
        const newTime = value.replace(/-/g, ':');
        const time = newTime.substr(0, 5);
        this.setState({ [event.target.name]: time });
    }

    onModalTimeChange(event, name = "name") {
        const newTime = "".concat(event.hour, ":", event.minute);
        // this.onTimeChange(newTime)
        // const time = event.hour :event.minute
        // ;
        this.setState({ [name]: newTime });
    }

    toEnglishDigits(str) {
        if (!str) return str;
        const regex1 = /[\u0660-\u0669]/g;
        const regex2 = /[\u06f0-\u06f9]/g;
        return str
            .replace(regex1, function (c) {
                return c.charCodeAt(0) - 0x0660;
            })
            .replace(regex2, function (c) {
                return c.charCodeAt(0) - 0x06f0;
            });
    }

    onInputDateChange(event) {
        var regex = /^[1][0-4]{1}[0-9]{1}[0-9]{1}[\/|-]([0-1]{0}|[0-1]{1})[0-9]{1}[\/|-]([0-3]{1}|[0-3]{0})[0-9]{1}$/g;
        // var regex = /^[0-9]{4}[\/|-][0-9]{2}[\/|-][0-9]{2}$/g;
        // var regex2 = /^[0-9]{4}[-][0-9]{2}[-][0-9]{2}$/g;
        const { value } = event.target
        const valueToEnglish = this.toEnglishDigits(value);
        const { issuingTimeFrom, issuingTimeTo, deliveryTimeFrom, deliveryTimeTo } = this.state
        // const validate = moment(valueToEnglish, 'jYYYY/jMM/jDD').isValid();
        if (regex.test(valueToEnglish)) {
            if (moment(valueToEnglish, 'jYYYY/jMM/jDD').isValid()) {
                switch (event.target.name) {
                    case "issuingDateFrom":
                        if (issuingTimeFrom == undefined) {
                            this.setState({ issuingDateFrom: moment(valueToEnglish, 'jYYYY/jM/jD'), issuingTimeFrom: "00:00" })
                        } else {
                            this.setState({ issuingDateFrom: moment(valueToEnglish, 'jYYYY/jM/jD') })
                        }
                        break;
                    case "issuingDateTo":
                        if (issuingTimeTo == undefined) {
                            this.setState({ issuingDateTo: moment(valueToEnglish, 'jYYYY/jM/jD'), issuingTimeTo: "23:59" })
                        } else {
                            this.setState({ issuingDateTo: moment(valueToEnglish, 'jYYYY/jM/jD') })
                        }
                        break;
                    case "deliveryDateFrom":
                        if (deliveryTimeFrom == undefined) {
                            this.setState({ deliveryDateFrom: moment(valueToEnglish, 'jYYYY/jM/jD'), deliveryTimeFrom: "00:00" })
                        } else {
                            this.setState({ deliveryDateFrom: moment(valueToEnglish, 'jYYYY/jM/jD') })
                        }
                        break;
                    case "deliveryDateTo":
                        if (deliveryTimeTo == undefined) {
                            this.setState({ deliveryDateTo: moment(valueToEnglish, 'jYYYY/jM/jD'), deliveryTimeTo: "23:59" })
                        } else {
                            this.setState({ deliveryDateTo: moment(valueToEnglish, 'jYYYY/jM/jD') })
                        }
                        break;

                    default:
                        break;
                }

            }
        }

    }

    resetDate(name) {
        switch (name) {
            case "issuingDateFrom":
                this.setState({ issuingDateFrom: undefined, issuingTimeFrom: undefined })
                break;
            case "issuingDateTo":
                this.setState({ issuingDateTo: undefined, issuingTimeTo: undefined })
                break
            case "deliveryDateFrom":
                this.setState({ deliveryDateFrom: undefined, deliveryTimeFrom: undefined })
                break;
            case "deliveryDateTo":
                this.setState({ deliveryDateTo: undefined, deliveryTimeTo: undefined })
                break;
            default:
                break;
        }

    }

    resetTime(name) {
        switch (name) {
            case "issuingTimeFrom":
                this.setState({ issuingTimeFrom: undefined })
                break;
            case "issuingTimeTo":
                this.setState({ issuingTimeTo: undefined })
                break
            case "deliveryTimeFrom":
                this.setState({ deliveryTimeFrom: undefined })
                break;
            case "deliveryTimeTo":
                this.setState({ deliveryTimeTo: undefined })
                break;
            default:
                break;
        }

    }

    onChangeDate(name, value) {
        const { issuingTimeFrom, issuingDateTo, deliveryDateFrom, deliveryDateTo } = this.state
        if (value !== undefined) {
            switch (name) {
                case "issuingDateFrom":
                    if (issuingTimeFrom == undefined) {
                        this.setState({ issuingDateFrom: value, issuingTimeFrom: "00:00" })
                    } else {
                        this.setState({ issuingDateFrom: value })
                    }
                    break;
                case "issuingDateTo":
                    if (issuingDateTo == undefined) {
                        this.setState({ issuingDateTo: value, issuingTimeTo: "23:59" })
                    } else {
                        this.setState({ issuingDateTo: value })
                    } break
                case "deliveryDateFrom":
                    if (deliveryDateFrom == undefined) {
                        this.setState({ deliveryDateFrom: value, deliveryTimeFrom: "00:00" })
                    } else {
                        this.setState({ deliveryDateFrom: value })
                    } break;
                case "deliveryDateTo":
                    if (deliveryDateTo == undefined) {
                        this.setState({ deliveryDateTo: value, deliveryTimeTo: "23:59" })
                    } else {
                        this.setState({ deliveryDateTo: value })
                    }
                    break;
                default:
                    break;
            }

        }

    }


    render() {
        const {
            typeFieldSearchNumbers,
            waybillNumbers,
            allNumbers,
            partNumbers,
            references,
            issuingDateFrom,
            issuingDateTo,
            paymentMethod,
            currentStates,
            deliveryDateFrom,
            deliveryDateTo,
            paymentMethods,
            consigneeCities,
            shipperCities,
            optionsCity,
            optionsConsigneeCity,
            inputValueCity,
            COD,
            openMenu,
            openMenuCnsgn,
            issuingTimeFrom,
            issuingTimeTo,
            deliveryTimeFrom,
            deliveryTimeTo,
            testValue
        } = this.state

        return (
            <Form onSubmit={this.handleSubmit} autoComplete="off" >
                <Row>
                    <Col md={6} sm={12}>
                        <div className="form-group row " >
                            <label
                                className="col-sm-3 text-right control-label col-form-label"
                            >
                                {"جستجو در"}
                            </label>
                            <div className="col-sm-9 marginb">
                                <ReactSelect
                                    defaultValue={typeFieldSearchNumbers}
                                    options={[
                                        { value: 'allNumbers', label: 'شماره بارنامه/ ‌شماره پارت‌/ ‌کد ارجاع' },
                                        { value: 'waybillNumbers', label: 'فقط شماره بارنامه‌' },
                                        { value: 'partNumbers', label: 'فقط شماره پارت‌' },
                                        { value: 'references', label: 'فقط کد ارجاع' }
                                    ]}
                                    onChange={selectedOption => {
                                        const arrayValue = ["allNumbers", "waybillNumbers", "partNumbers", "references"]
                                        let selectLable = selectedOption.value
                                        let index = arrayValue.findIndex((item) => item == selectLable)
                                        arrayValue.splice(index, 0)
                                        let namelabel = typeFieldSearchNumbers.value
                                        let nowvalue = this.state[namelabel]
                                        this.setState(prevstate => {
                                            arrayValue.map(item => {
                                                prevstate[item] = undefined
                                                return { ...prevstate }
                                            })
                                        }, () => {
                                            this.setState((prev) => {
                                                prev.typeFieldSearchNumbers = selectedOption;
                                                prev[selectLable] = nowvalue;
                                                return { ...prev }
                                            }
                                            )
                                        })
                                    }
                                    }
                                />
                                <textarea
                                    type={"textarea"}
                                    className="form-control heightTextArea"
                                    id="allNumbers"
                                    placeholder={this.setPlaceHolder()}
                                    id="allNumbers"
                                    type="textArea"
                                    name={typeFieldSearchNumbers.value}
                                    value={typeFieldSearchNumbers != undefined ? this.state[typeFieldSearchNumbers.value] : null}
                                    rows="2"
                                    onChange={(e) => this.onChange(e)}
                                />
                                <small
                                    id="textHelp"
                                    className="form-text text-muted">
                                </small>

                            </div>
                        </div>
                        <Select
                            isClearable={true}
                            placeholder={<span className="costom-select-placeholder">حداقل دو کاراکتر از شهر مورد نظر را وارد کنید</span>}
                            label={
                                <FormattedMessage
                                    id={"shipperCities"}
                                    defaultMessage={"shipperCities"}
                                />}
                            id="title1"
                            type="text"
                            name='shipperCities'
                            inputValue={inputValueCity}
                            onInputChange={this.onInputChangeShipperCity}
                            options={optionsCity}
                            value={shipperCities}
                            openMenuOnClick={false}
                            menuIsOpen={openMenu}
                            onChange={selectedOption => {
                                this.setState({ shipperCities: selectedOption });
                            }}
                        />

                        <Select
                            isClearable={true}
                            placeholder={<span className="costom-select-placeholder">حداقل دو کاراکتر از شهر مورد نظر را وارد کنید</span>}
                            label={
                                <FormattedMessage
                                    id={"consigneeCity"}
                                    defaultMessage={"consigneeCity"}
                                />}
                            id="title1"
                            type="text"
                            name='consigneeCities'
                            inputValue={inputValueCity}
                            onInputChange={this.onInputChangeConsigneeCity}
                            options={optionsConsigneeCity}
                            value={consigneeCities}
                            openMenuOnClick={false}
                            menuIsOpen={openMenuCnsgn}
                            onChange={selectedOption => {
                                this.setState({ consigneeCities: selectedOption });
                            }}
                        />


                        <Select
                            placeholder=" "
                            label={
                                (<FormattedMessage
                                    id={"currentStates"}
                                    defaultMessage={"currentStates"}
                                />)}
                            type="text"
                            name='currentStates'
                            options={[
                                {
                                    value: 'READY_FOR_ISSUE',
                                    label: 'آماده صدور'
                                },
                                {
                                    value: 'PICKEDUP',
                                    label: 'جمع آوری شد'
                                },
                                {
                                    value: 'ISSUED',
                                    label: 'ثبت بارنامه'
                                },
                                {
                                    value: 'DELIVERED',
                                    label: 'تحویل شد'
                                },
                                {
                                    value: 'NOT_DELIVERED',
                                    label: 'تحویل نشد'
                                },
                                {
                                    value: 'VOIDED',
                                    label: 'باطل شد'
                                },
                                {
                                    value: 'RETURNED',
                                    label: 'بازگشت شد'
                                }

                            ]}
                            value={currentStates}
                            onChange={selectedOption => {

                                this.setState({ currentStates: selectedOption });
                            }} />

                    </Col>

                    <Col md={6} sm={12}>
                        <Select
                            placeholder=" "
                            label={
                                <FormattedMessage
                                    id={"paymentMethods"}
                                    defaultMessage={"paymentMethods"}
                                />}
                            id="title3"
                            type="text"
                            name='paymentMethods'
                            options={[
                                {
                                    value: 'نقد',
                                    label: 'نقد'
                                },
                                {
                                    value: 'CREDIT',
                                    label: 'اعتباری'
                                },
                                {
                                    value: 'POS',
                                    label: 'کارتخوان'
                                }]}
                            value={paymentMethods}
                            onChange={selectedOption => {
                                this.setState({ paymentMethods: selectedOption });
                            }} />

                        <Select
                            placeholder=" "
                            isMulti={false}
                            label={
                                <FormattedMessage
                                    id={"hasCOD?"}
                                    defaultMessage={"hasCOD?"}
                                />}
                            id="title3"
                            type="text"
                            name='COD'
                            options={[
                                { value: "", label: 'ــ' },
                                { value: 'true', label: 'بله' },
                                { value: 'false', label: 'خیر' }]}
                            value={COD}
                            onChange={selectedOption => {
                                this.setState({ COD: selectedOption });
                            }} />

                        <FormDatePicker
                            autocomplete="off"
                            label={
                                <FormattedMessage
                                    id={"issuingDateFrom"}
                                    defaultMessage={"issuingDateFrom"}
                                />}
                            placeholder={"تاریخ صدور از"}
                            id="title1"
                            name='issuingDateFrom'
                            timeName="issuingTimeFrom"
                            DateValue={issuingDateFrom}
                            timeValue={issuingTimeFrom}
                            onChangeTime={this.onTimeChange}
                            onModalTimeChange={(event) => this.onModalTimeChange(event, "issuingTimeFrom")}
                            onInputDateChange={(event) => { this.onInputDateChange(event) }}
                            resetDate={() => this.resetDate('issuingDateFrom')}
                            resetTime={() => this.resetTime('issuingTimeFrom')}
                            onChange={(value) => { this.onChangeDate("issuingDateFrom", value) }}
                        />

                        <FormDatePicker
                            label={
                                <FormattedMessage
                                    id={"to"}
                                    defaultMessage={"to"}
                                />}
                            placeholder={"تاریخ صدور تا"}
                            id="title2"
                            name='issuingDateTo'
                            DateValue={issuingDateTo}
                            timeName="issuingTimeTo"
                            timeValue={issuingTimeTo}
                            onChangeTime={this.onTimeChange}
                            onModalTimeChange={(event) => this.onModalTimeChange(event, "issuingTimeTo")}
                            onInputDateChange={(event) => {
                                console.table("thisones", event.keyCode);
                                this.onInputDateChange(event)
                            }}
                            resetDate={() => this.resetDate('issuingDateTo')}
                            resetTime={() => this.resetTime('issuingTimeTo')}
                            onChange={(value) => { this.onChangeDate("issuingDateTo", value) }}
                        />

                        <FormDatePicker
                            label={
                                <FormattedMessage
                                    id={"deliveryDateFrom"}
                                    defaultMessage={"deliveryDateFrom"}
                                />}
                            placeholder={"تاریخ تحویل از"}
                            id="title1"
                            name='deliveryDateFrom'
                            DateValue={deliveryDateFrom}
                            timeValue={deliveryTimeFrom}
                            timeName="deliveryTimeFrom"
                            resetDate={() => this.resetDate('deliveryDateFrom')}
                            resetTime={() => this.resetTime('deliveryTimeFrom')}
                            onChangeTime={this.onTimeChange}
                            onModalTimeChange={(event) => this.onModalTimeChange(event, "deliveryTimeFrom")}
                            onModalTimeChange={this.onModalTimeChange}
                            onInputDateChange={(event) => { this.onInputDateChange(event) }}
                            onChange={(value) => { this.onChangeDate("deliveryDateFrom", value) }}
                        />

                        <FormDatePicker
                            label={
                                <FormattedMessage
                                    id={"to"}
                                    defaultMessage={"to"}
                                />}
                            placeholder={"تاریخ تحویل تا"}
                            id="title2"
                            name='deliveryDateTo'
                            DateValue={deliveryDateTo}
                            timeName="deliveryTimeTo"
                            timeValue={deliveryTimeTo}
                            resetDate={() => this.resetDate('deliveryDateTo')}
                            resetTime={() => this.resetTime('deliveryTimeTo')}
                            onChangeTime={this.onTimeChange}
                            onModalTimeChange={(event) => this.onModalTimeChange(event, "deliveryTimeTo")}
                            onInputDateChange={(event) => { this.onInputDateChange(event) }}
                            onChange={(value) => { this.onChangeDate("deliveryDateTo", value) }}
                        />
                    </Col>
                </Row>
                <hr />

                <div className="form-group m-b-0 text-right">
                    <ButtonGroup >
                        <Button
                            label={
                                <FormattedMessage
                                    id={"search"}
                                    defaultMessage={"search"}
                                />}
                            buttonclass="btn btn-info waves-effect waves-light"
                            htmlType="submit">
                        </Button>
                        <Button
                            label={
                                <FormattedMessage
                                    id={"reset"}
                                    defaultMessage={"reset"}
                                />}
                            buttonclass="btn btn-dark waves-effect waves-light"
                            onClick={this.reset}
                        >
                        </Button>
                    </ButtonGroup>
                </div>
            </Form>
        )
    }
}



const mapDispachToProps = (dispach) => {
    return {
        SET_AUTHENTICATE: (value) => { dispach(actionCreator.SET_AUTHENTICATE(value)) },
    }
}
export default connect(null, mapDispachToProps)(SearchForm);
