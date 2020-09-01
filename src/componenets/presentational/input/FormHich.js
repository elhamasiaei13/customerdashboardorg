
import React, { useState } from "react";
import { FormattedMessage } from "react-intl";
import moment from 'moment-jalaali'
import {DateTimeInput} from 'react-hichestan-datetimepicker';
import "react-persian-datepicker/lib/styles/basic.css"

moment.loadPersian({ dialect: 'persian-modern' });
const FormDHich = ({
    label = " ",
    type = "text",
    placeholder = "",
    helperText = "false",
    id = "fname",
    onChange,
    disabled=false,
    labelClassName = "col-sm-3",
    valueClassName = "col-md-6",
    value,
    component,
    ...props }) => {
    return (
        <>
            <div className="form-group row">
                <label
                    htmlFor="fname"
                    className={" text-right control-label col-form-label margin-bottom "+labelClassName} >
                    {label}
                    {/* <FormattedMessage
                        id={label}
                        defaultMessage={label}
                    /> */}
                </label>
                <div className={valueClassName} >
                    {/* <div className="input-group"> */}
                    {component}
                        {/* <DateTimeInput
                            id="uname"
                            // {...props}
                            // className="form-control dirLtR"
                            // className="form-control dirLtR"
                            // isGregorian={false}
                            onChange={onChange}
                            value={value}
                            // disabled={disabled}
                            // placeholder={"iiiii"}
                        /> */}
                        {/* <div className="input-group-append">
                            <span className="input-group-text">
                                <i className="m-r-10 mdi mdi-calendar-text">  </i>
                            </span>
                        </div> */}
                    {/* </div> */}
                </div>

            </div>



        </>




    )
}
export default FormDHich;
