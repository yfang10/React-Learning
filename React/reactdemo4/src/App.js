import React, { Component } from "react";

import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import "./assets/css/index.css";
import Home from "./components/Home";
import News from "./components/News";
import Product from "./components/Product";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <header className="title">
            <Link to="/">首页</Link>
            <Link to="/news">新闻</Link>
            <Link to="/product">商品</Link>
          </header>

          <br />
          <hr />
          <br />

          <Route exact path="/" component={Home} />
          <Route exact path="/news" component={News} />
          <Route exact path="/product" component={Product} />
        </div>
      </Router>
    );
  }
}

export default App;
