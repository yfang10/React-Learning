import React, { Component } from "react";
class ShopAdd extends Component {
  constructor(props) {
    super(props);
    this.state = { msg: "我是增加商户组件" };
  }
  render() {
    return <div className="info">我是增加商户组件</div>;
  }
}

export default ShopAdd;
