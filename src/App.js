//import './App.css';
import React from "react";
import {TodoCounter} from './TodoCounter'; // importo la funsion, valiable lo que quiera pero llamandola especificamente {TodoCounter}
import { TodoSearch } from "./TodoSearch";
import { TodoList } from "./TodoList";
import { TodoItem } from "./TodoItem";
import { CreateTodoButton } from "./CreateTodoButton";

 const defoulTodos = [
  {text:'Cortar cebolla',completed:false},
  {text:'Tomar el curso de react diario',completed:true},
  {text:'Llorar con la llorona',completed:false},
  {text:'add kakakaka',completed:true},

]; 



function App() {  // si empieza con letra mayuscula, es un componente

   // Estado inicial de nuestros TODOs
  const [todos, setTodos] = React.useState(defoulTodos)  
   // El estado de nuestra búsqueda
  const [searchValue, setSearchValue] = React.useState(''); // creamos el estado hooks
    // Cantidad de TODOs completados
  const completedTodos = todos.filter(todo => todo.completed).length;
    // Cantidad total de TODOs
  const totalTodos = todos.length; 
 // Creamos una nueva variable tipo arrays en donde guardaremos las coincidencias con la búsqueda
  let searchTodos =[];
// Lógica para filtrar
  if (!searchValue.length >= 1){
      searchTodos=todos;
  }else{
    searchTodos= todos.filter(todo =>{
      const todoText = todo.text.toLowerCase();
      const searchText = searchValue.toLowerCase();
      return todoText.includes(searchText);


    })
  }

  return (

 <React.Fragment>      {   /*JSX solo admite que le enviemos un solo componente toca embeber todo dentro de un React.Fragment */}
   
    <TodoCounter
    total={totalTodos}
    completed={completedTodos}
    />
 

    <TodoSearch
    searchValue={searchValue}
    setSearchValue={setSearchValue}
    />



   <TodoList>
   {searchTodos.map(todo=>(
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


