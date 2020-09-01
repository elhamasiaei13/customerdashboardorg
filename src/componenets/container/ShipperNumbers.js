import React, { Component } from 'react'
// import FormData from '../presentational/input/FormData';
import FormData from '../presentational/input/FormData';
import { FormattedMessage } from 'react-intl';

export default class ShipperNumbers extends Component {

    render() {
        const { data } = this.props
        return (
            <>
                <FormData
                    label={
                        <FormattedMessage
                            id={"refrense number"}
                            defaultMessage={"refrense number"}
                        />
                    }
                    value={data.reference}
                    labelClassName="col-sm-5 col-md-6"
                        valueClassName="col-md-6 col-sm-7"
                    // labelClassName="col-sm-4 "
                    // valueClassName="col-md-8 col-sm-8"
                />
                <FormData
                    label={
                        <FormattedMessage
                            id={"Tracking Code"}
                            defaultMessage={"Tracking Code"}
                        />
                    }
                    value={data.trackingNumber}
                    labelClassName="col-sm-5 col-md-6"
                        valueClassName="col-md-6 col-sm-7"
                    // labelClassName="col-sm-4 "
                    // valueClassName="col-md-8 col-sm-8"
                />
                <FormData
                    label={
                        <FormattedMessage
                            id={"pickup number"}
                            defaultMessage={"pickup number"}
                        />
                    }
                    value={data.pickupNumber}
                    labelClassName="col-sm-5 col-md-6"
                        valueClassName="col-md-6 col-sm-7"
                    // labelClassName="col-sm-4 "
                    // valueClassName="col-md-8 col-sm-8"
                />
                <FormData
                    label={
                        <FormattedMessage
                            id={"payment refrence info"}
                            defaultMessage={"payment refrence info"}
                        />
                    }
                    value={data.forwarderReferenceNumber}
                    labelClassName="col-sm-5 col-md-6"
                        valueClassName="col-md-6 col-sm-7"
                    // labelClassName="col-sm-4 "
                    // valueClassName="col-md-8 col-sm-8"
                />

            </>
        )
    }
}
ShipperNumbers.defaultProps = {
    data: {
        totalAmount: 'totalAmount',
        paymentMethod: 'paymentMethod',
        chargeParty: 'chargeParty',
        paymentReferenceInfo: 'paymentReferenceInfo'
    }
}