import React from 'react'
import { FormattedMessage } from 'react-intl';
import Select from 'react-select';

// const SetOptins = (options) => {
//     const head = []
//     options.map((item, index) => {
//         head.push(<option key={index}>{item}</option>)
//     })
//     return head;
// }

const Select1 = ({
    label = null,
    options = [],
    ...props }) => {

    return (
        <div className="form-group row">
            <label
                htmlFor="fname"
                className="col-sm-3 text-right control-label col-form-label margin-bottom"
            >
            {label}
               
            </label>
            <div className="col-sm-9">
                <Select
                    // className="form-control"
                    isMulti
                    {...props}
                    options={options}

                />

            </div>
        </div>


    )
}
export default Select1;
