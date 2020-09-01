import React, { Component } from "react";
import Api from "../../config/Api";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";

class ButtonLoader extends Component {
  state = {
    loading: false
  };

  fetchData = () => {
    const { userName, password, readySearchParam } = this.props
    this.setState({ loading: true });
    Api.getDownloadCsv(readySearchParam, { userName: userName, password: password }).then((response,xhr) => {
      const url = window.URL.createObjectURL(new Blob([response.data]));
    const link = document.createElement('a');
      const urlSplit = url.split("/");
      const fileName = urlSplit[urlSplit.length - 1]
      link.href = url;
      link.setAttribute('download', fileName + ".xls");
      document.body.appendChild(link);
      link.click();
    })
      .finally(() => {
        this.setState({ loading: false });
      })


  };

  render() {
    const { loading } = this.state;
    const { readySearchParam } = this.props;


    return (
      <>
        <button className="btn bg-orange waves-effect waves-light "
          onClick={this.fetchData}
          disabled={loading}>
          {loading && (
            <i
              className="fa fa-refresh fa-spin"
              style={{ marginRight: "5px" }}
            />
          )}
          {!loading && <span>خروجی اکسل حداکثر ۲۰۰۰ ردیف</span>}
          {loading && <span>  در حال بارگذاری  </span>}
        </button>
      </>
    );
  }
}


const mapStateToProps = (store) => {
  return {

    userName: store.Reducer.userName,
    password: store.Reducer.password,
    readySearchParam: store.Reducer.readySearchParam

  }
}
export default withRouter(connect(mapStateToProps)(ButtonLoader))

