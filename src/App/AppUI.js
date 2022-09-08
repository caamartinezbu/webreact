import React from "react";
import {TodoCounter} from '../components/TodoCounter'; // importo la funsion, valiable lo que quiera pero llamandola especificamente {TodoCounter}
import { TodoSearch } from "../components/TodoSearch";
import { TodoList } from "../components/TodoList";
import { TodoItem } from "../components/TodoItem";
import { CreateTodoButton } from "../components/CreateTodoButton";


function AppUI({
    loading,
    error,
    totalTodos,
    completedTodos,
    searchValue,
    setSearchValue,
    searchedTodos,
    completeTodo,
    deleteTodo,
}) {

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
            {error && <p>ups! ha pasado algo ponte a llorar jajaj...</p>}
            {loading && <p>estamos cargando espere...</p>}
            {(!loading && !searchedTodos.length) && <p>Crea tu primer ToDo</p>}

            {searchedTodos.map(todo=>(
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

export {AppUI};