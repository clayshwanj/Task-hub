import React from "react";
import TaskItem from "./TaskItem";

const TaskList = ({ tasks, markCompleted, editTask, deleteTask }) => {
  return (
    <div className="task-list">
      {tasks.length === 0 ? (
        <p>No tasks to display.</p>
      ) : (
        tasks.map((task) => (
          <TaskItem
            key={task.id}
            task={task}
            markCompleted={markCompleted}
            editTask={editTask}
            deleteTask={deleteTask}
          />
        ))
      )}
    </div>
  );
};

export default TaskList;
