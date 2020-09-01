import React, { Component } from 'react'
import MenuItem from './MenuItem'

export default class SubMenue extends Component {
    render() {
        const item = () => {
            const array = []
            this.props.children.map((item,index) => {
                array.push(<MenuItem
                    title={item.props.title}
                    key={item.props.key ?item.props.key:index}
                    href={item.props.href}
                    icon={item.props.icon}
                />)
            })
            return array;
        }
        return (
            <li className="sidebar-item" key={this.props.key?this.props.key:''} >
                <span className="sidebar-link has-arrow waves-effect waves-dark"  aria-expanded="false">
                    <i className="mdi mdi-tune"></i>
                    <span className="hide-menu">{this.props.title} </span>
                </span>

                <ul aria-expanded="false" className="collapse  first-level"  >
                    {item()}
                </ul>
            </li>
        )
    }
}
