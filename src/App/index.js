//import './App.css';
import React from "react";
import { AppUI } from "./AppUI";

//  const defoulTodos = [
//   {text:'Cortar cebolla',completed:false},
//   {text:'Tomar el curso de react diario',completed:true},
//   {text:'Llorar con la llorona',completed:false},
//   {text:'add kakakaka',completed:true},
// ]; 

function useLocalStorage(itemName, initialValue){ // Hook de localstorage
  const [error, setError] = React.useState(false);

  const [loading, setLoading] = React.useState(true);

  // Guardamos nuestros TODOs del localStorage en nuestro estado  React.useState(parsedItem)
  const [item, setItem] = React.useState(initialValue)  // Estado inicial de nuestros TODOs


  React.useEffect(() =>{
    setTimeout(() =>{
        try{
              // Traemos nuestros TODOs almacenados
              const localStorageItem = localStorage.getItem('itemName'); 
              let parsedItem;

              /*Si el usuario es nuevo no existe un item en localStorage,
                por lo tanto guardamos uno con un array vacío*/
              if (!localStorageItem) {
                localStorage.setItem('itemName', JSON.stringify(initialValue)); // guardar datos setItem(name, dato)
                parsedItem = initialValue;

              } else {
                  // Si existen TODOs en el localStorage los regresamos como nuestros todos
                  parsedItem = JSON.parse(localStorageItem)
                }
                setItem(parsedItem);
                setLoading(false);
          }catch(error){
            setError(error);

          }
    },1000)
  });

 // Creamos la función (arrow funtion) en la que actualizaremos nuestro localStorage
  const saveItem = (newItem) => {
  try{
      // Convertimos a string nuestros TODOs en una variable
      const stringifiedItem = JSON.stringify(newItem);
      // Los guardamos en el localStorage
      localStorage.setItem('itemName', stringifiedItem);
      // Actualizamos nuestro estado
      setItem(newItem);
  }catch(error){
    setError(error);

  }
  };
return {
  item,
  saveItem,
  loading,
  error,
};
}


function App() {  // si empieza con letra mayuscula, es un componente

  const {
    item : todos,
    saveItem : saveTodos,
    loading,
    error,
    
  } =useLocalStorage('TODOS_V1',[]);


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
    loading={loading}
    error={error}
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


