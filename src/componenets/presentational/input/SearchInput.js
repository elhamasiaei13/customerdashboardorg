
import React from 'react'
import { FormattedMessage } from 'react-intl';

const SearchInput = ({
    label = "",
    ...props }) => {
    return (
        <div className=" input-group">
          
            <input type="text" className="form-control" placeholder="" aria-label="" aria-describedby="basic-addon1" />
            <div className="input-group-append">
                <button className="btn btn-info" type="button"><i className="ti-search"></i></button>
            </div>
        </div>

    )
}
export default SearchInput;
