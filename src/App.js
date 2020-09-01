import React, { Component } from 'react'
import './css/c3.min.css'
import './css/chartist.min.css'
import './css/style.min.css'
import './css/jquery-jvectormap-2.0.2.css'
import './css/font-awesome.min.css'
import './App.css';
import Header from './componenets/Layout/Header'
import Sider from './componenets/Layout/Sider'
import Content from './componenets/Layout/content/Content'
import Wrapper from './componenets/presentational/Wrapper';
import Main from './componenets/container/Main'
import Menu from './componenets/container/Menu'
import { connect } from 'react-redux';
import * as actionCreator from './store/Action'
import { withRouter, Route, Redirect } from 'react-router-dom';
import ErrorBunderies from './componenets/container/ErrorBunderies'
import ErrorMessage from './componenets/presentational/ErrorMessage'
import moment from 'moment-jalaali'
class App extends Component {

  componentWillMount() {
    if (JSON.parse(localStorage.getItem('authentication'))) {
      this.props.SET_AUTHENTICATE(JSON.parse(localStorage.getItem('authentication')))
    }
    else {
      this.props.SET_AUTHENTICATE(false)
      return null
    }

    if (JSON.parse(localStorage.getItem('userName'))) {
      this.props.SET_USERNAME(JSON.parse(localStorage.getItem('userName')))
    }

    else {
      return null
    }
    if (JSON.parse(localStorage.getItem('password'))) {
      this.props.SET_PASSWORD(JSON.parse(localStorage.getItem('password')))
    }

    else {
      return null
    }
    if (this.props.location.pathname) {
      let str = this.props.location.pathname
      let res = str.split("/");
      let len = res.length
      let test = len - 1

      if ((res[test].length > 0) && (res[len - 1] !== 'view') && (res[len - 2] == "view")) {
        this.props.set_waybillnumber(res[test])
      }
      else {
        this.props.set_waybillnumber(" ")
      }
    }

  }

  componentDidMount() {

    if (JSON.parse(localStorage.getItem('authentication'))) {
      this.props.SET_AUTHENTICATE(JSON.parse(localStorage.getItem('authentication')))
    }

    else {
      // this.props.SET_AUTH/ENTICATE(false)
      return null
    }

    if (JSON.parse(localStorage.getItem('waybillNumber'))) {
      this.props.set_waybillnumber(JSON.parse(localStorage.getItem('waybillNumber')))
    }

    else {
      return null
    }

    if (JSON.parse(localStorage.getItem('path'))) {
      this.setState({ path: JSON.parse(localStorage.getItem("path")) })
    }

    else {
      return null
    }
  }


  constructor(props) {
    super(props);
    this.state = {
      // sidebartype: 'full',
      sidebartype: ' mini-sidebar',
      value: moment()

    }
  }


  logOut = (arg) => {
    this.props.SET_AUTHENTICATE(false)
    this.props.SET_PASSWORD(null)
    this.props.SET_USERNAME(null)
  }

  
 

  render() {

    const { sidebartype } = this.state
    const { authentication, userName, message, preLoader } = this.props

    return (
      <ErrorBunderies>
        {authentication ?
          <Wrapper sidebartype={sidebartype} >
            <Header
              userName={userName}
              sidebartype={sidebartype}
              toggleSider={(e) => {}}
              logOut={() => this.logOut()} />
            <Sider >
              <Menu />
            </Sider>
            <Content>
              {message.show
                ? <ErrorMessage error={message.content} />
                : <></>
              }

              <Main authentication={authentication} />

              {/* {preLoader
                ? <Preloader />
                : <>
                  {message.show
                    ? <ErrorMessage error={message.content} />
                    : <></>
                  }
                  <Main test={"test"} authentication={authentication} />
                </>
              } */}

            </Content>
          </Wrapper>
          :
          <>

            <Main authentication={authentication} />
          </>
        }
      </ErrorBunderies>
    )
  }
}

const mapStateToProps = (store) => {
  return {
    authentication: store.Reducer.authentication,
    userName: store.Reducer.userName,
    message: store.Reducer.message,
    preLoader: store.Reducer.preLoader

  }
}

const mapDispachToProps = (dispach) => {
  return {
    set_waybillnumber: (value) => { dispach(actionCreator.SET_WAYBILLNUMBER(value)) },
    SET_AUTHENTICATE: (value) => { dispach(actionCreator.SET_AUTHENTICATE(value)) },
    SET_USERNAME: (value) => { dispach(actionCreator.SET_USERNAME(value)) },
    SET_PASSWORD: (value) => { dispach(actionCreator.SET_PASSWORD(value)) },
  }
}

export default withRouter(connect(mapStateToProps, mapDispachToProps)(App))

