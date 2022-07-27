//import './App.css';
import React from "react";
import {TodoCounter} from './TodoCounter';
import { TodoSearch } from "./TodoSearch";
import { TodoList } from "./TodoList";
import { TodoItem } from "./TodoItem";
import { CreateTodoButton } from "./CreateTodoButton";

 const todos = [
  {text:'Cortar cebolla',completed:false},
  {text:'Tomar el curso de react diario',completed:false},
  {text:'Llorar con la llorona',completed:false},
  {text:'add kakakaka',completed:false},

]; 



function App() {  // si empieza con letra mayuscula, es un componente
  return (

 <React.Fragment>      {/*JSX solo admite que le enviemos un solo componente toca embeber todo dentro de un React.Fragment */}
   
    <TodoCounter/>
 

    <TodoSearch/>



   <TodoList>
   {todos.map(todo=>(
     <TodoItem key={todo.text } text={todo.text}/>
   ))}
  </TodoList>

 <CreateTodoButton/> 


 </React.Fragment>
  );
}

export default App;
