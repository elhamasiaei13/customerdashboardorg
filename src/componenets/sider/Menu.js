import React, { Component } from 'react'
import SubMenu from './SubMenu'
import MenuItem from './MenuItem'

export default class Menu extends Component {
    render() {
        // const { childeren } = this.props
        // const Showchilderen = () => { this.props.childeren ? {showItem() }: ''; }
        const array = [<MenuItem
            title={"testm"}
            href="#2"
        />]
        const arraySub=[]
        const ChildSubMenu = (item) => {
          return  <MenuItem
                title={"testm"}
                href="#2"
            />
        }
        const Showchilderen = () => {
            this.props.children.map((item) => {
                if (item.props.type === "SubMenu") {
                    array.push(
                        <SubMenu href="javascript:void(0)">
                            
                            <MenuItem
                                title={item.props.title}
                                href={item.props.href}
                            />
                            {ChildSubMenu(item)}

                        </SubMenu >
                    )
                } else if (item.props.type === "MenuItem") {
                    array.push(
                        <MenuItem
                            title={"testm"}
                            href="#2"
                        />
                    )
                }
            })
            return (array)

        }
        return (
            <aside  className="left-sidebar" >
                <div className="scroll-sidebar">
                    <nav className="sidebar-nav" >
                        <ul id="sidebarnav" id="menu">
                            {Showchilderen()}
                            
                        </ul>
                    </nav>
                </div>
            </aside>
        )
    }
}
