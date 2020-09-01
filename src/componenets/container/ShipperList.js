import React, { Component } from 'react';

class ShipperList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            total: 0,
            data: [],
            datatest: [{ "ship": "1" }],
            message: null,
            size: 10,
            loading: false,
            activePage: 1,
            itemsCountPerPage: 10,
            sortOrder: '',
            sortField: '',
            showSearchForm: true,
        }
        this.changeData = this.changeData.bind(this)
        this.searchValue = this.searchValue.bind(this)
        this.changeSize = this.changeSize.bind(this)
        this.sortTable = this.sortTable.bind(this)
    }


    componentDidMount() {
        this.props.TOGGLE_MESSAGE({ show: false, content: "" })
        window.scrollTo(0, 0);
        this.getData()
    }


    render() {
        const { searchParam, userName, password } = this.props;

        return (
            <>
                <Pagination
                    total={total}
                    changeData={this.changeData}
                    activePage={activePage}
                    itemsCountPerPage={itemsCountPerPage}
                    changeSize={this.changeSize}
                />
                <Row>
                    <Col md={12} key={Math.random().toString(36).substr(2)}>
                        <Table
                            classTable=" table-striped table-hover"
                            classHeader="bg-inverse text-white text-center"
                            classBody=" directionLTR"
                            theader={['#', "waybillNumber",
                                "issuingDate", "deliveryDate",
                                , "shipper", "shipperCity", "consignee",
                                "consigneeCity", "paymentMethod", "chargeParty", "currentState",
                                , "activity"]}
                            tbody={data.length > 0 ? data : []}
                            // tbody = {this.state.datatest}
                            defaultKey="shipment"
                            sortTable={this.sortTable}
                            sort={true}
                            activePage={activePage}
                            indexVariable={this.state}
                        />
                    </Col>
                </Row>
                <Pagination
                    total={total}
                    changeData={this.changeData}
                    activePage={activePage}
                    itemsCountPerPage={itemsCountPerPage}
                    changeSize={this.changeSize}
                />
            </>
        );
    }
}

const mapStateToProps = (store) => {
    return {
        userName: store.Reducer.userName,
        password: store.Reducer.password,
        searchParam: store.Reducer.searchParam,
    }
}

const mapDispachToProps = (dispach) => {
    return {
        SET_AUTHENTICATE: (value) => { dispach(actionCreator.SET_AUTHENTICATE(value)) },
        SET_SearchParam: (value) => { dispach(actionCreator.SET_SEARCHPARAM(value)) },
        SET_READYSEARCHPARAM: (value) => { dispach(actionCreator.SET_READYSEARCHPARAM(value)) },
        TOGGLE_MESSAGE: (value) => { dispach(actionCreator.TOGGLE_MESSAGE(value)) },
    }
}
export default withRouter(connect(mapStateToProps, mapDispachToProps)(ShipperList));
