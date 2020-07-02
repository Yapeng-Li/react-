/*
 * @Author: 前端劝退师-李逍遥
 * @Date: 2020-07-02 14:30:24
 * @LastEditors: 前端劝退师-李逍遥
 * @LastEditTime: 2020-07-02 16:35:00
 * @FilePath: \demo02\src\store\reducer.js
 */ 
const defaultState = {
    inputValue:'请输入',
    list:[]
}

export default (state = defaultState,action) =>{
    const newState = JSON.parse(JSON.stringify(state))
    switch (action.type){
        case 'change_input':
            newState.inputValue = action.value
            return newState
        case 'add_list':
            newState.list.push(newState.inputValue)
            newState.inputValue = ''
            return newState
        case 'delete_list':
            newState.list.splice(action.index,1)
            return newState
    }
    return state
}