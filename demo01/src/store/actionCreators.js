/*
 * @Author: 前端劝退师-李逍遥
 * @Date: 2020-06-23 10:25:22
 * @LastEditors: 前端劝退师-李逍遥
 * @LastEditTime: 2020-07-02 17:01:23
 * @FilePath: \demo01\src\store\actionCreators.js
 */ 
import axios from 'axios';
import {VALUE_CHANGE,LIST,DELETE_ITEM,GET_LIST} from './actionTypes'
import store from '.';


export const changeInputValue = (value)=>({
    type:VALUE_CHANGE,
    value
})

export const addList = ()=>({
    type:LIST
})

export const deleteList = (index)=>({
    type:DELETE_ITEM,
    index
})
export const getListAction = (data)=>({
    type:GET_LIST,
    data
})
export const getTodoList = ()=>{
    return (dispatch)=>{
        axios.get('接口地址').then(res=>{
            let data = res.data.banners
            let arr = []
            data.map(el=>{
                arr.push(el.imageUrl)
            })
            const action = getListAction(arr)
            store.dispatch(action)
        })
    }
}