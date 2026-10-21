
function TaskList({ tasks }) {
  return (
    <ul className="task-list">
      {tasks.map((task) => (
        <li key={task.id}>
          <span>{task.title}</span>
          <span className="due-date">
            {task.dueDate ? `Due ${task.dueDate}` : "No due date"}
          </span>
        </li>
      ))}
    </ul>
  );
}

export default TaskList;
