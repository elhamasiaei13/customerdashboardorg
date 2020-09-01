import React, { Component } from 'react'

import user from "../../img/user.png"
import { FormattedMessage } from 'react-intl';
import { Link, withRouter } from 'react-router-dom/cjs/react-router-dom.min';
class DropDown extends Component {
    constructor(props) {
        super(props);
        this.state = {
            show: false,
            display: ''
        }
    }

    toggle() {
        const { show } = this.state
        if (show) {
            this.setState({ show: false, display: '' })
        }
        else {
            this.setState({ show: true, display: 'show' })
        }
    }
    render() {
        const { userName, userEmail } = this.props
        return (
            <ul tabIndex="1" className="navbar-nav float-right"
                    onBlur={() =>{
                        // this.setState({show:false, display : ''})
                setTimeout(() => {
                    this.setState({show:false, display : ''})
                }, 200);}}
                   
            >
                <li className="nav-item dropdown" >
                    <span onClick={() => this.toggle()}
                        className="nav-link dropdown-toggle waves-effect waves-dark pro-pic  "
                        data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        <i className="far fa-user-circle marginIcon"></i>

                        <span className="m-l-5 font-medium d-none d-sm-inline-block dash-m-l-10 ">
                            {userName}

                        </span>
                    </span>

                    <div className={"dropdown-menu dropdown-menu-right user-dd animated " + this.state.display}>
                        <span className="with-arrow">
                            <span className="bg-primary"></span>
                        </span>
                        <div className="d-flex no-block align-items-center p-15 bg-primary text-white m-b-10 ">

                            <div className="">
                                <img src={user} className="nav-searchWaybillNumber" alt="user" width="60" />
                            </div>

                            <div className="m-l-10">
                                <h4 className="m-b-0 marginUsername">{userName}</h4>
                                <p className=" m-b-0">{userEmail}</p>
                            </div>
                            <div className="m-l-10" >
                                {"   "}
                            </div>
                            <div className="m-l-10" >
                                {"   "}
                            </div>
                            <div className="m-l-10">
                                {"   "}
                            </div>
                            <div className="m-l-10">
                                {"   "}
                            </div>


                        </div>

                        <div className="profile-dis scrollable ps-container ps-theme-default"
                            data-ps-id="ac23f670-af30-c080-532f-f1559e774928">


                            <span className="dropdown-item" >
                                <Link to={"/resetPassword"}> <i className="far fa-user-circle marginIcon"></i>
                                    <FormattedMessage
                                        id={"resetPassword"}
                                        defaultMessage={"resetPassword"}
                                    /> </Link>
                            </span>

                            <div className="dropdown-divider"></div>
                            <span className="dropdown-item mouseHover" onClick={() => this.props.logOut()}>
                                <i className="fa fa-power-off m-r-5 m-l-5 marginIcon"></i>
                                <FormattedMessage
                                    id={"Logout"}
                                    defaultMessage={"Logout"}
                                /></span>

                            <div className="ps-scrollbar-y-rail" >
                                <div className="ps-scrollbar-y" tabIndex="0"></div></div></div>
                    </div>
                </li>
            </ul>
        )
    }
}

DropDown.defaultProps = { userName: "الهام آسیایی", userEmail: " ", show: "" }

export default withRouter(DropDown);