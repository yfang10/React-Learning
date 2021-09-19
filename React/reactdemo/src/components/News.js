import React from 'react';

import logo from '../assets/images/1.jpg';

import '../assets/css/index.css';

class News extends React.Component{

    constructor(props){
        super(props);       //用于父子组件传值

        //定义数据

        this.state = {
            userinfo: '张三',
            msg: '新闻',
            list: ['1111111111111', '222222222222222222', '3333333333333'],

            list2: [<h2 key = '1'>我是一个h2</h2>, <h2 key = '2'>我是一个h2</h2>],

            list3: [
                {title: '新闻111111111111'},
                {title: '新闻222222222222'},
                {title: '新闻333333333333'},
                {title: '新闻444444444444'},
            ]
        }
    }

render(){

    var listResult = this.state.list.map(function(value, key){
        
        return<li key = {key}>{value}</li>
    })
        return(
            <div className = 'news'>

                <h2>{this.state.userinfo}</h2>

                <h3>{this.state.msg}</h3>
                
                <img src = {logo} alt = 'model'/>
       
                <img src = {require('../assets/images/1.jpg')} alt = 'model'/>

                <img src = "https://www.baidu.com/img/xinshouye_353af22a7f305e1fb6cfa259394dea9b.png" alt = "baidu"/>
                <ul>
                    <li>这是一个列表</li>
                    <li>这是一个列表</li>
                    <li>这是一个列表</li>
                    <li>这是一个列表</li>
                </ul>

                <br/>

                {this.state.list2}

                <br/>

                {listResult}
                
                <br/>

                {this.state.list3.map(function(value, key){
                    return<li key = {key}>{value.title}</li>
                })}
            </div>
        )
    }

}

export default News;