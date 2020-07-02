/*
 * @Author: 前端劝退师-李逍遥
 * @Date: 2020-06-20 14:21:00
 * @LastEditors: 前端劝退师-李逍遥
 * @LastEditTime: 2020-07-02 10:29:58
 * @FilePath: \demo01\src\store\reducer.js
 */ 
import {VALUE_CHANGE,LIST,DELETE_ITEM,GET_LIST} from './actionTypes'
const defaultState = {
    inputValue : '这是数据',
    list:[]
}
export default (state = defaultState,action)=>{//就是一个方法函数
    const newState = JSON.parse(JSON.stringify(state))
    switch(action.type){
        case VALUE_CHANGE:
            newState.inputValue = action.value
            return newState
        case LIST:
            newState.list.push(newState.inputValue)
            newState.inputValue = ''
            return newState
        case DELETE_ITEM:
            newState.list.splice(action.index,1)
            return newState
        case GET_LIST:
            newState.list = action.data
            return newState
    }
        
    return state
}
