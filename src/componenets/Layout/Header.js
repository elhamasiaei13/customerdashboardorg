import React, { useState } from 'react';
import DropDown from '../nav/DropDown';
import SearchNav from '../nav/SearchNav';
import { Link, withRouter } from 'react-router-dom/cjs/react-router-dom.min';

const Header = ({ toggleSider, sidebartype = "full", userName = "username", logOut }) => {

    const [ariaExpanded, setAriaExpanded] = useState(false);
    const [collapse, setCollapse] = useState("");
    const [show, setShow] = useState("");

    const changeCollapse = () => {
        var topbartoggler = document.getElementById("topbartogglerShowinfoUser")
        if (ariaExpanded ) {
            setAriaExpanded(false)
            setCollapse("collapsed")
            setShow(" ")
        } else {
            setAriaExpanded(true)
            setCollapse("")
            setShow("show")

        }
    }

    return (
        <header className="topbar" data-navbarbg="skin6" >
            <nav className="navbar top-navbar navbar-expand-md navbar-light">
                <div className="navbar-header" data-logobg="skin5">
                    <span className="nav-toggler waves-effect waves-light d-block d-md-none"  id="prvnMenuresponsive">
                        <i className="ti-menu ti-close">
                        </i>
                    </span>
                    <div className="navbar-brand">

                        <span href="index.html" className="logo">
                            <b className="logo-icon iconMenu">
                                {/* <i class="wi wi-sunset"> */}
                                     e-courier
                                {/* </i> */}

                            </b>
                        </span>
                        <span className="sidebartoggler d-none d-md-block"  data-sidebartype="mini-sidebar">
                            <i id="sweitchShowHideMenu" className="mdi mdi-toggle-switch font-20"></i>
                        </span>
                    </div>

                    <span id="topbartogglerShowinfoUser" className={"topbartoggler d-block d-md-none waves-effect waves-light " +collapse }
                        data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                        aria-expanded={ariaExpanded} aria-label="Toggle navigation">
                        <i id="showtabbarheader-more" className="ti-more"
                            onClick={() => changeCollapse()}  ></i>
                    </span>
                </div>

                <div className={"navbar-collapse collapse " + show }
                style={ariaExpanded?{ }:{"display":"none"}}
                id="navbarSupportedContent" data-navbarbg="skin6">
                    <SearchNav />
                    <DropDown  userName={userName} logOut={() => logOut()} />  
                </div>
            </nav>


            {/* <nav className="navbar top-navbar navbar-expand-md navbar-light">
                <div className="navbar-header" data-logobg="skin5">
                    <div className="navbar-brand ">
                    <a class="sidebartoggler d-none d-md-block" href="javascript:void(0)" data-sidebartype="mini-sidebar">
                            <i class="mdi mdi-toggle-switch mdi-toggle-switch-off font-20"></i>
                        </a>
                        {sidebartype === 'full'
                            ?
                            <>
                                <span className="logo">
                                    <b className="logo-icon iconMenu ">
                                    </b>
                                    <span className="logo-text iconMenu ">
                                        e-courier
                                    </span>
                                </span>
                                <span
                                    onClick={() => { toggleSider("mini-sidebar") }}
                                    className="sidebartoggler d-none d-md-block"
                                    data-sidebartype="full">
                                    <i className="mdi mdi-toggle-switch mdi-toggle-switch-off font-20"></i>
                                </span>
                            </>
                            :
                            <span
                                onClick={() => { toggleSider("full") }}
                                className="sidebartoggler d-none d-md-block"
                                data-sidebartype="mini-sidebar">
                                <i className="mdi mdi-toggle-switch mdi-toggle-switch-on font-20"></i>
                            </span>}
                    </div>
                </div>
                <div
                    className="navbar-collapse collapse" id="navbarSupportedContent" data-navbarbg="skin6">
                    <SearchNav />
                    <DropDown userName={userName} logOut={() => logOut()} />

                </div>
            </nav> */}
        </header>
    )
}
export default withRouter(Header);
;