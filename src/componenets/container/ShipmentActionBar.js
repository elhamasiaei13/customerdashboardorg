import React from 'react';
import Button from '../presentational/button/Button';
import ButtonGroup from '../presentational/button/ButtonGroup';
import Row from '../presentational/Row'
import { FormattedMessage } from 'react-intl';
const ShipmentActionBar = ({ ...props }) => {
    return (

        <Row>
            <ButtonGroup>
                <Button
                    label={
                        <FormattedMessage
                            id={"Print Tags"}
                            defaultMessage={"Print Tags"}
                        />
                    }
                    
                    type="info"
                    buttonclass="waves-light btn-info" />
                <Button
                    label={
                        <FormattedMessage
                            id={"printWaybill"}
                            defaultMessage={"printWaybill"}
                        />
                    }
                    type="info"
                    buttonclass="waves-light btn-primary" />

            </ButtonGroup>

        </Row>);

}
export default (ShipmentActionBar);
