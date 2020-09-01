import React from 'react'

export default function Progress({ width = 0, height = 0, color = "blue", ...props }) {
    return (
        <>
            <div className="d-flex no-block align-items-center">
                <div>
                    <i className="mdi mdi-emoticon font-20 text-muted"></i>
                    <p className="font-16 m-b-5">New Clients</p>
                </div>
                <div className="ml-auto">
                    <h1 className="font-light text-right">23</h1>
                </div>
            </div>
            <div className="progress">
                <div
                    {...props}
                    className={"progress-bar"}
                    role="progressbar"
                    style={{ "width": width + "%", "height": height + "px", "backgroundColor": color }}
                    aria-valuenow="25"
                    aria-valuemin="0"
                    aria-valuemax="100">
                </div>
            </div>
        </>
    )
}
