import React from "react";
import { TodoContext } from "../TodoContext";
import { TodoCounter } from '../components/TodoCounter'; // importo la funsion, valiable lo que quiera pero llamandola especificamente {TodoCounter}
import { TodoSearch } from "../components/TodoSearch";
import { TodoList } from "../components/TodoList";
import { TodoForm } from "../TodoForm";
import { TodoItem } from "../components/TodoItem";
import { CreateTodoButton } from "../components/CreateTodoButton";
import { Modal } from "../Modal";
import { TodosError } from "../TodosError";
import { TodosLonding } from "../TodosLonding";
import { EmptyTodos } from "../EmptyTodos";


function AppUI() {
    //ejemplo de commit
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
                {error && <TodosError error ={error}/> }
                {loading && <TodosLonding/>}
                {(!loading && !searchedTodos.length) && <EmptyTodos/>}
                {loading && new Array(2).fill(1).map((a, i) => <TodosLonding key={i} />)}

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
                    <TodoForm />
                </Modal>
            )}

            <CreateTodoButton
                setOpenModal={setOpenModal} />



        </React.Fragment>
    );
}

export { AppUI };