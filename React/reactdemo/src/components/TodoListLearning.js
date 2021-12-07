import React, { Component } from  'react';

class TodoListLearning extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            list: [

            ],
            // username: '1111',


            list2: [
                {
                    title: '录制ionic',
                    checked: true
                },

                {
                    title: '录制nodejs',
                    checked: false
                },

                {
                    title: '录制React',
                    checked: true
                },

                {
                    title: '录制React',
                    checked: false
                },


            ]
         };
    }

    addData = () => {
        // alert(this.refs.title.value)
       
            var tempList = this.state.list
            tempList.push(this.refs.title.value);       //  返回值是一个索引

            this.refs.state.value = "";         //input的值变为空

            this.setState({
                list: tempList
            })
    
    }


   removeData = (key) => {
    //    alert(key);
    var tempList = this.state.list;
    tempList.splice(key, 1)

    this.setState({
        list: tempList
    })
}


    addList = (e) => {
        if(e.keyCode === 13){
            let title = this.refs.title.value

            let temp = this.state.list2;

            temp.push({
                title: title,
                checked: false
            })

            //改变后的值赋值给list2
            this.setState({
                list2: temp
            })

            //表单置为空
            this.refs.title.value = ""
        }
    }

    checkboxChange = (key, val) => {
        let tempList2 = this.state.list2

        tempList2[key].checked =! tempList2[key].checked

        this.setState({
            list2: tempList2
        })

    }


    removeData2 = (key) => {
        //    alert(key);
        var tempList3 = this.state.list2;
        tempList3.splice(key, 1)
    
        this.setState({
            list: tempList3
        })
    }

   
    render() {
        return (
            <div>
                <h2>React todolist展示</h2>

                <input ref = "title" />
                --<button onClick = {this.addData}>增加</button>

                 {/* <ul>
                    用到this要注意this指向
                        {
                            this.state.list.map((value, key) =>{
                                return(
                                    <li key = { key }>{ value }  <button onClick = {this.removeData.bind(this, key)}>删除</button>
                                    </li>
                                )
                            })
                        }
                        </ul>
                      */}
                 

                <header className = 'title'>TodoList:<input ref = "title" onKeyUp={this.addList} /></header>
                <h3>待办事项</h3>

                <ul>
                    {
                this.state.list2.map((value, key) =>{
                    if(!value.checked){
                        return(

                            <li>
                            <input type='checkbox' checked={ value.checked } onChange={this.checkboxChange.bind(this, key)} />
                            
                            {value.title}

                            --<button onClick={this.removeData2.bind(this, key)}>删除</button>

                            </li>
                        )
                    }

                })
            }

                </ul>


                <h3>已完成事项</h3>

                <ul>
                    {
                this.state.list2.map((value, key) =>{
                    if(value.checked){
                        return(

                            <li>
                            <input type='checkbox' checked={ value.checked } onChange={this.checkboxChange.bind(this, key)} />
                            
                            {value.title}

                            --<button onClick={this.removeData2.bind(this, key)}>删除</button>

                            </li>
                        )
                    }

                })
            }

                </ul>
            </div>
            
        );
    }
}

export default TodoListLearning;