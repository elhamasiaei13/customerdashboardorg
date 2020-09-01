import React, { Component } from 'react'
import Card from '../card/Card'
import Table from '../table/Table';
import { Route } from 'react-router-dom';
import Breadcrumb from '../breadcrumb/Breadcrumb';

export default class Main extends Component {
    render() {
        return (
           <>
                    {/* برای پیروی از تم مورد نظر محتویات این قسمت تغیر میکند و بقیه قسمتها ثابت اند */}
                    {/* <Route
                        path="/table"
                        render={() => {
                            return (
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
                                            title="Striped rows"
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
                                            title="Striped rows"
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
                                            title="Striped rows"
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
                                </>

                            )
                        }}
                    >
                    </Route>

                    <Route
                        exact path="/"
                        render={() => {
                            return (
                                    <div className="col-12">
                                        <Card
                                            body={
                                                
                                            }
                                        >
                                        </Card>
                                    </div>

                            )
                        }}
                    >
                    </Route> */}
</>
        )
    }
}
