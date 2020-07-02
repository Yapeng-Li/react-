/*
 * @Author: 前端劝退师-李逍遥
 * @Date: 2020-07-02 14:28:26
 * @LastEditors: 前端劝退师-李逍遥
 * @LastEditTime: 2020-07-02 14:37:36
 * @FilePath: \demo02\src\store\index.js
 */ 
import {createStore} from 'redux'
import reducer from './reducer'


const store = createStore(reducer)
export default store