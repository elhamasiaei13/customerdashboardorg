import React, { Component } from 'react'

class TimeLineLabel extends Component {
    render() {
        const { value } = this.props
        return (
            <React.Fragment key = {Math.random +value+"TimeLineLabel"}>
               <li   className="time-label ng-scope" ng-repeat-start="(key, value) in testData.shipmentTrackStateHistories ">
                <span className="bg-red ng-binding  display-8 label label-danger">
                    {value}				
                    	</span>
            </li>   
            </React.Fragment>
          
        )
    }
}

TimeLineLabel.defaultProps = {
    value: "1398-05-08"


}
export default TimeLineLabel;