import React, { Component } from "react";

import { BrowserRouter as Router, Route } from "react-router-dom";
import "./assets/css/index.css";
import Home from "./components/Home";
import ProductContent from "./components/ProductContent";
import Login from "./components/Login";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <h2>react实现数据请求, 自助点餐系统 </h2>

          <br />
          <hr />
          <br />

          <Route exact path="/" component={Home} />

          <Route exact path="/pcontent/:id" component={ProductContent} />

          <Route exact path="/login" component={Login} />
        </div>
      </Router>
    );
  }
}

export default App;
