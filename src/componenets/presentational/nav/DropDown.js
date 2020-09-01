import React from 'react'
const DropDown = ({ userName = "Jonathan Doe", userEmail = "jon@gmail.com" }) => {
    return (
        <li className="nav-item dropdown" >

            <span
                className="nav-link dropdown-toggle waves-effect waves-dark pro-pic"
                data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                <img src="../../assets/image/imgTest.jpg" alt="user" className="rounded-circle" width="40" />
                <span className="m-l-5 font-medium d-none d-sm-inline-block">
                    {userName}
                    <i className="mdi mdi-chevron-down"></i>
                </span>
            </span>

            <div className="dropdown-menu dropdown-menu-right user-dd animated flipInY ">
                <span className="with-arrow">
                    <span className="bg-primary"></span>
                </span>
                <div className="d-flex no-block align-items-center p-15 bg-primary text-white m-b-10">
                    <div className="">
                        <img src="../../assets/image/imgTest.jpg"
                            alt="user" className="rounded-circle" width="60" />
                    </div>
                    <div className="m-l-10">
                        <h4 className="m-b-0">{userName}</h4>
                        <p className=" m-b-0">{userEmail}</p>
                    </div>
                </div>

                <div className="profile-dis scrollable ps-container ps-theme-default"
                    data-ps-id="ac23f670-af30-c080-532f-f1559e774928">
                    <span className="dropdown-item" >
                        <i className="ti-user m-r-5 m-l-5"></i>
                        My Profile</span>
                    <div className="dropdown-divider"></div>

                    <div className="dropdown-divider"></div>
                    <span className="dropdown-item" >
                        <i className="fa fa-power-off m-r-5 m-l-5"></i>
                        Logout</span>
                    <div className="dropdown-divider"></div>
                    <div className="ps-scrollbar-x-rail">
                        <div className="ps-scrollbar-x" tabIndex="0" >
                        </div>
                    </div><div className="ps-scrollbar-y-rail" >
                        <div className="ps-scrollbar-y" tabIndex="0"></div>
                    </div></div>

            </div>
        </li>
    )
}
export default DropDown;