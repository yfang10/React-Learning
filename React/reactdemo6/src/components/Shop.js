import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import ShopAdd from "./Shop/ShopAdd";
import ShopList from "./Shop/ShopList";

class Shop extends Component {
  constructor(props) {
    super(props);
    this.state = {
      msg: "我是一个商户组件",
    };
  }
  render() {
    return (
      <Router>
        <div className="user">
          <div className="content">
            <div className="left">
              <Link to={`${this.props.match.url}/`}>增加商户</Link>
              <br />
              <br />
              <br />

              <Link to={`${this.props.match.url}/list`}>商户列表</Link>
            </div>

            <div className="right">
              <Route
                exact
                path={`${this.props.match.url}/`}
                component={ShopAdd}
              />

              <Route
                path={`${this.props.match.url}/list`}
                component={ShopList}
              />
            </div>
          </div>
        </div>
      </Router>
    );
  }
}

export default Shop;
