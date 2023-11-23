import React from "react";
import { TaskItem } from "./TaskItem";
import "bootstrap/dist/css/bootstrap.min.css";

export const TaskList = ({ tasks, onComplete, onDelete }) => {
  return (
    <div>
      <table class="table">
        <thead>
          <tr>
            <th scope="col">Tarea</th>
            <th scope="col">Completar</th>
            <th scope="col">Eliminar</th>
          </tr>
          </thead>
          <tbody>
            {tasks.map((task) => (
              <TaskItem
                key={task.id}
                task={task}
                onComplete={onComplete}
                onDelete={onDelete}
              />
            ))}
          </tbody>
        
      </table>
    </div>
  );
};
