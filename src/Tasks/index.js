import "./style.css";

const Tasks = ({ tasks, hideDone, removeTask, toggleTaskDone }) => (
    <ul className="tasks">
        {tasks.map(task => (
            <li
            key={task.id}
            className={`tasks__item${task.done && hideDone ? " tasks__item--hiden" : ""}`}>
                <button 
                    className=" buttons tasks__content buttons__done"
                    onClick={() => toggleTaskDone(task.id)}
                >
                    {task.done ? "✔" : ""}
                </button>
                <span className={`tasks__content ${ task.done ? " tasks__content--done" : ""}`}>
                    {task.content}
                </span>
                <button 
                    className=" buttons tasks__content buttons__remove"
                    onClick={() => removeTask(task.id)}
                >
                    🗑
                </button>
            </li>
        ))}
    </ul>
);

export default Tasks;