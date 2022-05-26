// import React, { Component } from "react";

// class Example extends Component {
//   constructor(props) {
//     super(props);
//     this.state = { count: 0 };
//   }

//   appCount = () => {
//     this.setState({
//       count: this.state.count + 1,
//     });
//   };
//   render() {
//     return (
//       <div>
//         <p>You clicked {this.state.count} times</p>
//         <button onClick={this.appCount}>Click on me</button>
//       </div>
//     );
//   }
// }

// export default Example;

import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

function Index() {
  useEffect(() => {
    console.log("useEffect=>你来了！Index页面");
    return () => {
      console.log("你走了！index");
    };
  }, []);
  return <h2>JSpang.com</h2>;
}

function List() {
  useEffect(() => {
    console.log("useEffect=>你来了！List页面");
    return () => {
      console.log("你走了！List");
    };
  }, []);
  return <h2>List page</h2>;
}

function Example() {
  const [count, setCount] = useState(0);
  useEffect(() => {
    console.log(`useEffect=>You clicked ${count} times`);
    return () => {
      console.log("-----------------");
    };
  }, []);
  return (
    <Router>
      <div>
        <p> You clicked {count} times</p>
        <button
          onClick={() => {
            setCount(count + 1);
          }}
        >
          Click on me
        </button>

        <ul>
          <li>
            <Link to="/">首页</Link>
          </li>

          <li>
            <Link to="/list/">列表</Link>
          </li>
        </ul>

        <Route path="/list/" component={List} />

        <Route path="/" exact component={Index} />
      </div>
    </Router>
  );
}

export default Example;
