import React from 'react'

export default function ViewLabel(
    {
        value = "true",
        valueClassname = "col-md-9",

        ...props }) {
    return (
        <>
            {value==="true" ? '' :

                <div className="form-group row">
                    <label
                        htmlFor="fname"
                        className={"control-label col-form-label  "}
                    >
                        {value}
                    </label>


                </div>}
        </>
    )
} 