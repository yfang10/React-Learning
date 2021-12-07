/* 
1. react.js是React的核心库
2. react-dom.js是提供与DOM相关的功能
*/
import React from 'react';
import ReactDOM from 'react-dom';
// import '.assets/css/index.css';    CSS可以删掉

//引入app.js这个组件
import App from './App';




ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

