import React from 'react'
import { Route } from 'react-router-dom';

export default function Routing({
    path="/",
    component,
}) {
    return (
        <Route exact path={path}
            render={() => {
                return (
                    component
                )
            }} />


    )
}
