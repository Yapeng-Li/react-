/*
 * @Author: 前端劝退师-李逍遥
 * @Date: 2020-07-02 14:22:00
 * @LastEditors: 前端劝退师-李逍遥
 * @LastEditTime: 2020-07-02 16:56:06
 * @FilePath: \demo02\src\TodoList.js
 */ 
import React, { Fragment} from 'react';
import {connect} from 'react-redux'

const TodoList = (props)=>{
    let {inputValue,inputChange,addList,list,deleteItem} = props
    return ( 
        <Fragment>
            <input value={inputValue} placeholder={inputValue} onChange={inputChange}/>
            <button onClick={addList}>提交</button>
            <ul>
                {
                    list.map((item,index)=>{
                        return(
                            <li key={index} onClick={()=>{deleteItem(index)}}>
                                {item}
                            </li>
                        )
                    })
                }
            </ul>
        </Fragment>
        );
}

const stateToProps = (state)=>{
    return{
        inputValue : state.inputValue,
        list : state.list
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        inputChange(e){
            const action = {
                type:'change_input',
                value:e.target.value
            }
            dispatch(action)
        },
        addList(){
            const action = {
                type:'add_list',
            }
            dispatch(action)
        },
        deleteItem(index){
            const action = {
                type:'delete_list',
                index
            }
            dispatch(action)
            console.log(index)
        }
    }
}

export default connect(stateToProps,mapDispatchToProps)(TodoList);