import React, { Component } from "react";

// import Home from "./components/Home.js";
import LifeCycle from "./components/LifeCycle.js";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      flag: true,
      title: "我是app组件的title",
    };
  }

  setFlag = () => {
    this.setState({
      flag: !this.state.flag,
    });
  };

  setTitle = () => {
    this.setState({
      title: "我是父组件改变后的title",
    });
  };

  render() {
    return (
      <div className="App">
        {/* <Home  />         */}

        {this.state.flag ? <LifeCycle title={this.state.title} /> : ""}

        <br />
        <br />

        <button onClick={this.setFlag}>挂载和销毁生命周期函数组件</button>

        <br />

        <br />

        <button onClick={this.setTitle}>改变父组件title</button>
      </div>
    );
  }
}

export default App;
