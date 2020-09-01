import React from 'react'

const FormData = ({
    label = "false",
    value = "false",
    labelClassName = "col-sm-3 col-md-6",
    valueClassName = " col-sm-9 col-md-6",
    pclassName = "",
    wrapperClassName = "",
    ...props }) => {
    return (
        <div className={"form-group row " + wrapperClassName}>
            {label !== "false" ? <label
                htmlFor="fname"
                className={"control-label  col-form-label  text-right " + labelClassName}
            >
                {" "}
                {label === "tohi" ? <>&nbsp;</> :
                    <>
                    {label}
                       &nbsp; :
                    </>}
            </label> : ''}
            {value !== "false" ?
                <div className={" " + valueClassName}>
                    <p className={"form-control " + pclassName}> {value} </p>
                </div>
                : ''}

        </div>

    )
}
export default FormData;
