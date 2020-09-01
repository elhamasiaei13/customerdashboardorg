import React from 'react'

export default function ButtonGroup({...props}) {
    return (
        <div className="button-group">
            {props.children}
        </div>
    )
}
