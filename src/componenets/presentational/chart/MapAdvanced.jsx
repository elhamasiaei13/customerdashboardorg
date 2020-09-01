import React from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import Axios from "axios";

require("highcharts/modules/map")(Highcharts);

const dataTest = [{
  "city": "tehran",
  "lat": 32.37,
  "lon": 51.300629,
  "z": 205764,
},
{
  "city": "emarat",
  "lat": 33.39,
  "lon": 52.300629,
  "z": 205764,
},
{
  "city": "esfahan",
  "lat": 33.59,
  "lon": 52.300629,
  "z": 205764
},
]

class MapAdvanced extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mapData: null
    };
    this.options =
    {
      title: {
        text: "Widget click by location",
        style: {
          color: "#fff"
        }
      },
      chart: {
        backgroundColor: "#fff",
        // type: "map",
        map: 'countries/gb/gb-all',
        map: null
      },
      mapNavigation: {
        enabled: true,
        enableButtons: false
      },
      credits: {
        enabled: false
      },
      
      tooltip: {
        pointFormatter: function () {
          return (this.name + this.city);
        }
      },
      legend: {
        enabled: true,
        align: "right",
        verticalAlign: "top",
        x: -100,
        y: 70,
        floating: true,
        layout: "vertical",
        valueDecimals: 0,
        backgroundColor: (Highcharts.defaultOptions &&
          Highcharts.defaultOptions.legend &&
          Highcharts.defaultOptions.legend.backgroundColor) ||
          "rgba(0, 255, 255, 0)"
      },
      series: [{
        name: 'Basemap',
        mapData: Highcharts.maps['countries/ir/ir-all'],
        borderColor: 'black',
        // color: 'red',
        showInLegend: false
      }, {
        name: 'Separators',
        type: 'mapline',
        data: Highcharts.maps['countries/ir/ir-all'],
        enableMouseTracking: false,
        showInLegend: false
      }, {
        type: 'mapbubble',
        dataLabels: {
          enabled: true,
          format: '{point.city}'
        },
        // name: 'Cities',
        data: dataTest,
        maxSize: '12%',
        color: "rgba(124,181,236,0.5)"

      }]

    };

    Axios.get("https://code.highcharts.com/mapdata/countries/ir/ir-all.geo.json").then(r => {
      this.setState({ mapData: r.data }, () => {
        this.options.series[0].data = []; //make sure data is empty before  fill
        this.options["chart"]["map"] = this.state.mapData; // set the map data of the graph (using the world graph)

        for (let i in dataTest) {
          // let mapInfo = this.state.mapData["features"][i];
          // if (dataTest["abbrev"]) {
          var abbrev = dataTest["city"];
          // var name = mapInfo["properties"]["name"];
          var value = (i % 2) + 1;
          var type = value === 1 ? "widget name one" : "widget name two";
          // var row = mapInfo.id;
          // var id = mapInfo.id;
          // let index1 = dataTest.findIndex((item) => { return item.id == this.id })
          // let index = Math.abs(index1)
          // let count = dataTest[index].count ? dataTest[index].count : "op"
          this.options.series[0].data.push({
            city: abbrev,
            value: 1,
            // name: name,
            // "postal-code": postalCode,
            // row: row,
            type: 1,
            // id: id,
            // count: count
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
      <>
        {this.state.mapOptions ? (
          <HighchartsReact
            highcharts={Highcharts}
            constructorType={"mapChart"}
            options={this.state.mapOptions}
          />
        ) : (
            ""
          )}
      </>
    );
  }
}

export default MapAdvanced;
