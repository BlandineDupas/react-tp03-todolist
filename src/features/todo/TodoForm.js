import { useState } from "react";

import './styles.css';

const TodoForm = ({ submitForm, resetTodos }) => {
    const [inputValue, setInputValue] = useState('');

    const handleSubmit = (evt) => {
        evt.preventDefault();
        submitForm(inputValue);
        setInputValue('');
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