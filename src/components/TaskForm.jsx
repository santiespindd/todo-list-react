import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

let taskId = 0;

export const TaskForm = ({ onAddTask }) => {
  const [taskName, setTaskName] = useState("");

  const handleInputChange = (e) => {
    setTaskName(e.target.value);
    console.log(taskName);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const taskObj = {
      id: taskId,
      name: taskName,
      isCompleted: false,
    };

    if (taskObj.name.trim() !== "") {
      onAddTask(taskObj);
      setTaskName("");
    }
    taskId = taskId + 1;
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="container mt-5 text-center mb-5 row"
    >
      <div className="col-10">
        <input
          type="text"
          name=""
          value={taskName}
          placeholder="Ingrese tarea a realizar  &#128170;"
          onChange={handleInputChange}
          className="form-control"
        />
        <div  class="form-text">
        El verdadero éxito consiste en trabajar hacia metas y sueños significativos &#128512;
        </div>
      </div>
      <div className="col">
        <button className="btn btn-primary form-control">Guardar</button>
      </div>
    </form>
  );
};
