import React, { Component } from "react";

import { BrowserRouter as Router, Route, Link } from "react-router-dom";

// import Home from "./components/Home";

// import User from "./components/User";

// import Shop from "./components/Shop";

// import News from "./components/News";

import routes from "./model/router";

import "./assets/css/index.css";

// let routes = [
//   {
//     path: "/",
//     component: Home,
//     exact: true,
//   },

//   {
//     path: "/user",
//     component: User,
//   },

//   {
//     path: "/shop",
//     component: Shop,
//   },

//   {
//     path: "/news",
//     component: News,
//   },
// ];

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <header className="title">
            <Link to="/">首页组件</Link>

            <Link to="/user">用户页面</Link>

            <Link to="/shop">商户</Link>

            <Link to="/News">新闻</Link>
          </header>

          {routes.map((route, key) => {
            if (route.exact) {
              return (
                <Route
                  key={key}
                  exact
                  path={route.path}
                  // component={route.component}
                  // routes={route.routes}
                  render={(props) => (
                    <route.component {...props} routes={route.routes} />
                  )}
                />
              );
            } else {
              return (
                <Route
                  key={key}
                  path={route.path}
                  // component={route.component}
                  // routes={route.routes}

                  render={(props) => (
                    <route.component {...props} routes={route.routes} />
                  )}
                />
              );
            }
          })}

          {/* <Route exact path="/" component={Home} />
          <Route path="/user" component={User} />
          <Route path="/shop" component={Shop} /> */}
        </div>
      </Router>
    );
  }
}

export default App;
