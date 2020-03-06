import React from 'react';

const Newtask = ({submitHandler, setNewTask, newTask}) => {

    return(
        <div>
            <form onSubmit={submitHandler}>
                <label>Things to do </label>
                <input type="text" value={newTask} name="task"  onChange={setNewTask}/> 
                <br/>
                <input type="submit" value="Add" />
            </form>
        </div>

    )

}

export default Newtask;
