import React, { Component } from "react";

class UserEdit extends Component {
  constructor(props) {
    super(props);
    this.state = {
      msg: "我是一个编辑用户组件",
    };
  }
  render() {
    return <div className="userEdit">我是一个编辑用户组件</div>;
  }
}

export default UserEdit;
