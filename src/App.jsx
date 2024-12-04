import React, { useState, useEffect } from "react";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/Tasklist";
import "./App.css";

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [editingTask, setEditingTask] = useState(null);

  // Load tasks from localStorage
  useEffect(() => {
    const storedTasks = JSON.parse(localStorage.getItem("tasks")) || [];
    setTasks(storedTasks);
  }, []);

  // Save tasks to localStorage
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const addTask = (name, description) => {
    const newTask = {
      id: Date.now(),
      name,
      description,
      completed: false,
    };
    setTasks([...tasks, newTask]);
  };

  const markCompleted = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const editTask = (id, name, description) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, name, description } : task
      )
    );
  };

  const deleteTask = (id) => {
    if (window.confirm("Are you sure you want to delete this task?")) {
      setTasks(tasks.filter((task) => task.id !== id));
    }
  };

  return (
    <div className="App">
      <h1>To-Do List</h1>
      <TaskForm
        addTask={addTask}
        editTask={editTask}
        editingTask={editingTask}
        setEditingTask={setEditingTask}
      />
      <TaskList
        tasks={tasks}
        markCompleted={markCompleted}
        editTask={(task) => setEditingTask(task)}
        deleteTask={deleteTask}
      />
    </div>
  );
};

export default App;
