import React from "react";
import '../css/TodoCounter.css';


// Desestructuramos los props que pasamos al componente
function TodoCounter({total, completed}){



    return(
        <h2 className="TodoCounter">Has completado {completed} de {total} ToDos</h2>
    );
}

export  {TodoCounter};
