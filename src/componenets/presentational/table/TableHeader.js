import React, { Component } from 'react'
import { FormattedMessage } from 'react-intl';

export default class TableHeader extends Component {
    constructor(props) {
        super(props);
        this.state = {
            order: "asc",
            type: ''
        }
    }

    render() {
        const { lable, showIconSort } = this.props
        const { order } = this.state

        const head = {
            paddingRight: "0",
            paddingLeft: "0px",
            // textAlign: "left"
        };

        const th = {
            // BackgroundColor:"red"
            backgroundColor: "#303f4f",
            // paddingRight: "0px",
            // paddingLeft: "0px",
            // textAlign: "center"
        };

        // const heightdsc = {
        //     paddingRight: "0",
        //     paddingLeft: "10px",
        //     color: "#a9a4a4d9"
        // };
        return (
            <>
                {
                    showIconSort ?
                        <th
                            className="mouseHover"
                            style={th}
                            onClick={() => {
                                if (order == "asc") {
                                    this.setState({ order: "des", type: lable })
                                } else {
                                    this.setState({ order: "asc", type: lable })
                                }
                                this.props.reportName(lable)
                            }}>
                            <div className="row">
                                <div className=" col-md-2 col-sm-2 " style={head}>
                                    <svg viewBox="0 0 1020 1020" focusable="false" className="" data-icon="caret-up" width="1em"
                                        color="#a0a0a0ba"
                                        height="1em"
                                        // height="auto"
                                        fill="currentColor" aria-hidden="true">
                                        {
                                            order == "asc" ?
                                                <path d="M858.9 689L530.5 308.2c-9.4-10.9-27.5-10.9-37 0L165.1 689c-12.2 14.2-1.2 35 18.5 35h656.8c19.7 0 30.7-20.8 18.5-35z">
                                                </path>
                                                :
                                                <path d="M840.4 300H183.6c-19.7 0-30.7 20.8-18.5 35l328.4 380.8c9.4 10.9 27.5 10.9 37 0L858.9 335c12.2-14.2 1.2-35-18.5-35z">
                                                </path>
                                        }
                                    </svg>
                                </div>
                                <div className=" col-md-10 col-sm-10 " style={{ "paddingLeft": "0px" }}>
                                    <FormattedMessage
                                        id={lable}
                                        defaultMessage={lable}
                                    />
                                </div>
                            </div>
                        </th >
                        :
                        <th className="mouseHover" onClick={() => this.props.reportName(lable)}>
                            <FormattedMessage
                                id={lable}
                                defaultMessage={lable}
                            />
                        </th>
                }
            </>
        )
    }
}
