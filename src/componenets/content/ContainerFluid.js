

import React from 'react'
const ContainerFluid = ({ BreadcrumbTitle = "false", body = "salam", nav, ...props }) => {
    return (
        <div className="container-fluid">
            {props.children}
        </div>

    )
}
export default ContainerFluid;