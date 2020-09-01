
import React, { useState } from "react";
import { FormattedMessage } from "react-intl";
import moment from 'moment-jalaali'
import DatePicker from 'react-datepicker2';
import "react-persian-datepicker/lib/styles/basic.css"
import { DateTimeInput } from 'react-hichestan-datetimepicker';

moment.loadPersian({ dialect: 'persian-modern' });
const FormDatePicker = ({
    label = " ",
    type = "text",
    placeholder = "",
    helperText = "false",
    id = "fname",
    onChange,
    disabled = false,
    labelClassName = "col-sm-3",
    valueClassName = "col-md-6",
    ...props }) => {
    return (
        <>
            <div className="form-group row">
                <label
                    htmlFor="fname"
                    className={" text-right control-label col-form-label margin-bottom " + labelClassName} >
                    {label}
                </label>
                <div className={valueClassName} >
                    {/* <div className="input-group"> */}
                    {/* {disabled ? */}
                        <DatePicker

                            id="uname"
                            {...props}
                            // className="form-control dirLtR"
                            className="form-control dirLtR"
                            isgregorian={false}
                            onChange={onChange}
                            disabled={disabled}
                        />
                    
                </div>
            </div>
        </>
    )
}
export default FormDatePicker;
