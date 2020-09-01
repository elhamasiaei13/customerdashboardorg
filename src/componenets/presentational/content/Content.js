import React, { Component } from 'react'
import Card from '../card/Card'
import Table from '../table/Table';
import { Route } from 'react-router-dom';
import Breadcrumb from '../breadcrumb/Breadcrumb';
import Main from './Main'
import ContainerFluid from './ContainerFluid';
import FormInput from '../input/FormInput'
import TextArea from '../input/TextArea';
import Form from '../form/Form';
import FormDetail from '../form/FormDetail';
import FormData from '../input/FormData';
import Shipper from '../container/Shipper'
import { FormattedMessage } from 'react-intl';
export default class Content extends Component {
    render() {
        return (
            <div className="page-wrapper">
                {/* <Route path="/table"

                    render={() => {
                        return (<ContainerFluid
                            BreadcrumbTitle={"BreadcrumbTitle"}
                            body={
                                <>
                                    <div className="col-12">
                                        <Card
                                            body={
                                                <Table
                                                    tableclassName="table table-striped"
                                                    theader={['#', 'First', 'Last', 'Handle']}
                                                    tbody={[{ "#": '1', "First": "Mark", "Last": "Otto", "Handle": "@mdo" }, { "#": '1', "First": "Mark", "Last": "Otto", "Handle": "@mdo" }]}
                                                />
                                            }
                                        >
                                        </Card>
                                    </div>

                                    <div className="col-12">
                                        <Card
                                            cardTitle="cardTitle"
                                            body={
                                                <Table
                                                    tableclassName="table table-bordered"
                                                    theader={['#', 'First', 'Last', 'Handle']}
                                                    tbody={[{ "#": '1', "First": "Mark", "Last": "Otto", "Handle": "@mdo" }, { "#": '1', "First": "Mark", "Last": "Otto", "Handle": "@mdo" }]}
                                                />
                                            }
                                        >
                                        </Card>
                                    </div>

                                    <div className="col-12">
                                        <Card
                                            cardTitle="cardTitle"
                                            body={
                                                <Table
                                                    tableclassName="table table-striped"
                                                    theader={['#', 'First', 'Last', 'Handle']}
                                                    tbody={[{ "#": '1', "First": "Mark", "Last": "Otto", "Handle": "@mdo" }, { "#": '1', "First": "Mark", "Last": "Otto", "Handle": "@mdo" }]}
                                                />
                                            }
                                        >
                                        </Card>
                                    </div>
                                    <div className="col-12">
                                        <Card
                                            cardTitle="cardTitle"
                                            body={
                                                <FormInput />
                                            }
                                        >
                                        </Card>
                                    </div>
                                </>
                            }
                        />)
                    }} />

                <Route exact path="/shipment"
                    render={() => {
                        return (<ContainerFluid
                            BreadcrumbTitle={"shipment"}
                            body={
                                <div className="col-12">
                                    <Card
                                        cardTitle="shipment"
                                        body={<>
                                        <Shipper />
                                            <FormInput label="First Name" />
                                            <Table
                                                tableclassName="table table-striped"
                                                theader={['#', 'شماره بارنامه', 'وضعیت کنونی', 'تایخ صدور', 'نحوه ‍پرداخت', 'شهر گیرنده']}
                                                tbody={[{
                                                    '#': 1, 'شماره بارنامه': '210130023054', 'وضعیت کنونی': 'DELIVERED', 'تایخ صدور': '1396-06-11 17:13'
                                                    , 'نحوه ‍پرداخت': 'CREDIT', 'شهر گیرنده': 'IR-SHRZ'
                                                },
                                                {
                                                    '#': 1, 'شماره بارنامه': '210130023054', 'وضعیت کنونی': 'DELIVERED', 'تایخ صدور': '1396-06-11 17:13'
                                                    , 'نحوه ‍پرداخت': 'CREDIT', 'شهر گیرنده': 'IR-SHRZ'
                                                },
                                                {
                                                    '#': 1, 'شماره بارنامه': '210130023054', 'وضعیت کنونی': 'DELIVERED', 'تایخ صدور': '1396-06-11 17:13'
                                                    , 'نحوه ‍پرداخت': 'CREDIT', 'شهر گیرنده': 'IR-SHRZ'
                                                }
                                                ]}
                                            />

                                        </>}
                                    >
                                    </Card>
                                </div>
                            }
                        />)
                    }} />

                <Route path="/TextArea"
                    render={() => {
                        return (<ContainerFluid
                            BreadcrumbTitle={"TextArea"}
                            body={
                                <div className="col-12">
                                    <Card
                                        cardTitle="TextArea"
                                        body={
                                            <TextArea />
                                        }
                                    >
                                    </Card>
                                </div>
                            }
                        />)
                    }} />

                <Route path="/FormDetail"
                    render={() => {
                        return (<FormDetail
                            bodyFormDetail={<div className="row">
                                <FormData
                                    label={"First Name:"}
                                    value={"John"} />
                            </div>
                            }
                            footerFormDetail={<>
                                <button type="submit" className="btn btn-danger"> <i className="fa fa-pencil"></i> Edit</button>
                                <button type="button" className="btn btn-dark">Cancel</button>
                            </>} />)
                    }} />

                <Route path="/Form" */}
                render={() => {
                    return (<ContainerFluid
                        BreadcrumbTitle={"Form"}
                        body={
                            <div className="col-12">
                                <Card
                                    cardTitle="Form"
                                    body={
                                        <Form
                                            formBody={<>
                                                <FormInput
                                                    label={
                                                        <FormattedMessage
                                                            id={"Full Name"}
                                                            defaultMessage={"Full Name"}
                                                        />
                                                    }

                                                    type="text"
                                                    placeholder="Full Name Here"
                                                />
                                                <FormInput
                                                    label={
                                                        <FormattedMessage
                                                            id={"Title"}
                                                            defaultMessage={"Title"}
                                                        />
                                                    }
                                                    id="title1"
                                                    type="text"
                                                    placeholder="Title Here" />

                                                <FormInput
                                                    label={
                                                        <FormattedMessage
                                                            id={"Company"}
                                                            defaultMessage={"Company"}
                                                        />
                                                    }
                                                    id="com12"
                                                    type="text"
                                                    placeholder="Company Name Here"
                                                />
                                                <FormInput
                                                    label={
                                                        <FormattedMessage
                                                            id={"Email"}
                                                            defaultMessage={"Email"}
                                                        />
                                                    }
                                                    type="email"
                                                    id="email20"
                                                    placeholder="Email Here"
                                                />
                                                <FormInput
                                                    label={
                                                        <FormattedMessage
                                                            id={"Contact No"}
                                                            defaultMessage={"Contact No"}
                                                        />
                                                    }
                                                    type="text"
                                                    id="cono3"
                                                    placeholder="Contact No Here"
                                                />
                                            </>}
                                            formFooter={<>
                                                <button type="submit" className="btn btn-info waves-effect waves-light">Save</button>
                                                <button type="submit" className="btn btn-dark waves-effect waves-light">Cancel</button>
                                            </>
                                            } />
                                    }
                                >
                                </Card>
                            </div>
                        }
                    />)
                }} />
            </div >
        )
    }
}
