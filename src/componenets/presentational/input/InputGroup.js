import React from 'react'
export default function InputGroup({ iconName = 'ti-user', classNameInput, ...props }) {
    return (
        <div className="input-group mb-3">
            <div className="input-group-prepend">
                <span className="input-group-text" id="basic-addon1">
                    <i className={iconName}>
                    </i></span>
            </div>
            <input
                {...props}
                className={"form-control form-control-lg " + classNameInput}
            />
        </div>
    )
}
