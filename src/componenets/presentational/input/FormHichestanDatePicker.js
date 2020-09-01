
import React, { useState } from "react";
import { FormattedMessage } from "react-intl";
import moment from 'moment-jalaali'
import DatePicker from 'react-datepicker2';
import "react-persian-datepicker/lib/styles/basic.css"
import { DateTimeInput, DateInput } from 'react-hichestan-datetimepicker';
import TimeField from 'react-simple-timefield';
import TimePickerWrapper from 'react-times';

// use material theme
import 'react-times/css/material/default.css';
// or you can use classic theme
// import 'react-times/css/classic/default.css';

moment.loadPersian({ dialect: 'persian-modern' });
const FormHichestanDatePicker = ({
    label = " ",
    type = "text",
    placeholder = "",
    helperText = "false",
    id = "fname",
    onChange,
    disabled = false,
    labelClassName = "col-sm-3",
    valueClassName = "col-md-3 col-sm-5",
    timeValue,
    onChangeTime,
    onInputDateChange = {},
    onModalTimeChange={},
    resetTime,
    resetDate,
    timeName = "timeName",
    DateValue = undefined,
    ...props }) => {
    return (
        <div className="form-group row">
            <label
                htmlFor="fname"
                className={" text-right control-label col-form-label margin-bottom " + labelClassName} >
                {label}
            </label>

            <div className={"col-md-4 col-sm-6 "} >

                <div className="date-input-with-dialog-main">
                    <DatePicker
                        value={DateValue}
                        className="datepicker-input form-control dirLtR"
                        autocomplete={"off"}
                        isGregorian={false}
                        timePicker={false}
                        {...props}
                        onChange={onChange}
                        onInputChange={onInputDateChange}

                    />
                    {DateValue &&

                        <div className="date-input-with-dialog-input-buttons date-input-with-dialog-calendar"
                            onClick={resetDate}>
                            <i className="ti-close" />
                        </div>}
                </div>
            </div>

            <div className={"col-md-3 col-sm-5"} >
           
                <div className="input-group">
                   
                    <TimeField
                        disabled = {DateValue ? false : true}
                        className = "datepicker-input form-control dirLtR"
                        name={timeName}
                        value={timeValue ? timeValue : "--:--"}
                        onChange={onChangeTime}
                    />
                    {timeValue && <div className="input-group-append"
                        // onClick={resetTime}
                        style={{
                            "position": "absolute",
                            "fontSize": "10px",
                            "left": "1.5em",
                            // "top": "calc(50% - .7em)"
                            "top": "calc(1% - .7em)"

                        }}
                    >
                        
                        <TimePickerWrapper 
                        time={timeValue}
                        customTriggerId={2} 
                         onTimeChange={onModalTimeChange}
                         />
                    </div>
                    }
                </div>
            </div>
        </div >
    )
}
export default FormHichestanDatePicker;
