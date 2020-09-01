import React, { Component } from 'react'
import Col from './Col';
import Row from './Row';
import Card from './card/Card';
import { FormattedMessage } from 'react-intl';

export default class ErrorMessage extends Component {

    showError(error) {
        switch (error) {
            case "1001.404":
                return (
                    <FormattedMessage
                        id={"not found this waybill"}
                        defaultMessage={"not found this waybill"}
                    />
                )
                break;
            case "1001.401":
                return (
                    <FormattedMessage
                        id={"invalid userName or passWord"}
                        defaultMessage={"invalid userName or passWord"}
                    />
                )
                break;
            case "1001.1002":
                return (<>
                    <FormattedMessage
                        id={"You are currently signed in with a"}
                        defaultMessage={"You are currently signed in with a"}
                    />
                    {" "}
                    {localStorage.getItem("userName")
                    }
                    {" "}
                    <FormattedMessage
                        id={"username"}
                        defaultMessage={"username"}
                    />
                </>
                )
                break;

            default:
                return (
                    <>
                    <FormattedMessage
                        id={"System error"}
                        defaultMessage={"System error"}
                    />({error})</>)

                break;
        }

    }

    render() {
        const { error } = this.props
        return (
            <Row>
                <Col md={12} xs={12}  >

                    <Card cardBodyclassName=" bg-cyan text-white text-center " >
                        <span className={(error == "1001.404" || error == "1001.4XX") ? "txtErrorUser" : "txtError"}>
                            {this.showError(error)}
                        </span>
                    </Card>                        
                </Col>

            </Row >
        )
    }
}
