import React from 'react'
import { FormattedMessage } from 'react-intl';

export default function ShipperResultPartsItem({
    label = "false",
    value = "",
    iconName = "mdi mdi-star-circle",
    iconClass = "text-cyan",
    unit="",
    ...props }) {
    return (
        <>
            <div className="col-lg-3 col-md-6">
                <div className="d-flex align-items-center">
                    <div className="m-r-10">
                        <span className={iconClass + " display-5"}>
                            <i className={iconName}></i>
                        </span></div>
                    <div>
                        <span>
                            {label}
                           

                        </span>
                        <h3 className="font-medium m-b-0 widthStatus">{value}
                        <span className="padigUnit">
                        {unit}
                            
                            </span>
                        </h3>
                    </div>
                </div>
            </div>
         

        </>
    )
}
