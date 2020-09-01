import React, { Component } from 'react'
import ContainerFluid from '../content/ContainerFluid';
import Header from '../Layout/Header';
import Sider from '../Layout/Sider';
import Content from '../../componenets/content/Content';
import Media from 'react-media';

// import Breadcrumb from './breadcrumb/Breadcrumb';
export default class Wrapper extends Component {


    _resize_mixin_callback() {
        const width = document.documentElement.clientWidth;
        var showuserinfo = document.getElementById("main-wrapper")
        if (width <= 766) {
            showuserinfo.dataset.sidebartype = "mini-sidebar"
            showuserinfo.className = " "
        }
        else {
            showuserinfo.dataset.sidebartype = "full"
        }

    }
    componentWillUnmount() {
        window.removeEventListener('resize', this._resize_mixin_callback);
    }
    componentDidMount() {
        window.addEventListener('resize', this._resize_mixin_callback);

        var change = document.getElementsByClassName("ti-menu ti-close")
        change[0].addEventListener("click", () => {
            var wrap = document.getElementById("main-wrapper")
            if (wrap.className === "show-sidebar") {
                wrap.dataset.sidebartype = "mini-sidebar"
                wrap.className = " "
            } else {
                wrap.className = "show-sidebar"

            }
        })

        document.getElementById("sweitchShowHideMenu").addEventListener("click", () => {
            var showuserinfo = document.getElementById("main-wrapper")

            if (showuserinfo.dataset.sidebartype == "mini-sidebar") {
                showuserinfo.dataset.sidebartype = "full"
                showuserinfo.className = ""
                // showuserinfo.className="mini-sidebar"

            } else {
                showuserinfo.dataset.sidebartype = "mini-sidebar"
                showuserinfo.className = "show-sidebar"
            }

        })

        //  topbartoggler d-block d-md-none waves-effect waves-light collapsed"


    }

    render() {
        const { children, sidebartype } = this.props
        this.state = {
            ariaExpanded: "false"
        }
        const style = {

        }

        return (


            <>
                {/* <div id="main-wrapper" data-theme="light"
                    data-layout="vertical" data-navbarbg="skin6" data-sidebartype="full"
                    data-sidebar-position="fixed" data-header-position="fixed"
                    data-boxed-layout="full" class="">
                    {children}

                </div> */}

                <div id="main-wrapper"
                    data-theme="dark"
                    data-layout="vertical"
                    data-navbarbg="skin6"
                    // data-sidebartype={sidebartype}
                    // data-sidebartype="mini-sidebar"
                    aria-expanded={this.state.ariaExpanded}
                    data-sidebartype="full"
                    data-sidebar-position="fixed"
                    data-header-position="fixed"
                    data-boxed-layout="full"
                    className={sidebartype == "mini-sidebar" ? 'mini-sidebar' : ''}
                >
                    {children}
                </div>

            </>
        )
    }
}

