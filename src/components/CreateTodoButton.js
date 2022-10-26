import React from "react";
import '../css/CreateTodoBotton.css';

function CreateTodoButton(props){

    const onClickButton = ()=>{
       props.setOpenModal(prevstate => !prevstate);
    };


    return(
        <button 
        className="CreateTodoButton"
        onClick={onClickButton}   
        
     /*   onClick={() =>console.log('clic')}    // debemos envolver nuestra accion en una funcion
      para que no se ejecute automaticamente sino cuando le demos clic al boton
      
      onClick={() => onClickButton('Aqui se debera crear un modal para capturar datos')}
      */
        >
            +
            
        </button>
    );
}

export {CreateTodoButton}