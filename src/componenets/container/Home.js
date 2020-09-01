import React, { Component } from 'react'
import Chart from '../presentational/chart/Chart'
import Col from '../presentational/Col';
import Row from '../presentational/Row';
import Card from '../presentational/card/Card';
import Progress from '../presentational/progress/Progress';
import StackChart from '../presentational/chart/StackChart'
import MApChart from '../presentational/chart/MapChart';
import Map from '../presentational/chart/Map';
import MapAdvanced from '../presentational/chart/MapAdvanced';
import CardChart from '../presentational/card/CardChart';
import '../presentational/Proj4/Proj4';
import Table from '../presentational/table/Table';

const gdpData = {
    "IR-QZVN-P": 15888.97,
    "IR-CHBK-P": 188.97,
}

export default class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {}

    }
    render() {
        return (
            <>
                <Row>
                    <Col md={12} >
                        <Card cardTitle="Sales Ratio">

                            <StackChart
                                categories={['شنبه', 'یکشنبه', 'دوشنبه', 'سه شنبه', 'چهار شنبه', 'پنج شنبه', 'جمعه']}
                                colors={[
                                    'rgb(139, 94, 221)', 'rgb(90, 193, 70)', '#fa5838', 'rgb(19, 126, 255)',
                                    "#f81300", "#2310a4", "#16ac00", "#f9c600"]}
                                data={[{
                                    name: 'DELIVERED',
                                    data: [1, 3, 4, 7, 2, 5, 5],
                                },
                                {
                                    name: 'ISSUED',
                                    data: [2, 2, 3, 2, 1, 3, 5]
                                },
                                {
                                    name: 'VOIDED',
                                    data: [2, 2, 3, 2, 1, 3, 8]
                                },
                                {
                                    name: 'RETURNED',
                                    data: [3, 4, 4, 2, 5, 3, 10]
                                }]}
                                // title={"title"}
                                titleY={"labelY"}
                            />
                        </Card>
                    </Col>
                </Row>

                {/* <Card> */}
                <Row>
                    <Col md={6}>
                        <Card cardClass=" " >
                            <div className="d-flex align-items-center">
                                <div>
                                    <h4 classNames="card-title">نمایش وضعیت</h4>
                                </div>
                                <div className="ml-auto">

                                </div>
                            </div>

                            <Map
                                gdpData={gdpData}
                                backgroundColor="#fff"
                                onRegionTipShow={(e, el, code) => {
                                    el.html(el.html() + ' ( تعداد مرسوله ها - ' + gdpData[code] + ')');
                                }}
                                series={{
                                    regions: [{
                                        values: [],
                                        scale: ['#C8EEFF', '#0071A4'],
                                        normalizeFunction: 'polynomial'
                                    }]
                                }}
                                regionStyle={{
                                    initial: {
                                        fill: "#cccccc",
                                        "fill-opacity": 1,
                                        stroke: "none",
                                        "stroke-width": 0,
                                        "stroke-opacity": 0
                                    },
                                    hover: {
                                        "fill-opacity": 1,
                                        fill: "#C8EEFF",
                                        cursor: "pointer"
                                    },
                                    selected: {
                                        fill: "#dce3e8"
                                    }
                                }}
                            />
                            <Table
                                classTable=" table-striped table-hover"
                                classHeader="bg-inverse text-white text-center"
                                theader={['#', "name", "outboundParcels", "inboundParcels"]}
                                tbody={[{ test: 1, name: "tehran", count: "1050", outboundParcels: 51.507222, inboundParcels: -0.1275 },
                                { name: "esfahan", count: "1050", outboundParcels: 51.507222, inboundParcels: -0.1275 }]}

                                classBody=''
                                defaultKey='defaultKey'
                            // sort={true}
                            />

                        </Card>
                    </Col>
                    <Col md={6}>
                        <Card cardClass=" ">
                            <div className="d-flex align-items-center">
                                <div>
                                    <h4 className ="card-title">نمایش وضعیت</h4>
                                </div>

                            </div>
                            <Map
                                // map={'ir_mill'}
                                backgroundColor="#fff"
                                regionsSelectable={true}
                                markersSelectable={true}
                                hoverOpacity={0.7}
                                // markers={markers}
                                containerStyle={{
                                    width: '100%',
                                    height: '100%'
                                }}
                                markerStyle={{
                                    initial: {
                                        fill: 'grey',
                                        stroke: '#505050',
                                        "fill-opacity": 1,
                                        "stroke-width": 1,
                                        "stroke-opacity": 1,
                                        r: 5
                                    },
                                    hover: {
                                        stroke: 'black',
                                        "stroke-width": 2
                                    },
                                    selected: {
                                        // fill: 'blue'
                                    },
                                    selectedHover: {
                                    }
                                }}
                                markers={[
                                    { latLng: [30.33, 48.30], name: "My marker name", style: { fill: 'yellow' } },
                                    { latLng: [31.33, 48.30], name: "My marker name", style: { fill: 'yellow' } },
                                    { latLng: [30.33, 47.30], name: "My marker name", style: { fill: 'yellow' } },
                                    { latLng: [41.8781136, -87.6297982], name: "My marker name", style: { fill: 'yellow' } },
                                ]}
                                regionStyle={{
                                    initial: {
                                        fill: '#dce3e8'
                                    }
                                }}
                                selected={{
                                    fill: 'red'
                                }}
                                series={{
                                    markers: [{
                                        attribute: 'r',
                                        scale: [5, 15],
                                        values: [
                                            887.70,
                                            755.16,
                                            300010.69,
                                            405.17,
                                            248.31,
                                            207.35,
                                            217.22,
                                            280.71,
                                            210.32,
                                            325.42
                                        ]
                                    }]
                                }}
                                containerClassName="map"

                            />
                            {/* <MapAdvanced /> */}
                            <Table
                                classTable=" table-striped table-hover"
                                classHeader="bg-inverse text-white text-center"
                                theader={['#', "city", "outboundParcels", "inboundParcels"]}
                                tbody={[{
                                    "city": "tehran",
                                    "outboundParcels": 32.37,
                                    "inboundParcels": 51.300629,
                                    "z": 205764,
                                },
                                {
                                    "city": "emarat",
                                    "outboundParcels": 33.39,
                                    "inboundParcels": 52.300629,
                                    "z": 205764,
                                },
                                {
                                    "city": "esfahan",
                                    "outboundParcels": 33.59,
                                    "inboundParcels": 52.300629,
                                    "z": 205764
                                },
                                {
                                    "city": "emarat",
                                    "outboundParcels": 33.39,
                                    "inboundParcels": 52.300629,
                                    "z": 205764,
                                },
                                {
                                    "city": "esfahan",
                                    "outboundParcels": 33.59,
                                    "inboundParcels": 52.300629,
                                    "z": 205764
                                },
                                ]}

                                classBody=''
                                defaultKey='defaultKey'
                            // sort={true}
                            />

                        </Card>
                    </Col>
                </Row>
                {/* </Card> */}


            </>

        )
    }
}
