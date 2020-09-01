import React, { Component } from 'react'
// import FormData from '../presentational/input/FormData';
import FormData from '../presentational/input/FormData';
import { FormattedMessage } from 'react-intl';
import ConvertMoney from '../ConvertMoney';
export default class ShipperPayment extends Component {

    render() {
        const { data } = this.props
        return (
            <>
                {
                    data && <>
                        <FormData
                            label={
                                <FormattedMessage
                                    id={"totalAmount"}
                                    defaultMessage={"totalAmount"}
                                />
                            }
                            value={data.shippingTotalAmount ? ConvertMoney(data.shippingTotalAmount) : ' '}
                            labelClassName="col-sm-5 col-md-6"
                            valueClassName="col-md-6 col-sm-7"
                        // labelClassName="col-sm-4 "
                        // valueClassName="col-md-8 col-sm-8"
                        />


                        <FormData
                            label={
                                <FormattedMessage
                                    id={"paymentMethod"}
                                    defaultMessage={"paymentMethod"}
                                />
                            }
                            value={data.shippingPaymentMethod ? data.shippingPaymentMethod : ' '}
                            labelClassName="col-sm-5 col-md-6"
                            valueClassName="col-md-6 col-sm-7"
                        // labelClassName="col-sm-4 "
                        // valueClassName="col-md-8 col-sm-8"
                        />

                        <FormData
                            label={
                                <FormattedMessage
                                    id={"chargeParty"}
                                    defaultMessage={"chargeParty"}
                                />
                            }
                            value={data.shippingChargeParty ? data.shippingChargeParty : ' '}
                            labelClassName="col-sm-5 col-md-6"
                            valueClassName="col-md-6 col-sm-7"
                        // labelClassName="col-sm-4 "
                        // valueClassName="col-md-8 col-sm-8"
                        />
                        <FormData
                            label={
                                <FormattedMessage
                                    id={"paymentReferenceInfo"}
                                    defaultMessage={"paymentReferenceInfo"}
                                />
                            }
                            value={data.shippingPaymentReferenceInfo ? data.shippingPaymentReferenceInfo : ' '}
                            labelClassName="col-sm-5 col-md-6"
                        valueClassName="col-md-6 col-sm-7"
                            // labelClassName="col-sm-4 "
                            // valueClassName="col-md-8 col-sm-8"
                        />


                    </>
                }
            </>
        )
    }
}
ShipperPayment.defaultProps = {
    data: {
        totalAmount: 'totalAmount',
        paymentMethod: 'paymentMethod',
        chargeParty: 'chargeParty',
        paymentReferenceInfo: 'paymentReferenceInfo'
    }
}