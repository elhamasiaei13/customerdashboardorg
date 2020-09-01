import React from 'react'
import { FormattedMessage } from 'react-intl';
const Button = ({ label = "", type = "", htmlType = "",
    buttonclass = "", onClick, ...props }) => {
    return (
        <button
            {...props}
            type={htmlType}
            onClick={onClick}
            className={buttonclass + " btn " + type}
        >
            {label}
            {/* <FormattedMessage
                id={label}
                defaultMessage={label}
            /> */}
        </button>
    )
}
export default Button;