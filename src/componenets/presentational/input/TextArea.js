import React from 'react'
import { FormattedMessage } from 'react-intl';

const TextArea = ({ label = "label", type = "text", placeholder = "", helperText = "false", ...props }) => {
    return (
        <div className="form-group row  marginb">
            <label
                htmlFor="fname"
                className="col-sm-3 text-right control-label ">
                {label}
                {/* <FormattedMessage
                    id={label}
                    defaultMessage={label}
                /> */}
            </label>
            <div className="col-sm-9">
                <textarea className="form-control" rows="10" placeholder={placeholder}></textarea>
                {helperText === "false" ? '' :
                    <small id="textHelp" className="form-text text-muted">{helperText}</small>}

            </div>
        </div>
    )
}
export default TextArea;
