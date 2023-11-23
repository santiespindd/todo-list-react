import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faTrash , faXmark , faCheck}  from '@fortawesome/free-solid-svg-icons'


export const TaskItem = ({ task, onComplete, onDelete }) => {
  const [completed, setCompleted] = useState(false);

  const handleComplete = () => {
    setCompleted(!completed);
    onComplete(task.id); 
  };

  const handleDelete = () => {
    onDelete(task.id); 
  };

  return (

    <tr >
     
      <td  scope="row" style={{ textDecoration: completed ? 'line-through' : 'none' }}>
        {task.name}
      </td>
      <td>
      <button className="btn btn-primary btn-sm text-center" onClick={handleComplete}>{completed ? <FontAwesomeIcon icon={faXmark} /> : <FontAwesomeIcon icon={faCheck} />}</button>
      </td>
     
     <td>
     <button className="btn btn-danger btn-sm text-center" onClick={handleDelete}> <FontAwesomeIcon icon={faTrash} /></button>
     </td>
      
    </tr>
    
  );
};