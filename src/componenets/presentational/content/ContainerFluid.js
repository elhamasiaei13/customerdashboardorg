import React from 'react'
import Card from '../card/Card'
import Table from '../table/Table';
import { Route } from 'react-router-dom';
import Breadcrumb from '../breadcrumb/Breadcrumb';
import Main from './Main'
const  ContainerFluid = ({BreadcrumbTitle="title",body="salam"}) => {
    return (
        <>
            <Breadcrumb title={BreadcrumbTitle}></Breadcrumb>
            <div className="container-fluid">
                <div className="row">
                    {body}
                </div>
            </div>

        </>
    )

}
export default ContainerFluid;