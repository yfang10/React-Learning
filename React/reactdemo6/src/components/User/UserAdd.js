import React, { Component } from "react";

class UserAdd extends Component {
  constructor(props) {
    super(props);
    this.state = {
      msg: "我是一个增加用户组件",
    };
  }
  render() {
    return <div className="userAdd">我是一个增加用户组件</div>;
  }
}

export default UserAdd;
