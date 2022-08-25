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

   
  const [todos, setTodos] = React.useState(defoulTodos)  // Estado inicial de nuestros TODOs
  const [searchValue, setSearchValue] = React.useState(''); // creamos el estado hooks // El estado de nuestra búsqueda
  const completedTodos = todos.filter(todo => todo.completed).length;    // Cantidad de TODOs completados
  const totalTodos = todos.length;     // Cantidad total de TODOs
  let searchTodos =[];  // Creamos una nueva variable tipo arrays en donde guardaremos las coincidencias con la búsqueda


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


const completeTodo = (text) => {
  const todoIndex = todos.findIndex(todo => todo.text === text);
  const newTodos =[...todos];
  todos[todoIndex].completed = true;
  setTodos(newTodos);

  // la misma forma 
  // todos[todoIndex] = {
  //   text: todos[todoIndex].text,
  //   completed: true
  // };
};
const deleteTodo = (text) => {
  const todoIndex = todos.findIndex(todo => todo.text === text);
  const newTodos =[...todos];
  newTodos.splice(todoIndex, 1)
  setTodos(newTodos);

};



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
     completed={todo.completed}
     onComplete = {() => completeTodo(todo.text)}
     onDelete = {() => deleteTodo(todo.text)}

     />
   ))}
  </TodoList>

 <CreateTodoButton/> 


 </React.Fragment>
  );
}

export default App;


