import React, { Component } from 'react';
import Breadcrumb from '../presentational/breadcrumb/Breadcrumb';
import ContainerFluid from './ContainerFluid';
import Shipper from '../container/Shipper';
import ShipmentTracking from '../container/ShipmentTracking';
import Row from '../presentational/Row';
import Routing from '../presentational/Routing';
import ShipmentActionBar from '../container/ShipmentActionBar';
export default class Content extends Component {

    render() {

        return (
            <div className="page-wrapper">
            
                <Routing
                    path="/shipments"
                    component={<>
                        <Breadcrumb title="shipments" />
                        <ContainerFluid >
                            <Row>
                                <Shipper />
                            </Row>
                        </ContainerFluid>
                    </>}
                />

                <Routing
                    path="/Shipment"
                    component={<>
                        <Breadcrumb
                            nav={<ShipmentActionBar />}
                            title={<>
                                <img src="../../assets/image/imgTest.jpg" alt="user" className="rounded-circle" width="40"
                                />

                                ShipmentTracking</>} />
                        <ContainerFluid >
                            <ShipmentTracking/>
                        </ContainerFluid>

                    </>}
                />

            </div>
        )
    }
}
