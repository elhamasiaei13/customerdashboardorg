import React from 'react'
import ContainerFluid from '../../content/ContainerFluid';
import Row from '../Row'
// import PropTypes from 'prop-types';

const Breadcrumb = ({ title = "title", nav = "", ...props }) => {

    return (
        <div className="page-breadcrumb">
            <Row>
                <div className="col-md-7 col-sm-8 align-self-center">
                    <h4 className="page-title">
                   {title}
                    </h4>
                </div>
                <div className="col-md-5 col-sm-5 align-self-center">
                    <div className="d-flex align-items-center justify-content-end">
                        <nav aria-label="breadcrumb">
                            <ol className="breadcrumb">
                                <li className="breadcrumb-item">
                                    {nav}
                                </li>
                            </ol>
                        </nav>
                    </div>
                </div>
            </Row>
        </div>



    )

}
export default (Breadcrumb) 
