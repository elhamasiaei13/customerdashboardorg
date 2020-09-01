import React, { Component } from 'react'

class TimeLine extends Component {

    render() {
        const { title, clock, address, iconName = "", color } = this.props

        return (
            <React.Fragment key={title + clock + address + iconName + color + Math.random().toString(16).slice(2)} >
                <li>
                    <i className={"timeline-icon fa " + iconName + " " + color} ></i>
                    <div key={title + clock + Math.random().toString(16).slice(2)} className="row timeline-item-content" >
                        <div className="col-md-7 offset-md-0">
                            <strong className="timeline-item-title">{title}</strong></div>
                        <div className="col-md-5 timeline-item-time dirLtR tex-al-l">
                            <i className="m-r-10 mdi mdi-clock "></i>{clock}</div>
                    </div>
                    <hr className="hr-m-p hrCard" />
                    <div key={address + Math.random().toString(16).slice(2)} className="row timeline-item-content">
                        <div className="col-md-12 ">
                            <div className="timeline-item-desc">{address}</div>
                        </div>
                    </div>
                </li>

            </React.Fragment>
        )
    }
}
TimeLine.defaultProps = {
    title: "۹ از ۹ بسته دریافت شد",
    clock: "1398-02-05 18:52",
    address: "نمایندگی تهران-دفتر مرکزی",
    // iconName: "mdi mdi-home",
    // color: "lable-green"
}
export default TimeLine;