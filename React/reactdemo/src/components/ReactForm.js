import React, {Component} from 'react';

class ReactForm extends Component{
    constructor(props){
        super(props);
        this.state = {
            msg: 'react表单',
            name: '',
            sex: '1',
            city: [
                '北京', '上海', '深圳'
            ],

            hobby: [
                {
                    'title': '睡觉',
                    'checked': true
                },

                {
                    'title': '吃饭',
                    'checked': false
                },

                {
                    'title': '写代码',
                    'checked': true
                },   
            ],

            info: ''
        };
    }

    handleSubmit = (e) => {
        // 阻止submit的提交时间

        e.preventDefault();
        console.log(this.state.name, this.state.sex, this.state.city, this.state.hobby, this.state.info)
    }

    handleName = (e) => { 
        this.setState({
            name: e.target.value
        })
        
    }

    handleSex = (e) => {
        this.setState({
            sex: e.target.value
        })
    }

    handleCity = (e) => {
        this.setState({
            city: e.target.value
        })
    }
    
    handleHobby = (key) => {
        var hobby = this.state.hobby;

        hobby[key].checked =! hobby[key].checked;

        this.setState({
            hobby: hobby
        })
    }

    handleInfo = (e) => {
        this.setState({
            info: e.target.value
        })
    }

    render(){
        return(
            <div>

                {this.state.msg}

                <form onSubmit = {this.handleSubmit}>

                   用户名:<input type = "text" value = {this.state.name} onChange = {this.handleName}/>

                   性别: <input type = "radio" value = "1"  checked = {this.state.sex === 1} onChange = {this.handleSex}/>男

                   性别: <input type = "radio" value = "2"  checked = {this.state.sex === 2} onChange = {this.handleSex}/>女


                居中城市: 
                <select value = {this.state.city} onChange = {this.handleCity}>
                    {
                        this.state.city.map(function(value, key){
                            return <option key = {key}>{value}</option>
                        })
                    }
                    </select>


                    爱好:

                    {

                        //注意this的指向
                        this.state.hobby.map((value, key) => {
                            return (
                                <div key = {key}>

                                    <input type = "checkbox" checked = {value.checked} onChange = {this.handleHobby.bind(this, key)} />  {value.title}
                                    </div>
                            ) 
                        })
                    }


                    
                   

                  备注： <textarea value = {this.state.info} onChange = {this.handleInfo} />

                    <input type = "submit" defaultvalue = '提交' />





                </form>

            </div>

        )
    }

}

export default ReactForm