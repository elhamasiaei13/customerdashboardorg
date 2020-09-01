import React from "react";
import mapData from "../../../config/Api";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
// import $ from "jquery";
// import $div from "jquery";
require("highcharts/modules/map")(Highcharts);

const dataTest = [
    { id: "IR.AL",name:"t1", count: "1050", outboundParcels: 51.507222, inboundParcels: -0.1275 },
    { id: "IR.AL",name:"t2",  count: "1050", outboundParcels: 51.507222, inboundParcels: -0.1275 },

]

class MapChart extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            mapData: null
        };


        this.options = {
            title: {
                display:false,
                style: {
                    color: "blue",
                    display:"none"
                }
            },
            chart: {
                backgroundColor: "transparent",
                // type: "map",
                map: 'countries/gb/gb-all',
                // map: null
            },
            mapNavigation: {
                enabled: true,
                enableButtons: false
            },
            credits: {
                enabled: false
            },
            colorAxis: {
                dataClasses: [ ]
            },
            tooltip: {
                split: false ,
                // distance: 30,
                padding: 8,
                pointFormatter: function () {
                    return ('The value for <b>'+this.name +'</b> is <b>'+ this.count);
                  }
               
            },
            
           
            series: [
                {
                    name: "delivered",
                    dataLabels: {
                        // enabled: true,
                        color: "#FFFFFF",
                        format: "{point.postal-code}",
                        style: {
                            textTransform: "uppercase"
                        }
                    },
                   
                    cursor: "pointer",
                    joinBy: "postal-code",
                    data: dataTest ,
                  
                },
                {
                    name: 'Separators',
                    type: 'mapline',
                    nullColor: 'blue',
                    // showInLegend: false,
                    enableMouseTracking: false
                }
            ]
        };

        // get the world map data
        mapData.getWorld().then(r => {
            this.setState({ mapData: r.data }, () => {
                this.options.series[0].data = []; //make sure data is empty before  fill
                this.options["chart"]["map"] = this.state.mapData; // set the map data of the graph (using the world graph)
                // this.options.row,
                //     $div = $('<div></div>')
                //         .dialog({
                //             title: this.name,
                //             width: 320,
                //             height: 300
                //         });

                // filling up some dummy data with values 1 and 2
                // instead of using the google sheet
                for (let i in this.state.mapData["features"]) {
                    let mapInfo = this.state.mapData["features"][i];
                        var postalCode = mapInfo.properties["postal-code"];

                        var name = mapInfo["properties"]["name"];
                        var value = (i % 2) + 1;
                        var type = value === 1 ? "widget name one" : "widget name two";
                        let index1 = dataTest.findIndex((item) => { return item.id === this.id })
                        let index = Math.abs(index1)
                        let count = dataTest[index].count ? dataTest[index].count : "op"
                        this.options.series[0].data.push({
                            value: value,
                            name: name,
                            "postal-code": postalCode,
                            // row: row,
                            type: type,
                            // id: id,
                            count: count,
                            color: "#f1f7fa"
                            // color: "#e5e8ed"
                        });
                    // }
                }
                // updating the map options
                this.setState({ mapOptions: this.options });
            });
        });
    }

    render() {
        return (
            <div>

                {this.state.mapOptions ? (
                    <HighchartsReact
                        highcharts={Highcharts}
                        constructorType={"mapChart"}
                        options={this.state.mapOptions}
                    />
                ) : (
                        ""
                    )}
            </div>
        );
    }
}

export default MapChart;
