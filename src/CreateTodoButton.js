import React from "react";
import './css/CreateTodoBotton.css';

function CreateTodoButton(props){

    const onClickButton = (msg)=>{
        alert(msg)
    }


    return(
        <button 
        className="CreateTodoButton"
        onClick={() => onClickButton('Aqui se debera crear un modal para capturar datos')}   
        
     /*   onClick={() =>console.log('clic')}    // debemos envolver nuestra accion en una funcion
      para que no se ejecute automaticamente sino cuando le demos clic al boton*/
        >
            +
            
        </button>
    );
}

export {CreateTodoButton}