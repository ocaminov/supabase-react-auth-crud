import React, { useState } from "react";
import { useTasks } from "../context/TaskContext";
import { Button, Form } from "react-bootstrap";

function TaskForm() {
  const [taskName, setTaskName] = useState("");
  const { createTask, adding } = useTasks();

  const handleSubmit = async (e) => {
    e.preventDefault();
    createTask(taskName);
    setTaskName("");
  };

  return (
    <Form onSubmit={handleSubmit} className="card card-body">
      <Form.Control
        type="text"
        name="taskNme"
        placeholder="Write a task name"
        onChange={(e) => setTaskName(e.target.value)}
        value={taskName}
        className="mb-2"
      />
      <div className="ms-auto">
        <Button disabled={adding} variant="primary" className="btn-sm">
          {adding ? "Adding..." : "Add"}
        </Button>
      </div>
    </Form>
  );
}

export default TaskForm;
