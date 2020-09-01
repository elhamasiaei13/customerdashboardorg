import React from 'react'
import FormInput from '../input/FormInput';
import CardBody from '../card/CardBody'
import FormData from '../input/FormData';
import Row from '../../presentational/Row'

const FormDetail = ({
    title = "title", bodyFormDetail = ""
    , footerFormDetail = "", ...props }) => {
    return (
        <form className="form-horizontal">
            <div className="form-body">
                <CardBody cardTitle={title}
                    body={
                        <Row className="row">
                            <FormData
                                label={
                                    <FormattedMessage
                                        id={"First Name:"}
                                        defaultMessage={"First Name:"}
                                    />
                                }
                                value={"John"} />

                        </Row>}>
                </CardBody>

                <div className="form-actions">
                    <div className="card-body">
                        <div className="row">
                            <div className="col-md-6">
                                <div className="row">
                                    <div className="col-md-offset-3 col-md-9">
                                        {footerFormDetail}
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6"> </div>
                        </div>
                    </div>
                </div>
            </div>
        </form>
    )
}
export default FormDetail;

