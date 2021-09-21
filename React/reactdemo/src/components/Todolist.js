import React, {Component} from 'react';

class Todolist extends Component {
    constructor(props) {
        super(props);
        this.state = {  
            username: '1111'
        };
    }

    inputChange = (e) => {
        this.setState({
            username: e.target.value
        })

    }


    setUserName = () => {
        this.setState({
            username: '张三'
        })
    
    }
    
    render() {
        return (
            <div>

                <h2>双向数据绑定</h2>

                {/* model改变影响view view改变反过来影响model */}

                <input value = {this.state.username} onChange = {this.inputChange}/>
                
                

                <p>{this.state.username}</p>

                <button onClick= {this.setUserName}>改变username的值</button>
            </div>
            
        );
    }
}

export default Todolist;