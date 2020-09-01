import React, { Component } from 'react'
import ShipperResultPartsItem from '../presentational/input/ShipperResultPartsItem';
import Col from '../presentational/Col';
import Row from '../presentational/Row';
import { FormattedMessage } from 'react-intl';
import ConvertMoney from '../ConvertMoney';
export default class ShipperResultParts extends Component {
    constructor(props) {
        super(props);
        this.state = {
            declaredValue: 0,
        }
    }

    componentDidMount() {
        this.calulate()
    }

    calulate() {

        let declaredValue = 0
        this.props.data.parcels.map((row) => {
            declaredValue = row.declaredValue + declaredValue
        })
        this.setState({ declaredValue: declaredValue })
    }

    render() {
        const { label, value, data } = this.props
        const { declaredValue } = this.state
        return (
            <Row>
                <Col md={3} sm={6}>
                    <ShipperResultPartsItem
                        label={
                            <FormattedMessage
                                id={"totalPiece"}
                                defaultMessage={"totalPiece"}
                            />
                        }
                        iconName="fas fa-qrcode"
                        iconClass="text-orange"
                        value={data.totalPieces ? data.totalPieces : ' '}
                        unit={<FormattedMessage
                            id={"number"}
                            defaultMessage={"number"}
                        />
                        }
                    />
                </Col>
                <Col md={3} sm={6}>
                    <ShipperResultPartsItem
                        label={
                            <FormattedMessage
                                id={"totalGrossWeight"}
                                defaultMessage={"totalGrossWeight"}
                            />
                        }
                        iconName="fas fa-weight"
                        value={data.totalGrossWeight ? data.totalGrossWeight : ''}
                        iconClass="text-success"
                        unit={<FormattedMessage
                            id={"kg"}
                            defaultMessage={"kg"}
                        />
                        }
                    />
                </Col>
                <Col md={3} sm={6}>
                    <ShipperResultPartsItem
                        label={
                            <FormattedMessage
                                id={"totalVolumetricWeight"}
                                defaultMessage={"totalVolumetricWeight"}
                            />
                        }
                        // fab fa-dribbble-square
                        iconName="fas fa-cube"
                        value={data.totalVolumetricWeight ? data.totalVolumetricWeight : ' '}
                        iconClass="text-purple"
                        unit={<FormattedMessage
                            id={"kg"}
                            defaultMessage={"kg"}
                        />
                        }
                    />
                </Col>
                <Col md={3} sm={6}>
                    <ShipperResultPartsItem
                        label={
                            <FormattedMessage
                                id={"totalDeclaredValue"}
                                defaultMessage={"totalDeclaredValue"}
                            />
                        }
                        value={ConvertMoney(declaredValue) }
                        iconName="mdi mdi-currency-usd"
                        iconClass="text-red"
                        unit={<FormattedMessage
                            id={"rial"}
                            defaultMessage={"rial"}
                        />
                        }
                    />
                </Col>
            </Row>
        )
    }
}
