import React, { Component } from "react";
// import Info from "./User/Info";
// import Main from "./User/Main";

// import UserAdd from "./User/UserAdd";
// import UserList from "./User/UserList";

import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class User extends Component {
  constructor(props) {
    super(props);
    this.state = { msg: "我是一个User组件" };
  }

  componentDidMount() {
    console.log(this.props);
  }
  render() {
    return (
      <Router>
        <div className="user">
          <div className="content">
            <div className="left">
              {/* <Link to="/user/">个人中心</Link>
              <br />
              <br />
              <br />

              <Link to="/user/main">用户信息</Link>
            </div> */}

              <Link to="/user/">用户列表</Link>
              <br />
              <br />
              <br />

              <Link to="/user/add">增加用户</Link>
              <br />
              <br />
              <br />

              <Link to="/user/edit">编辑用户</Link>
            </div>

            <div className="right">
              {/* <Route exact path="/user/" component={Info} />

              <Route path="/user/main" component={Main} /> */}

              {this.props.routes.map((value, key) => {
                return (
                  <Route
                    key={key}
                    exact
                    path={value.path}
                    component={value.component}
                  />
                );
              })}

              {/* <Route exact path="/user/" component={UserList} />

              <Route path="/user/add" component={UserAdd} /> */}
            </div>
          </div>
        </div>
      </Router>
    );
  }
}

export default User;
