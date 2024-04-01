import React from 'react'
import { useTasks } from '../context/TaskContext';
import { Button, Card } from 'react-bootstrap';

function TaskCard({task}) {
  const {deleteTask, updateTask} = useTasks()

  const handleDelete = () => {
    deleteTask(task.id)
  };

  const handleToggleDone = () => {
    updateTask(task.id, {"done": !task.done})
  };

  return (
    <Card className='card card-body mb-2'>
      
      <h1 className='h5'>{`${task.id}. ${task.name}`}</h1>
      <p>{task.done ? "Done ✔️ " : "Not done ❌ "}</p>
      <div className='ms-auto'>
        <Button variant='danger' className='btn-sm me-1' onClick={() => handleDelete()}>Delete</Button>
        <Button variant='secondary' className='btn-sm' onClick={() => handleToggleDone()}>Done</Button>
      </div>
      
      
    </Card>
  );
}

export default TaskCard
