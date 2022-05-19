import React, { Component } from "react";

class UserList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      msg: "我是一个用户列表组件",
    };
  }
  render() {
    return <div className="userList">我是一个用户列表组件</div>;
  }
}

export default UserList;
