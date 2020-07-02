/*
 * @Author: 前端劝退师-李逍遥
 * @Date: 2020-06-20 14:18:31
 * @LastEditors: 前端劝退师-李逍遥
 * @LastEditTime: 2020-07-02 10:47:31
 * @FilePath: \demo01\src\store\index.js
 */ 
import {createStore, applyMiddleware, compose} from 'redux'
import reducer from './reducer'
import thunk from 'redux-thunk'

const composeEnhancers =   window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}):compose

const enhancer = composeEnhancers(applyMiddleware(thunk))

const store = createStore(
    reducer,
    enhancer
    )//创建数据存储仓库
export default store
