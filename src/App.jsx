import { useState } from "react";
import {TaskForm} from "./components/TaskForm";
import {TaskList } from "./components/TaskList";

import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  const [tasks, setTasks] = useState([]);

  const addTask = (task) => {
    
    setTasks([...tasks, task]);
  };

  const completeTask = (taskId) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === taskId ? { ...task, completed: !task.completed } : task
      )
    );
  };
  const deleteTask = (taskId) => {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== taskId));
  };

  return (
    <div className="container mt-5">
      <h1 className="text-center">Lista de tareas</h1>
      <p className=" fw-light text-center ">Hazlo!</p>
      <TaskForm onAddTask={addTask} />
      <TaskList tasks={tasks} onDelete={deleteTask} onComplete={completeTask} />
    </div>
  );
}

export default App;
