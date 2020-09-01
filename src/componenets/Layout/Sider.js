import React from 'react';
import MenuItem from '../sider/MenuItem'
import SubMenu from '../sider/SubMenu'
import Menu from '../container/Menu'
import { Link } from 'react-router-dom/cjs/react-router-dom';
const Sider = ({...props}) => {
    return (
        <aside className="left-sidebar"
        // test
        data-sidebarbg="skin5" >
            <div className="scroll-sidebar ps-container ps-theme-default ps-active-y" 
             data-ps-id="a65c3f89-0ccd-33db-d761-cbf0ff3a6f45
            ">
                <nav className="sidebar-nav">
                    <ul id="sidebarnav">
              {props.children}
                    </ul>
                </nav>
            </div>
            {/*  */}
            <div className="ps-scrollbar-x-rail" >
<div className="ps-scrollbar-x" tabIndex="0" >
</div>
</div>
<div className="ps-scrollbar-y-rail" >
<div className="ps-scrollbar-y" tabIndex="0" >
</div>
</div>
{/* // */}
        </aside>


    )
}

export default (Sider)