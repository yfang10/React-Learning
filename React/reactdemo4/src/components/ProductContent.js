import React, { Component } from "react";

//url模块来解析url地址  npm install url --save
import url from "url";

class Content extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    //获取get传值
    console.log(url.parse(this.props.location.search, true));
    var query = url.parse(this.props.location.search, true).query;
    console.log(query);
  }

  render() {
    return <div>我是商品详情组件</div>;
  }
}

export default Content;
