//import './App.css';
import React from "react";
import {TodoCounter} from './TodoCounter'; // importo la funsion, valiable lo que quiera pero llamandola especificamente {TodoCounter}
import { TodoSearch } from "./TodoSearch";
import { TodoList } from "./TodoList";
import { TodoItem } from "./TodoItem";
import { CreateTodoButton } from "./CreateTodoButton";

 const todos = [
  {text:'Cortar cebolla',completed:true},
  {text:'Tomar el curso de react diario',completed:false},
  {text:'Llorar con la llorona',completed:false},
  {text:'add kakakaka',completed:true},

]; 



function App() {  // si empieza con letra mayuscula, es un componente
  return (

 <React.Fragment>      {   /*JSX solo admite que le enviemos un solo componente toca embeber todo dentro de un React.Fragment */}
   
    <TodoCounter/>
 

    <TodoSearch/>



   <TodoList>
   {todos.map(todo=>(
     <TodoItem 
     key={todo.text } 
     text={todo.text}
     completed={todo.completed}/>
   ))}
  </TodoList>

 <CreateTodoButton/> 


 </React.Fragment>
  );
}

export default App;


