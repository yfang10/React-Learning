import React, { Component } from "react";

import { Redirect } from "react-router-dom";
class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      status: false,
    };
  }

  doLogin = (e) => {
    e.preventDefault();
    let username = this.refs.username.value;
    let password = this.refs.password.value;
    if (username === "admin" && password === "123456") {
      //登陆成功 跳转到首页
      this.setState({
        status: true,
      });
    } else {
      alert("登陆失败");
    }
  };
  render() {
    const { status } = this.state;
    if (status === true) {
      return <Redirect to={{ pathname: "/" }} />;
    } //在render中检查状态是否改变为true, 通过Redirect实现路由跳转
    return (
      <div>
        <form onSubmit={this.doLogin}>
          <input type="text" ref="username" />
          <br /> <br />
          <input type="password" ref="password" />
          <br /> <br />
          <input type="submit" value="执行登陆" />
        </form>
      </div>
    );
  }
}

export default Login;
