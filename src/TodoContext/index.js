import React from "react";
import { useLocalStorage } from "./useLocalStorage"; 

const TodoContext = React.createContext();

function TodoProvider(props) {


    const {
        item: todos,
        saveItem: saveTodos,
        loading,
        error,
    } = useLocalStorage('TODOS_V1', []);


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
        <TodoContext.Provider value={{

            loading,
            error,
            totalTodos,
            completedTodos,
            searchValue,
            setSearchValue,
            searchedTodos,
            completeTodo,
            deleteTodo,


        }}>
            {props.children}
        </TodoContext.Provider>
    );
}


export {TodoContext, TodoProvider};