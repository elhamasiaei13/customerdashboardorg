import React, { Component } from 'react'
// import FormData from '../presentational/input/FormData';
import FormData from '../presentational/input/FormData';
import { FormattedMessage } from 'react-intl';
export default class ShipperCOD extends Component {

    render() {
        const { data } = this.props
        return (
            <>
                {data && <> <FormData
                    label={
                        <FormattedMessage
                            id={"codAmount"}
                            defaultMessage={"codAmount"}
                        />
                    }
                    value={data.codAmount}
                    labelClassName="col-sm-5 col-md-6"
                        valueClassName="col-md-6 col-sm-7"
                />

                    <FormData
                        label={
                            <FormattedMessage
                                id={"codPaymentReferenceInfo"}
                                defaultMessage={"codPaymentReferenceInfo"}
                            />
                        }
                        value={data.codPaymentReferenceInfo}
                        labelClassName="col-sm-5 col-md-6"
                        valueClassName="col-md-6 col-sm-7"
                        />

                    <FormData
                        label="tohi"
                        // value={data.shippingChargeParty}
                        labelClassName="col-sm-4 "
                        valueClassName="col-md-8 col-sm-7"
                    />
                    
                    <FormData
                        label="tohi"
                        // value={data.shippingPaymentReferenceInfo}
                        labelClassName="col-sm-4 "
                        valueClassName="col-md-8 col-sm-7"
                    />
                </>
                }
            </>
        )
    }
}
ShipperCOD.defaultProps = {
    data: {
        totalAmount: 'totalAmount',
        paymentMethod: 'paymentMethod',
        chargeParty: 'chargeParty',
        paymentReferenceInfo: 'paymentReferenceInfo'
    }
}