import React, { useState, useEffect } from "react";

const TaskForm = ({ addTask, editTask, editingTask, setEditingTask }) => {
  const [taskName, setTaskName] = useState("");
  const [taskDescription, setTaskDescription] = useState("");

  // Populate form fields when editing a task
  useEffect(() => {
    if (editingTask) {
      setTaskName(editingTask.name);
      setTaskDescription(editingTask.description);
    } else {
      setTaskName("");
      setTaskDescription("");
    }
  }, [editingTask]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!taskName || !taskDescription) {
      alert("Both fields are required!");
      return;
    }
    if (editingTask) {
      editTask(editingTask.id, taskName, taskDescription);
      setEditingTask(null);
    } else {
      addTask(taskName, taskDescription);
    }
    setTaskName("");
    setTaskDescription("");
  };

  return (
    <form onSubmit={handleSubmit} className="task-form">
      <input
        type="text"
        placeholder="Task Name"
        value={taskName}
        onChange={(e) => setTaskName(e.target.value)}
      />
      <textarea
        placeholder="Task Description"
        value={taskDescription}
        onChange={(e) => setTaskDescription(e.target.value)}
      ></textarea>
      <button type="submit">{editingTask ? "Update Task" : "Add Task"}</button>
    </form>
  );
};

export default TaskForm;
