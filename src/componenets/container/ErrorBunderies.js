import React, { Component } from 'react'
import { store } from '../../index';
import * as actionCreator from '../../store/Action';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import ErrorMessage from '../presentational/ErrorMessage'
import ContainerFluid from '../Layout/content/ContainerFluid';

export default class ErrorBunderies extends Component {
    constructor(props) {
        super(props)
        this.state = { errorOccurred: false }
    }

    componentDidCatch(error, info) {
        this.state.errorOccurred = true
        this.setState({ errorOccurred: true })
    }

   handleResize = () => {
        return(window.innerHeight)
      }
      
    render() {
        return this.state.errorOccurred ?
            <ContainerFluid >
                <ErrorMessage error="Something went wrong!" />
            </ContainerFluid >
            : <> {this.props.children}</>

    }
}


