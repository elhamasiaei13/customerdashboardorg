import React, { Component } from 'react'
import Row from '../presentational/Row'
import Col from '../presentational/Col';
import Button from '../presentational/button/Button';
import { Link, withRouter, Redirect } from 'react-router-dom/cjs/react-router-dom.min';
import InputGroup from '../presentational/input/InputGroup'
import { connect } from 'react-redux';
import * as actionCreator from '../../store/Action';
import Axios from 'axios';
import { FormattedMessage } from 'react-intl';
import Preloader from '../presentational/Preloader';
import ErrorMessage from '../presentational/ErrorMessage';
import Icon from '../../img/Logo-mahex-small.png'
import { BASE_LOGIN } from '../../config/constants'

class LoginForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            redirect: false,
            username: '',
            password: '',
            loading: false,
            loginError: { show: false, content: "" },
        }
        // this.submit = this.submit.bind(this)
    }

    onChange(event) {
        const target = event.target;
        const value = target.value;
        const name = target.name;
        this.setState({
            [name]: value
        });
    }

    submit(e) {
        e.preventDefault()
        const { username, password } = this.state
        this.setState({ loading: true })
        this.props.TOGGLE_MESSAGE({ show: false, content: "" })
        let allow = "false"
        // if (JSON.parse(localStorage.getItem('authentication'))) {
        //     allow = JSON.parse(localStorage.getItem('authentication'))
        //     this.setState({ loading: false })
        // }

        // if (allow == true) {
        //     // this.props.TOGGLE_MESSAGE({ show: true, content: "1001.1002" })
        //     this.setState({ loading: false })
        //     return ("home")
        // }
        // else {
        // const PROTOCOL = process.env.REACT_APP_REMOTE_SERVICE_PROTOCOL;
        // const HOST = process.env.REACT_APP_REMOTE_SERVICE_HOST_NAME;
        // const PORT = process.env.REACT_APP_REMOTE_SERVICE_HOST_PORT;
        //  const HOST_URL = `${PROTOCOL}://${HOST}:${PORT}`;
        // await axios.post(`${BASE_LOGIN+"/login"}`, {}, {
        //     auth: {
        //       username: uname,
        //       password: pass
        //     }
        //   })
      
       Axios.get(`${BASE_LOGIN + "/login"}`,
            {
                headers: {
                    "Content-Type": "application/json",
                    'X-Requested-With': 'XMLHttpRequest'
                },
                auth: { username: username, password: password }
            }
        )
        .then((res) => {
            localStorage.setItem("customer_fe_token", JSON.stringify(res.data.access_token));
            this.props.SET_PASSWORD(password)
            this.props.SET_USERNAME(username)
            this.props.SET_AUTHENTICATE(true)
        }
        ).catch((error) => {
            if (error.message !== "Network Error") {
                if (error.response.status == 401) {
                    this.setState({ loginError: { show: true, content: "1001.401" } })
                } else if (error.response.status == 500) {
                    this.setState({ loginError: { show: true, content: "1001.500" } })
                }
            }
            else {
                this.setState({ loginError: { show: true, content: "1001.Network" } })
            }
            this.props.SET_AUTHENTICATE(false)
        }).finally(() => {
            this.setState({ loading: false })

        })

    }

    render() {
        const { username, password, loading, loginError } = this.state
        const { authentication, message } = this.props

        return (
            <>
                <div className="auth-wrapper d-flex no-block justify-content-center align-items-center costom-wrapper-authBox">
                    <div className="auth-box">
                        {loading &&
                            <div className="row el-element-overlay">
                                <div className="custom-wrapper-loading" >
                                    <Preloader />
                                </div>
                            </div>
                        }
                        <div id="loginform">
                            <div className="logo">
                                <span className="db"><img src={Icon} alt="logo" /></span>
                                <h5 className="font-medium m-b-20">ورود به سامانه</h5>
                            </div>
                            <Row>
                                <div className="col-12">
                                    <form onSubmit={e => this.submit(e)} className="form-horizontal">
                                        <InputGroup
                                            required={true}
                                            disabled={loading}
                                            iconName="ti-user"
                                            value={username}
                                            placeholder="Username"
                                            name="username"
                                            onChange={(e) => { this.onChange(e) }}
                                        />
                                        <InputGroup
                                            required={true}
                                            disabled={loading}
                                            type={"password"}
                                            iconName="ti-pencil"
                                            value={password}
                                            placeholder="Password"
                                            name="password"
                                            onChange={(e) => { this.onChange(e) }}
                                        />
                                        <Button
                                            // onClick={e => this.submit(e)}
                                            disabled={loading}
                                            label={
                                                <FormattedMessage
                                                    id={"submit"}
                                                    defaultMessage={"submit"}
                                                />
                                            }
                                            buttonclass="btn  waves-effect waves-light btn-block"
                                            type={loading ? "btn-secondary" : "btn-info"}
                                            htmlType="submit"
                                        />
                                    </form>
                                    {loginError.show
                                        ?
                                        <span className={"custom-txt-c"}>
                                            <ErrorMessage error={loginError.content} />
                                            {/* <span
                                                style={{ "color": "blue" }} onClick={() => {
                                                    window.location = '/shipments'
                                                }}>
                                                مشاهده صفحه 
                                            </span> */}
                                        </span>
                                        : <></>
                                    }
                                </div>
                            </Row>
                        </div>
                    </div>
                </div>

            </>
        )
    }
}

const mapStateToProps = (store) => {
    return {
        authentication: store.Reducer.authentication,
        message: store.Reducer.message,
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

export default withRouter(connect(mapStateToProps, mapDispachToProps)(LoginForm));
