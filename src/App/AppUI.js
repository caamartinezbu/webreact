import React from "react";
import { TodoContext } from "../TodoContext";
import { TodoCounter } from '../components/TodoCounter'; // importo la funsion, valiable lo que quiera pero llamandola especificamente {TodoCounter}
import { TodoSearch } from "../components/TodoSearch";
import { TodoList } from "../components/TodoList";
import { TodoForm } from "../TodoForm";
import { TodoItem } from "../components/TodoItem";
import { CreateTodoButton } from "../components/CreateTodoButton";
import { Modal } from "../Modal"


function AppUI() {

    const {
        error,
        loading,
        searchedTodos,
        completeTodo,
        deleteTodo,
        openModal,
        setOpenModal,
    } = React.useContext(TodoContext);
    return (

        <React.Fragment>      {   /*JSX solo admite que le enviemos un solo componente toca embeber todo dentro de un React.Fragment */}

            <TodoCounter />
            <TodoSearch />



            <TodoList>
                {error && <p>ups! ha pasado algo ponte a llorar jajaj...</p>}
                {loading && <p>estamos cargando espere...</p>}
                {(!loading && !searchedTodos.length) && <p>Crea tu primer ToDo</p>}

                {searchedTodos.map(todo => (
                    <TodoItem
                        key={todo.text}
                        text={todo.text}
                        completed={todo.completed}
                        onComplete={() => completeTodo(todo.text)}
                        onDelete={() => deleteTodo(todo.text)}

                    />
                ))}
            </TodoList>

            {!!openModal && ( //{searchedTodos[0]?.text}
                <Modal>
                   <TodoForm/>
                </Modal>
            )}

            <CreateTodoButton
            setOpenModal={setOpenModal} />



        </React.Fragment>
    );
}

export { AppUI };