import React, { Component } from "react";
class ShopList extends Component {
  constructor(props) {
    super(props);
    this.state = { msg: "我是商户列表组件" };
  }
  render() {
    return <div className="info">我是商户列表组件</div>;
  }
}

export default ShopList;
