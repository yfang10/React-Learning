import React from 'react';

class News extends React.Component{

    constructor(props){
        super(props);       //用于父子组件传值

        //定义数据

        this.state = {
            userinfo: '张三'
        }
    }

render(){
        return(
            <div>

                <h2>{this.state.userinfo}</h2>
                <ul>
                    <li>这是一个列表</li>
                    <li>这是一个列表</li>
                    <li>这是一个列表</li>
                    <li>这是一个列表</li>
                </ul>
            </div>
        )
    }
}

export default News;