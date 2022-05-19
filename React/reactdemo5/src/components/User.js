import React, { Component } from "react";
import Info from "./User/Info";
import Main from "./User/Main";

import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class User extends Component {
  constructor(props) {
    super(props);
    this.state = { msg: "我是一个User组件" };
  }
  render() {
    return (
      <Router>
        <div className="user">
          <div className="content">
            <div className="left">
              <Link to="/user/">个人中心</Link>
              <br />
              <br />
              <br />

              <Link to="/user/main">用户信息</Link>
            </div>

            <div className="right">
              <Route exact path="/user/" component={Info} />

              <Route path="/user/main" component={Main} />
            </div>
          </div>
        </div>
      </Router>
    );
  }
}

export default User;
