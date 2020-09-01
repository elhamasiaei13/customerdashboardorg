
import React, { useState } from "react";
import { FormattedMessage } from "react-intl";
import moment from 'moment-jalaali'
import DatePicker from 'react-datepicker2';
import "react-persian-datepicker/lib/styles/basic.css"
import { DateTimeInput, DateInput } from 'react-hichestan-datetimepicker';

// import TimePicker from 'react-times';

// use material theme
// import 'react-times/css/material/default.css';
// or you can use classic theme
// import 'react-times/css/classic/default.css';

moment.loadPersian({ dialect: 'persian-modern' });
const ViewDatepicker = ({
    label = " ",
    type = "text",
    placeholder = "",
    helperText = "false",
    id = "fname",
    onChange,
    disabled = false,
    labelClassName = "col-sm-3",
    valueClassName = "col-md-4",
    onChangeTime,
    value = "",
    ...props }) => {
    return (
        <>
            <div className="form-group row">
                <label
                    htmlFor="fname"
                    className={" text-right control-label col-form-label margin-bottom " + labelClassName + " prvn-showValueDate"} >
                    &nbsp; : {label}

                </label>

                <div className={valueClassName} >
                    <input
                        placeholder=""
                        className="datepicker-input form-control dirLtR prvn-view-datepicker"
                        ype="text"
                        disabled={true}
                        value={value}>
                    </input>
                </div>
            </div>
        </>
    )
}
export default ViewDatepicker;
