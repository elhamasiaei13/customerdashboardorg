import React, { Component } from 'react'
import Pagination from "react-js-pagination";
import ReactPaginate from 'react-paginate';
import Row from '../Row'
import Col from '../Col'
import { FormattedMessage } from 'react-intl';

export default class Pagination1 extends Component {


  handleChange(pageNumber = this.props.activePage) {
    this.props.changeData(pageNumber)
  }

  changeSize(e) {
    this.props.changeSize(e.target.value)
  }

  render() {
    const { itemsCountPerPage, activePage, total } = this.props
    return (
      <Row>
        <Col md={9}>
          <span className={"col-form-label  p-r-18"}>نمایش صفحه &nbsp;&nbsp;</span>
          <Pagination
            activePage={activePage}
            itemsCountPerPage={itemsCountPerPage}
            totalItemsCount={total}
            pageRangeDisplayed={10}
            onChange={(pageNumber) => this.handleChange(pageNumber)}
            activeClass="active"
            prevPageText="قبلی"
            firstPageText="ابتدا"
            lastPageText="انتها"
            nextPageText="بعدی"
            itemClassFirst={"itemClassPagination"}
            itemClassPrev={"itemClassPagination"}
            itemClassNext={"itemClassPagination"}
            itemClassLast={"itemClassPagination"}
            itemClass={"TotalItemClassPagination"}
          />
          <span className={" col-form-label"}> &nbsp;&nbsp;از {total} رکورد</span>
        </Col>

        <Col md={3}>
          <div className="form-group row pull-left" style={{ "paddingLeft": "19px" }}>
            <label htmlFor="fname" className="control-label  col-form-label  text-right ">نمایش&nbsp;&nbsp;</label>
            <div >
              <select 
               className="customPagination-select"
               defaultValue={itemsCountPerPage}
               onChange={(e) => { this.changeSize(e)}}  >
                <option value="10">10</option>
                <option value="25">25</option>
                <option value="50">50</option>
                <option value="100">100</option>
              </select>
              {/* <select className="custom-select"
                defaultValue={itemsCountPerPage}
                onChange={(e) => {this.changeSize(e) }}> 
             <option value="10" >10</option>
                <option value="25">25</option>
                <option value="50">50</option>
                <option value="100">100</option> 
               </select> */}
            </div>
            <label htmlFor="fname" className="control-label  col-form-label  ">&nbsp;&nbsp;رکورد</label>
          </div>


        </Col>

      </Row>
    );
  }
}
