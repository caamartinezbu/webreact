import React from "react";
import '../css/TodoCounter.css';
import { TodoContext } from "../TodoContext";


// Desestructuramos los props que pasamos al componente
function TodoCounter(){

const {totalTodos, completedTodos} = React.useContext(TodoContext);

    return(
        <h2 className="TodoCounter">Has completado {completedTodos} de {totalTodos} ToDos</h2>
    );
}

export  {TodoCounter};
