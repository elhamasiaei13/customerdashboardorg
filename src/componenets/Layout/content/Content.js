import React, { Component } from 'react';
// import Card from '../presentational/card/Card';
// import { Route } from 'react-router-dom';
// import Breadcrumb from '../presentational/breadcrumb/Breadcrumb';
// import ContainerFluid from './ContainerFluid';
// import Shipper from '../container/Shipper';
// import ShipmentTracking from '../container/ShipmentTracking';
// import Row from '../presentational/Row';
// import Col from '../presentational/Col';
// import Routing from '../presentational/Routing';
// import Wrapper from '../presentational/Wrapper';
// import Button from '../presentational/button/Button';
// import { breakStatement } from '@babel/types';
// import ShipmentActionBar from '../container/ShipmentActionBar';
// import SearchNav from '../nav/SearchNav'
export default class Content extends Component {

    render() {

        return (
            <div className="page-wrapper">
            
              {this.props.children} 

            </div>
        )
    }
}
