import React, { Component } from 'react'
import FormData from '../presentational/input/FormData';
import ViewData from '../presentational/input/ViewData';
import ViewLabel from '../presentational/input/ViewLabel';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';

class PersonDataView extends Component {
    constructor(props) {
        super(props);
        this.state = {
            phone: ''
        }
    }
    render() {
        const data = this.props.data

        return (
            <>
            {data && <>
                    <ViewLabel value={<b>{data.name}</b>} />
                    {(data.clientId || data.nationalId) &&
                        <div className="form-group row">
                            {data.clientId ?
                                <ViewData
                                    label={
                                        <FormattedMessage
                                            id={"clientId"}
                                            defaultMessage={"clientId"}
                                        />
                                    }
                                    value={data.clientId ? data.clientId : false}
                                    pClassName={"widtdP"}
                                    valueClassName="padding-right"
                                />
                                : ''
                            }
                            {data.clientId & data.nationalId ? <span className="viewDatataSplit">/</span> : ''}
                            {data.nationalId ?
                                <ViewData
                                    label={
                                        <FormattedMessage
                                            id={"nationalId"}
                                            defaultMessage={"nationalId"}
                                        />
                                    }
                                    value={data.nationalId ? data.nationalId : false}
                                    valueClassName="padding-right"
                                    pClassName={"widtdP"}
                                />
                                : ''
                            }
                        </div>
                    }

                    {(data.country && data.province) &&
                        <ViewLabel
                            value={<><b> {data.city ? data.city : ' '}</b>
                                <span className={"gray"}> ({data.country ? data.country : ' '}&nbsp;,&nbsp;{data.province ? data.province : ' '})</span></>}
                        />
                    }

                    <ViewLabel
                        value={<>{data.address ? data.address : ' '} </>}
                    />

                    <FormData
                        label={
                            <FormattedMessage
                                id={"phone"}
                                defaultMessage={"phone"}
                            />
                        }
                        value={data.phones ? data.phones : ' '}
                        labelClassName=""
                        valueClassName="padding-right"

                    />

                    {data.postalCode ?
                        <FormData
                            label={
                                <FormattedMessage
                                    id={"postalCode"}
                                    defaultMessage={"postalCode"}
                                />
                            }
                            value={data.postalCode ? data.postalCode : ' '}
                            labelClassName=""
                            valueClassName="padding-right"
                        /> : ""
                    }
                </>
                }
            </>
        )
    }
}


PersonDataView.defaultProps = {
    data: {
        city: "teuu"
    }
}

export default (PersonDataView);
