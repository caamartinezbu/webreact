import React from "react";
import '../css/TodoItem.css';


function TodoItem(props){

// const onComplete= () =>{
//    // alert('Se a completado la tarea ' + props.text);
// };

// const onDelete = ()=>{
//     alert('Se ha eliminado la tarea ' + props.text);
// };

    return(

        <li className="TodoItem">
            <span className={`Icon Icon-check ${props.completed && 'Icon-check--active'}`}
            onClick={props.onComplete}
            
            >✔</span>

            <p className={`TodoItem-p ${props.completed && 'TodoItem-p--complete'}`}>
                {props.text}
                </p>
            <span className="Icon Icon-delete"
            onClick={props.onDelete}
            
            >X</span>
        </li>

    );
}

export {TodoItem};