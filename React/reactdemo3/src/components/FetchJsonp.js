import React, { Component } from "react";

import fetchJsonp from "fetch-jsonp";

class FetchJsonp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [],
    };
  }

  getData = () => {
    //通过jsonp获取服务器数据

    var api = "http://www.phonegap100.com/appapi.php?a=getPortalList&catid=20";

    fetchJsonp(api)
      .then(function (response) {
        return response.json();
      })
      .then((json) => {
        this.setState({
          list: json.result,
        });
      })
      .catch(function (ex) {
        console.log("parsing failed", ex);
      });
  };

  componentDidMount() {
    this.getData();
  }

  render() {
    return (
      <div>
        <h2>FetchJsonp获取服务器接口数据</h2>

        <button onClick={this.getData}>获取服务器api接口数据</button>

        <hr />

        <ul>
          {this.state.list.map((value, key) => {
            return <li key={key}>{value.title}</li>;
          })}
        </ul>
      </div>
    );
  }
}

export default FetchJsonp;
