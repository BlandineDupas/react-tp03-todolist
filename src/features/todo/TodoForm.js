import { useState } from "react";

import './styles.css';

const TodoForm = ({ addTodo, resetTodos }) => {
    const [inputValue, setInputValue] = useState('');

    const handleSubmit = (evt) => {
        evt.preventDefault();
        const actionSucceed = addTodo({
            'title': inputValue,
            'isDone': false,
        });
        if (actionSucceed) {
            setInputValue('');
        }
    }

    return (
    <form onSubmit={handleSubmit}>
        <input type="text" value={inputValue} onChange={(evt) => setInputValue(evt.target.value)}></input>
        <button type="submit">Add</button>
        <button type="button" onClick={resetTodos}>Reset Todolist</button>
    </form>
    )
}

export default TodoForm;