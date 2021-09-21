import React, {Component} from 'react';
// import './assets/css/App.css';
// import logo from './assets/images/logo.svg';


//引入Home组件
// import Home from './components/Home';

//引入News组件
// import News from './components/News';

//引入List组件
import List from './components/List';

//引入Todolist组件
import Todolist from './components/Todolist';

class App extends Component {

  
  //render 模板  jsx语法
  render(){
  return (
    <div className="App">
      你好react 根组件

      {/* <Home/>

      <News/> */}

      <List/>

      <br/>

      <Todolist/>
    </div>
  );
 }
}

export default App;
