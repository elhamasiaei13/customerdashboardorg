import React from 'react'

export default function CardChart({ cardTitle, ...props }) {
    return (
        <div className="card">
            <div className="card-body">
                <div className="d-flex align-items-center">
                    <div>
                        <h4 className="card-title">{cardTitle}</h4>
                    </div>
                    <div className="ml-auto">
                        <div className="dl m-b-10">
                        </div>
                    </div>
                </div>

                {props.children}

            </div>
        </div>


    )
}
