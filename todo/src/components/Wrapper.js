import React, { useState } from 'react';
import Newtask from './Newtask';
import Show from './Show';

const Wrapper =() => {

    const[newTask, setNewTask] = useState ("")
    const[listState, setListState] = useState  ([])


    const onChangehandler = (event) => {
        setNewTask(event.target.value)
    }
    
    const onSubmitHandler = (event) => {
        event.preventDefault();
        setListState([
            ...listState,
            [newTask]
        ]);
        setNewTask("")
        
    }
    const deleteItem= (event) => {
        setListState(listState.filter((item, i)=>i!=event))
    }


    return(
        <div>
            <Show listState={listState} remove={deleteItem}/>
            <Newtask newTask={newTask} setNewTask={onChangehandler} submitHandler={onSubmitHandler}/>
        </div>
    )

}

export default Wrapper;