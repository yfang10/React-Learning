import React, {Component} from 'react';
// import './assets/css/App.css';
// import logo from './assets/images/logo.svg';


//引入Home组件
import Home from './components/Home';

//引入News组件
import News from './components/News';


class App extends Component {

  
  //render 模板  jsx语法
  render(){
  return (
    <div className="App">
      你好react 根组件

      <Home/>

      <News/>
    </div>
  );
 }
}

export default App;
