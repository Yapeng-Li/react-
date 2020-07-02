/*
 * @Author: 前端劝退师-李逍遥
 * @Date: 2020-06-20 12:51:17
 * @LastEditors: 前端劝退师-李逍遥
 * @LastEditTime: 2020-07-02 11:42:47
 * @FilePath: \demo01\src\TodoList.js
 */ 
import React, { Component,Fragment } from 'react';
import 'antd/dist/antd.css'
import {Input,Button,List} from 'antd'
import store from './store'
import {changeInputValue,addList,deleteList,getTodoList} from './store/actionCreators'


const data=[
    '早8点开晨会，分配今天的开发工作',
    '早9点和项目经理作开发需求讨论会',
    '晚5:30对今日代码进行review'
]
class TodoList extends Component {
    constructor(props) {
        super(props);
        this.state = store.getState()
        this.valueChage = this.valueChage.bind(this)
        this.add = this.add.bind(this)
        store.subscribe(()=>{
            this.setState(store.getState())
        })
    }
    componentDidMount(){
            const action = getTodoList()
            store.dispatch(action)
    }
    render() { 
        return ( 
            <Fragment>
                <div>
                    <Input placeholder={this.state.inputValue} value={this.state.inputValue} style={{width:'200px',marginRight:'20px'}} onChange={this.valueChage}/>
                    <Button type="primary" onClick={this.add}>添加</Button>
                </div>
                <List
                    size="large"
                    bordered
                    dataSource={this.state.list}
                    renderItem={(item,index) => <List.Item onClick={this.deleteItem.bind(this,index)}>{item}</List.Item>}
                />
            </Fragment>
         )
    }
    valueChage(e){
        const action = changeInputValue(e.target.value)
        store.dispatch(action)
    }
    add(){
        const action = addList()
        store.dispatch(action)
    }
    deleteItem(index){
        const action = deleteList(index)
        store.dispatch(action)
    }
}
 
export default TodoList;