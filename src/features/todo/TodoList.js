// import { useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import TodoForm from "./TodoForm";
import TodoItem from "./TodoItem";
import {
    add,
    selectTodos
} from "./todoSlice";

const TodoList = () => {
    const dispatch = useDispatch();

    const todos = useSelector(selectTodos);
    const handleNewTodo = (todo) => dispatch(add(todo));

    return (
        <div>
            <h1>{todos.length > 0 ? todos.length + ' Todos...' : 'Nothing to do yet !'}</h1>
            { todos.map(todo => 
                <TodoItem todo={todo} key={todo.title}></TodoItem>
            )}
            <TodoForm addTodo={handleNewTodo} resetTodos={()=> console.log('reset')}></TodoForm>
        </div>
    )
}

export default TodoList;