//import './App.css';
import React from "react";
import { AppUI } from "./AppUI";

//  const defoulTodos = [
//   {text:'Cortar cebolla',completed:false},
//   {text:'Tomar el curso de react diario',completed:true},
//   {text:'Llorar con la llorona',completed:false},
//   {text:'add kakakaka',completed:true},
// ]; 

function useLocalStorage(){
  
}


function App() {  // si empieza con letra mayuscula, es un componente

// Traemos nuestros TODOs almacenados
  const localStorageTodos = localStorage.getItem('TODOS_V1'); 
  let parsedTodos;

/*Si el usuario es nuevo no existe un item en localStorage,
  por lo tanto guardamos uno con un array vacío*/
  if (!localStorageTodos) {
    localStorage.setItem('TODOS_V1', JSON.stringify([])); // guardar datos setItem(name, dato)
    parsedTodos = [];

  } else {
    // Si existen TODOs en el localStorage los regresamos como nuestros todos
    parsedTodos = JSON.parse(localStorageTodos)

  }

// Guardamos nuestros TODOs del localStorage en nuestro estado  React.useState(parsedTodos)
  const [todos, setTodos] = React.useState(parsedTodos)  // Estado inicial de nuestros TODOs
  const [searchValue, setSearchValue] = React.useState(''); // creamos el estado hooks // El estado de nuestra búsqueda
  const completedTodos = todos.filter(todo => todo.completed).length;    // Cantidad de TODOs completados
  const totalTodos = todos.length;     // Cantidad total de TODOs
  let searchedTodos = [];  // Creamos una nueva variable tipo arrays en donde guardaremos las coincidencias con la búsqueda


  // Lógica para filtrar
  if (!searchValue.length >= 1) {
    searchedTodos = todos;
  } else {
    searchedTodos = todos.filter(todo => {
      const todoText = todo.text.toLowerCase();
      const searchText = searchValue.toLowerCase();
      return todoText.includes(searchText);


    })
  }

 // Creamos la función (arrow funtion) en la que actualizaremos nuestro localStorage
  const saveTodos = (newTodos) => {
    // Convertimos a string nuestros TODOs en una variable
    const stringifiedTodos = JSON.stringify(newTodos);
    // Los guardamos en el localStorage
    localStorage.setItem('TODOS_V1', stringifiedTodos);
    // Actualizamos nuestro estado
    setTodos(newTodos);
  };

  const completeTodo = (text) => {
    const todoIndex = todos.findIndex(todo => todo.text === text);
    const newTodos = [...todos];
    todos[todoIndex].completed = true;
     // Cada que el usuario interactúe con nuestra aplicación se guardarán los TODOs con nuestra nueva función
    saveTodos(newTodos);

    // la misma forma 
    // todos[todoIndex] = {
    //   text: todos[todoIndex].text,
    //   completed: true
    // };
  };
  const deleteTodo = (text) => {
    const todoIndex = todos.findIndex(todo => todo.text === text);
    const newTodos = [...todos];
    newTodos.splice(todoIndex, 1)
    saveTodos(newTodos);

  };



  return (
    <AppUI
      totalTodos={totalTodos}
      completedTodos={completedTodos}
      searchValue={searchValue}
      setSearchValue={setSearchValue}
      searchedTodos={searchedTodos}
      completeTodo={completeTodo}
      deleteTodo={deleteTodo}
    />
  );
}

export default App;


