import { useState } from "react";
import TaskList from "./components/TaskList.jsx";
import TaskForm from "./components/TaskForm.jsx";
import logo from "./assets/logo.png";
import "./App.css";


const STARTING_TASKS = [
  { id: 1, title: "Finish ERD for capstone", dueDate: "2026-10-23" },
  { id: 2, title: "Review for ITELECT2 quiz", dueDate: "2026-10-27" },
  { id: 3, title: "Submit INFOMAN2 Power BI exercise", dueDate: "2026-10-30" },
];

function App() {
  const [tasks, setTasks] = useState(STARTING_TASKS);

  function addTask(title, dueDate) {
    const newTask = {
      id: Date.now(),
      title: title,
      dueDate: dueDate || null,
    };
    setTasks([...tasks, newTask]);
  }

  return (
    <main className="task-manager">
      <h1 className="title">
        <img src={logo} alt="" className="logo" />
        Task Manager
      </h1>
      <p className="count">{tasks.length} tasks</p>
      <TaskForm onAdd={addTask} />
      <TaskList tasks={tasks} />
    </main>
  );
}

export default App;
