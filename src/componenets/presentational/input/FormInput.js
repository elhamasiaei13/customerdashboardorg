import React from 'react'
import { FormattedMessage } from 'react-intl';

const FormInput = ({
    label = " ",
    type = "text",
    placeholder = "",
    helperText = "false",
    onChange,
    id = "fname",
    ...props }) => {
    return (
        <div className="form-group row ">
            <label
                htmlFor="fname"
                className="col-sm-3  col-md-6 text-right control-label "
            >
            {label}
                {/* <FormattedMessage
                    id={label}
                    defaultMessage={label}
                /> */}
            </label>
            <div className="col-sm-9  col-md-6 ">
                <input
                    {...props}
                    type={type}
                    className="form-control"
                    id={id}
                    placeholder={placeholder}
                    onChange={onChange}
                />
                {helperText === "false" ? '' :
                    <small
                        id="textHelp"
                        className="form-text text-muted"
                        >
                        {helperText}
                    </small>
                }
            </div>
        </div>
    )
}
export default FormInput;
