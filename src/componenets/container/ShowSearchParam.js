import React from 'react';
import Col from "../presentational/Col"
import FormData from "../presentational/input/FormData"
import { FormattedMessage } from "react-intl"
import ViewDatepicker from '../presentational/input/ViewDatepicker';
import moment from 'moment-jalaali';
class Show{
    static ShowSearchParam(searchParam)  {
        let arraySP = []
        if (searchParam !== null && searchParam !==undefined) {
            if (searchParam.allNumbers !== null && searchParam.allNumbers !== undefined) {
                arraySP.push(
                    <Col md={12} key ={searchParam.allNumbers+Math.random().toString(36).substr(2)} >
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
            if (searchParam.waybillNumbers !== null && searchParam.waybillNumbers !== undefined) {
                arraySP.push(
                    <Col md={12} key ={searchParam.waybillNumbers+Math.random().toString(36).substr(2)} >
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
            if (searchParam.partNumbers !== null&& searchParam.partNumbers !== undefined) {
                arraySP.push(
                    <Col md={12} key ={searchParam.partNumbers+Math.random().toString(36).substr(2)}>
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
            if (searchParam.references !== null && searchParam.references !== undefined) {
                arraySP.push(
                    <Col md={12} key ={searchParam.references+Math.random().toString(36).substr(2)} >
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

    
            if (searchParam.issuingDateFrom !== undefined) {
                var date = moment(searchParam.issuingDateFrom).format('jYYYY-jMM-jDD')
                arraySP.push(
                    <Col md={4} className="prvn-show-date"key ={Math.random().toString(36).substr(2)}  >
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
                            value={date + " " + (searchParam.issuingTimeFrom===undefined?"00:00" :searchParam.issuingTimeFrom)}
                            labelClassName="col-sm-4 "
                            valueClassName="col-md-8"
                        />
                    </Col>)
            }
    
            if (searchParam.issuingDateTo !== undefined) {
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
                            value={date + " " + (searchParam.issuingTimeTo === undefined ? "00:00" : searchParam.issuingTimeTo)}
                            labelClassName="col-sm-4 "
                            valueClassName="col-md-8"
                        />
                    </Col>)
            }
    
            if (searchParam.paymentMethods !== null && searchParam.paymentMethods !==undefined) {
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
    
            if (searchParam.currentStates !== null && searchParam.currentStates !==undefined ) {
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
    
            if (searchParam.deliveryDateFrom !== undefined) {
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
                            value={date + " " + (searchParam.deliveryTimeFrom === undefined ? "00:00" : searchParam.deliveryTimeFrom)}
                            readOnly={true}
                            labelClassName="col-sm-4 "
                            valueClassName="col-md-8"
                        />
                    </Col>)
            }
    
            if (searchParam.deliveryDateTo !== undefined) {
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
                            value={date + " " + (searchParam.deliveryTimeTo===undefined?"00:00" :searchParam.deliveryTimeTo)}
                            labelClassName="col-sm-4 "
                            valueClassName="col-md-8"
                        />
                    </Col>
                )
            }
    
            if (searchParam.shipperCities !== null && searchParam.shipperCities !==undefined) {
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
    
            if (searchParam.consigneeCities !== null && searchParam.consigneeCities !==undefined) {
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
    
            if (searchParam.COD !== null && searchParam.COD !==undefined) {
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
    }}
 
export default Show;