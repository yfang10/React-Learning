import React from "react";

class LifeCycle extends React.Component {
  constructor(props) {
    console.log("01. 构造函数");
    super(props);
    this.state = {
      msg: "我是一个msg",
    };
  }

  //组件即将挂载触发生命周期函数
  componentWillMount() {
    console.log("02. 组件即将挂载");
  }

  componentDidMount() {
    //DOM操作放在这个生命周期函数中 请求数据也在这里
    console.log("04. 组件挂载");
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log("01. 是否要更新数据");
    return true;
    console.log(nextProps);
    console.log(nextState);
  }

  //将要更新数据的时候触发
  componentWillUpdate() {
    console.log("02. 组件将要更新");
  }

  //组件更新完成
  componentDidUpdate() {
    console.log("04. 组件数据更新");
  }

  componentWillReceiveProps() {
    console.log("父子组件传值, 父组件里面改变了props的值触发的方法");
  }

  setMsg = () => {
    this.setState({
      msg: "我是改变后的msg数据",
    });
  };

  //组件销毁的时候触发的生命周期函数
  componentWillUnmount() {
    console.log("组件销毁了");
  }

  render() {
    console.log("03. 数据渲染render");
    return (
      <div>
        生命周期函数演示---{this.state.msg}---{this.props.title}
        <br />
        <br />
        <button onClick={this.setMsg}>更新msg的数据</button>
      </div>
    );
  }
}

export default LifeCycle;
