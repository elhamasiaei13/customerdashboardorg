import React, { Component } from 'react'
import { FormattedMessage } from 'react-intl';
import { Link, withRouter } from 'react-router-dom/cjs/react-router-dom.min';
import { connect } from 'react-redux';
import * as actionCreator from '../../../store/Action';
import eye from '../../../img/eye.png';
import Preloader from '../Preloader';
import ConvertMoney from '../../ConvertMoney';
import { exportDefaultSpecifier } from '@babel/types';
import TableHeader from './TableHeader'


class Table extends Component {
    constructor(props) {
        super(props);
        this.state = {
            total: 1,
            colSort: ""
        }
        this.CreateBody = this.CreateBody.bind(this)
    }


    CreateHeader = (theader, sort, colsort) => {
        const head = []

        theader.map((item, index) => {
            if (item == "activity" || item == "#" || sort == false) {
                head.push(
                    <th
                        key={item} scope="col">
                        <FormattedMessage
                            id={item}
                            defaultMessage={item}
                        />
                    </th>
                )
            } else if (sort) {
                head.push(
                    <TableHeader
                        key={item} scope="col"
                        lable={item}
                        showIconSort={colsort == item ? true : false}
                        reportName={(val) => {
                            this.setState({ colSort: val })
                            // this.props.sortTable(val)
                            ;
                        }}
                    />
                )
            }
        })
        return head;
    }

    testArray = (test) => {
        test.map((item) => {
            return <td>{item}</td>
        })
    }

    CreateBody = (tbody, theader) => {
        const { defaultKey, indexVariable } = this.props
        let initIndex = 0
        if (indexVariable ) {
           initIndex = indexVariable.size * (indexVariable.activePage - 1)
        }

        let i = 1
        const body = [];
        tbody.map((row, index) => {
            const waybillNumber = row.waybillNumber


            let keyWrapper = ''
            if (row.partNumber) {
                i++
                keyWrapper = row.partNumber
            } else {
                i++
                keyWrapper = waybillNumber + i
            }
            body.push(<tr
                key={defaultKey + keyWrapper}>
                {theader.map((colmn) => {
                    if (colmn === "#") {
                        ++i
                        return <td
                            key={defaultKey + index + i + 1}
                            scope="row">{initIndex + index + 1}</td>
                    } else if (colmn == "waybillNumber") {
                        ++i
                        return <td
                            key={defaultKey + index + 2 + i}
                            // onClick={() =>
                            //     this.props.set_waybillnumber(waybillNumber)
                            // } 
                            scope="row">
                            <Link
                                to={{
                                    pathname: `/shipments/view/${row.waybillNumber}`,
                                    state: { waybillNumber: row.waybillNumber }
                                }}
                            // to={`/shipments/view/${row.waybillNumber}`}
                            >
                                {waybillNumber}
                            </Link>
                        </td>
                    } else if (colmn == "activity") {
                        ++i
                        return <td
                            key={defaultKey + index + 2.5 + i}
                            onClick={() =>
                                this.props.set_waybillnumber(waybillNumber)
                            } scope="row">
                            <Link
                                to={{
                                    pathname: `/shipments/view/${row.waybillNumber}`,
                                    state: { waybillNumber: row.waybillNumber }
                                }}

                            >
                                <img src={eye} width="25" alt="view" />
                            </Link>
                        </td>
                    } else if (colmn === "DIMs") {
                        i++
                        return (<td
                            key={defaultKey + index + 3 + i}>{row.width} * {row.height}* {row.length}
                            {" "}
                            <FormattedMessage
                                id={"cm"}
                                defaultMessage={"cm"}
                            />
                        </td>)
                    } else if (colmn === "chargeParty") {
                        i++
                        const viewClass = row.chargeParty == "پس کرایه" ? 'badge-danger' : 'label-success'
                        return (<td
                            key={defaultKey + index + i + row.chargeParty}>
                            <span
                                className={"label label-rounded " + viewClass} >
                                {row.chargeParty}
                            </span>
                        </td>)
                    } else if (colmn === "paymentMethod") {
                        const viewClass = row.paymentMethod == "نقد" ? 'label-success' :
                            row.paymentMethod == "اعتباری" ? 'label-info' : 'label-green'

                        return (<td
                            key={defaultKey + index + 5 + row.paymentMethod}  >
                            <span
                                className={"label label-rounded " + viewClass} >
                                {row.paymentMethod ?
                                    <FormattedMessage
                                        id={row.paymentMethod}
                                        defaultMessage={row.paymentMethod}
                                    />
                                    : "-"}
                            </span>
                        </td>)
                    } else if (colmn === "currentState") {

                        return (
                            <td
                                key={index + 5 + row.paymentMethod}>
                                <span
                                    className={
                                        row.currentState == "ISSUED" ? " text-teal" :
                                            // row.currentState == "DRAFT" ? "text-file" :
                                            // row.currentState == "MANIFESTED" ? "text-maroon" :
                                            // row.currentState == "IN_TRANSIT" ? "text-yellow" :
                                            // row.currentState == "CONFIRMED_PICKUP_REQ" ? "text-orange" :
                                            row.currentState == "VOIDED" ? "text-red" :
                                                // row.currentState == "IN_WAREHOUSE" ? "text-teal" :
                                                row.currentState == "DELIVERED" ? "text-olive" :
                                                    // row.currentState == "NOT_DELIVERED" ? "text-teal" :
                                                    row.currentState == "RETURNED" ? "text-purple"
                                                        // row.currentState == "MASTERED" ? "text-blue" :
                                                        // row.currentState == "OFFLOADED" ? "text-red" :
                                                        // row.currentState == "text_DELIVERY" ? "text-purple"
                                                        : ''}
                                >
                                    <b>
                                        {row.currentState ?
                                            <FormattedMessage
                                                id={row.currentState}
                                                defaultMessage={row.currentState}
                                            />
                                            : '-'
                                        }
                                    </b>
                                </span>
                            </td>)
                    } else if (colmn === "volumetricWeight") {
                        return (<td
                            key={defaultKey + index + row.volumetricWeight + 3 + i}>{row.volumetricWeight}
                            {" "}
                            <FormattedMessage
                                id={"kg"}
                                defaultMessage={"kg"}
                            />
                        </td>)
                    } else if (colmn === "grossWeight") {
                        return (<td
                            key={defaultKey + index + row.grossWeight + 3 + i}>{row.grossWeight}
                            {" "}
                            <FormattedMessage
                                id={"kg"}
                                defaultMessage={"kg"}
                            />
                        </td>)
                    } else if (colmn === "declaredValue") {
                        return (<td
                            key={defaultKey + index + row.declaredValue + 3 + i}>
                            {ConvertMoney(row.declaredValue)}
                            {" "}
                            <FormattedMessage
                                id={"rial"}
                                defaultMessage={"rial"}
                            />
                        </td>)
                    }
                    else if (colmn === "codAmount") {
                        return (<td
                            key={defaultKey + index + row.declaredValue + 3.5 + i}>
                            {ConvertMoney(row.codAmount)}
                            {" "}

                        </td>)
                    } else {
                        i++
                        return <td key={defaultKey + keyWrapper + row[colmn] + i} >{row[colmn]}</td>
                    }
                })}
            </tr>)
        })
        return body;
    }

    render() {
        const { to, tbody, key, sort, ...rest } = this.props;
        const { theader, classTable, classHeader, classBody, ...props } = this.props
        const { colSort } = this.state
        return (
            <div className="table-responsive " key={key} >
                <table className={"table table-hover " + classTable} >
                    <thead className={classHeader} >
                        <tr >
                            {this.CreateHeader(theader, sort, colSort)}
                        </tr>
                    </thead>
                    <tbody key={tbody} className={classBody}>
                        {this.CreateBody(tbody, theader)}
                    </tbody>
                </table>
            </div>
        )
    }
}

const mapDispachToProps = (dispach) => {
    return {
        set_waybillnumber: (value) => { dispach(actionCreator.SET_WAYBILLNUMBER(value)) }
    }
}

Table.defaultProps = {
    theader: [],
    tbody: [],
    classHeader: '',
    classTable: '',
    classBody: '',
    defaultKey: 'defaultKey',
    sort: false
}

export default withRouter(connect(null, mapDispachToProps)(Table))
