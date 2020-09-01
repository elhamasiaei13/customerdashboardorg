import React, { Component } from 'react'
import FormInput from '../presentational/input/FormInput';
import Row from '../presentational/Row'
import Col from '../presentational/Col';
import Button from '../presentational/button/Button';
import { Redirect, withRouter } from 'react-router-dom';
import InputGroup from '../presentational/input/InputGroup'
import { connect } from 'react-redux';
import * as actionCreator from '../../store/Action';
import Axios from 'axios';
import { FormattedMessage } from 'react-intl';

class ResetPass extends Component {
    constructor(props) {
        super(props);
        this.myRef = React.createRef();
        this.state = {
            currrentPassword: '',
            newPassword: '',
            repeatNewPasswords: '',
            validationClass: ''

        }
        this.focusTextInput = this.focusTextInput.bind(this);
    }
    componentDidMount() {
        this.props.TOGGLE_MESSAGE({ show: false, content: "" })

    }
    onChange(event) {
        const { newPassword, repeatNewPasswords, validationClass } = this.state
        const target = event.target;
        const value = target.value;
        const name = target.name;
        this.setState({
            [name]: value
        });
        if (target.name == "repeatNewPasswords") {
            if (newPassword === target.value) {
                this.setState({ validationClass: "valid" })
            } else {
                this.setState({ validationClass: "unvalid" })
            }
        }
    }
    focusTextInput() {
        // Explicitly focus the text input using the raw DOM API
        // Note: we're accessing "current" to get the DOM node
        this.textInput.current.focus();
    }

    submit(e) {
        e.preventDefault()
        //    const { username, password } = this.state
} 

    render() {
        const { currrentPassword, newPassword, repeatNewPasswords, validationClass } = this.state
        return (
            <div className="auth-wrapper d-flex  justify-content-center coustomer-authBox-height">
                <div className="auth-box">
                    <Row>
                        <div className="col-12">
                            <form onSubmit={this.submit} className="form-horizontal">
                                <InputGroup
                                    type="password"
                                    iconName="ti-pencil"
                                    value={currrentPassword}
                                    placeholder="‍رمز عبور فعلی"
                                    name="currrentPassword"
                                    onChange={(e) => { this.onChange(e) }}
                                />
                                <InputGroup
                                    type="password"
                                    iconName="ti-pencil"
                                    value={newPassword}
                                    placeholder="رمز عبور جدید"
                                    name="newPassword"
                                    onChange={(e) => { this.onChange(e) }}
                                />
                                <InputGroup
                                    // onClick={this.focusTextInput}
                                    // ref={this.myRef}
                                    classNameInput={validationClass}
                                    type="password"
                                    iconName="ti-pencil"
                                    value={repeatNewPasswords}
                                    placeholder="تکرار رمز عبور جدید"
                                    name="repeatNewPasswords"
                                    onChange={(e) => { this.onChange(e) }}
                                />
                                <Button
                                    label={
                                        <FormattedMessage
                                            id={"submit"}
                                            defaultMessage={"submit"}
                                        />
                                    }
                                    buttonclass="btn btn-info waves-effect waves-light"
                                    type="info btn-block" htmlType="submit" />

                            </form>
                        </div>
                    </Row>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (store) => {
    return {
        authentication: store.Reducer.authentication,
    }
}



const mapDispachToProps = (dispach) => {
    return {
        SET_AUTHENTICATE: (value) => { dispach(actionCreator.SET_AUTHENTICATE(value)) },
        SET_USERNAME: (value) => { dispach(actionCreator.SET_USERNAME(value)) },
        SET_PASSWORD: (value) => { dispach(actionCreator.SET_PASSWORD(value)) },
        TOGGLE_MESSAGE: (value) => { dispach(actionCreator.TOGGLE_MESSAGE(value)) },
    }
}

export default withRouter(connect(mapStateToProps, mapDispachToProps)(ResetPass));
