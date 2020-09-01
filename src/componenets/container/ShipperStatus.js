import React, { Component } from 'react'
// import FormData from '../presentational/input/FormData';
import FormData from '../presentational/input/FormData';

export default class ShipperStatus extends Component {
    render() {
        return (
            <>
                <FormData
                    key="fdah1"
                    label=" کد ارجاع"
                    value=" 283.400ریال "
                    labelClassName=" "
                    valueClassName="col-md-3"
                />
                <FormData
                    key="fdah2"
                    label=" کد جمع آوری"
                    value="اعتباری"
                    labelClassName=" "
                    valueClassName="col-md-3"
                />
                <FormData
                    key="fdah3"
                    label="کد رهگیری "
                    value="s7s854sd6"
                    labelClassName=" "
                    valueClassName="col-md-3"
                />
                <FormData
                    key="fdah4"
                    label="کد رهگیری فورواردر"
                    value="تعداد ۶ عدد گوشی"
                    labelClassName=" "
                    valueClassName="col-md-3"
                />

            </>
        )
    }
}
