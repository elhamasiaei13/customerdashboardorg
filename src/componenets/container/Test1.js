import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actionCreator from '../../store/Action';

const mapDispachToProps = (dispatch) => {
    return {
        SET_AUTHENTICATE: (value) => { dispatch(actionCreator.SET_AUTHENTICATE(value)) },
    }
}


class Test1 extends Component {
    test(){
this.props.SET_AUTHENTICATE(false)
}
    render() {
        return (
            <>
                {this.test()}
            </>
        );
    }
}

export default connect(null,
    mapDispachToProps,
)(Test1);