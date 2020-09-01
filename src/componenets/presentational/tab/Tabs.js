import React, { Component } from 'react'
import TabPane from './TabPane'

export default class Tabs extends Component {

    CreateTabPane() {
        const array = []
        this.props.children.map((item) => {
            array.push(<TabPane name={item.props.name} />)
        })
        return (array)
    }

    CreateContent() {
        const array = []
        this.props.children.map((item) => {
            array.push(
                <div className="tab-pane p-20 "
                    id={item.props.name}
                    role="tabpanel">
                    {item.props.children}
                </div>
            )
        })
        return (array)
    }

    render() {
        return (
            <div>
                <ul className="nav nav-tabs" role="tablist">
                    {this.CreateTabPane()}
                  
                </ul>

                <div className="tab-content tabcontent-border">
                    {this.CreateContent()}
                   
                </div>
            </div>
        )
    }
}

