import "./style.css";

const Tasks = (props) => (
    <ul className="tasks">
        {props.tasks.map(task => (
            <li
            key={task.id}
            className={`tasks__item${task.done && props.hideDoneTasks ? " tasks__item--hiden" : ""}`}>
               <button className=" button tasks__content button__done">
                    {task.done ? "✔" : ""}
                </button>
                <span className={`tasks__content ${ task.done ? " tasks__content--done" : ""}`}>
                    {task.content}
                </span>
                <button className=" button tasks__content button__remove">🗑</button>
            </li>
        ))}
    </ul>
);

export default Tasks;