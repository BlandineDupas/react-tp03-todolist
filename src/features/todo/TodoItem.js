
import './styles.css';

const TodoItem = ({ todo, changeStatus }) => {
    const handleChangeCheck = (evt) => {
        changeStatus(todo);
        if (evt.target.checked) {
            evt.target.parentNode.classList.add('done');
        } else {
            evt.target.parentNode.classList.remove('done'); 
        }
    }

    return (
    <div>
        <label className={todo.isDone ? "done" : ""}>
            <input type="checkbox" checked={todo.isDone} onChange={handleChangeCheck}></input>
            {todo.title}
        </label>
    </div>
    )
}

export default TodoItem;