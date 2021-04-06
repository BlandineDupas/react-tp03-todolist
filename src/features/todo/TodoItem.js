import { useState } from "react";

import './styles.css';

const TodoItem = ({ todo }) => {
    const [isDone, setIsDone] = useState(todo.isDone);

    const handleChangeCheck = (evt) => {
        setIsDone(evt.target.checked);
        if (evt.target.checked) {
            evt.target.nextSibling.classList.add('done');
        } else {
            evt.target.nextSibling.classList.remove('done'); 
        }
    }

    return (
    <div>
        <input type="checkbox" checked={isDone} onChange={handleChangeCheck}></input>
        <label className={isDone ? "done" : ""}>{todo.title}</label>
    </div>
    )
}

export default TodoItem;