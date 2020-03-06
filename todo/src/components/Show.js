import React from 'react';

const Show = ({listState, remove}) =>{
    return(
        <div>
            {listState.map((item, i) =>
                <p key={i}>
                     {item}
                     <button type= 'submit' onClick={()=>remove(i)}>Delete</button>
                </p>
            )}
         </div>
    )
}
 export default Show;