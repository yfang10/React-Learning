import React, {Component} from 'react';

import '../assets/css/index.css';


//绑定属性注意:
// class要换成className
// for要换成htmlFor
// style:
// <div style = {{"color": "red"}}>我是一个红色的div 行内样式</div>
// 其他的属性和以前的写法一样


class Home extends Component{

    constructor(props){
        super(props);

    //定义数据

    this.state = {
        name: '张三',
        age: '30',
        msg: '我是一个home组件',
        message: '我是一个message',
        title: '我是一个title',
        color: 'red',
        style: {
            color:'red',
            fontsize: '40px'
        },
            username: 'ITlearning'
        
    }

//第二种改变this指向的方法
    this.getMessage = this.getMessage.bind(this);
}


run = (event) =>{
    // alert('我是一个run方法')
    alert(event.target);        /* 获取执行时间的DOM节点*/
    
    event.target.style.background = 'red'; 

    //获取dom的属性
    alert(event.target.getAttribute('aid'))
}

inputChange = (e) =>{

    //获取表单的值
    console.log(e.target.value);

    this.setState({
        username: e.target.value
    })

}

getInput = () => {
    alert(this.state.username);
}


getData(){
    alert(this.state.msg);
}

getMessage(){
    alert(this.state.message);
}


getName = () =>{
    alert(this.state.username)
}


//第三种改变this指向的方法
setData =() =>{

    //改变state的值
    this.setState({
        msg: '我是一个home组件改变后的值'
    })

}


setName =(str) =>{

    //改变state的值
    this.setState({
        username: str

})
}


    render(){
        
        return (
        <div>

            <h2>表单事件</h2>

            {/* 获取表单的值
            1. 监听表单的改变事件   onChange
            2. 在改变的事件里面获取表单输入的值     事件对象
            3. 把表单输入的值赋值给username     this.setState({})
            4. 点击按钮的时候获取state里面的    this.state.username
                
            */}
            <input onChange = {this.inputChange}/><button onClick = {this.getInput}>获取input的值</button>

            <br/>


            <button aid = "123" onClick = {this.run}>事件对象</button>

            <br/>

            <button onClick = {this.run}>执行方法</button>

            <br/>

            <button onClick = {this.getData.bind(this)}>获取数据---第一种改变this指向的方法</button>

            <br/>

            <button onClick = {this.getMessage}>获取数据---第二种改变this指向的方法</button>

            <br/>

            <button onClick = {this.getName}>获取数据---第三种改变this指向的方法</button>

            <br/>

            <button onClick = {this.setData}>改变state里面的值</button>

            <br/>

            <button onClick = {this.setName.bind(this, '张三')}>执行方法传值</button>





            <h2>React组件里面的所有节点要被根节点包含</h2>
            <p>姓名: {this.state.name}</p>

            <p>年龄: {this.state.age}</p>

            <p>对象：{this.state.username}</p>

            <p>消息：{this.state.msg}</p>
            
            <div title = "11111">我是一个div</div>

            <br/>

            <div className = "red" title = {this.state.title}>我是一个红色的div</div>
            
            <br/>

            <div className = {this.state.color}>我是一个div1111111111</div>
            
            <br/>

            <label htmlFor = "name">姓名</label>

            <input id = "name"/>

            
            <br/>
            <br/>

            <div style = {{"color": "red"}}>我是一个红色的div 行内样式</div>

            <br/>

            <div style = {this.state.style}>我是一个红色的div 行内样式</div>
        </div>
        )
    }
}

export default Home;