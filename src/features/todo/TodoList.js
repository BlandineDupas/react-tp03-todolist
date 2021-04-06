import { useState } from "react";
import TodoForm from "./TodoForm";
import TodoItem from "./TodoItem";

const TodoList = () => {
    const [todos, setTodos] = useState([]);

    const addTodo = (title) => {
        setTodos([
            ...todos,
            {
                'title': title,
                'isDone': false
            }
        ])
    }
    
    return (
    <div>
        <h1>{todos.length > 0 ? todos.length + ' Todos...' : 'Nothing to do yet !'}</h1>
        { todos.map(todo => 
            <TodoItem todo={todo} key={todo.title}></TodoItem>
        )}
        <TodoForm submitForm={addTodo} resetTodos={() => setTodos([])}></TodoForm>
    </div>
    )
}

export default TodoList;