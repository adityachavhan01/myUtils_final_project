// addtask:- object having properties id, text, completed:false
// toggleComplete :- if complete then 

import React, { useState } from "react";

const ToDoList = () => {
  const [tasks, setTasks] = useState([]);
  const [task, setTask] = useState("");
  const [sortOrder, setSortOrder] = useState("asc"); // Sorting order: "asc" or "desc"

  // var cnt=0;  state variable
  // Function to add a new task
  const addTask = () => {
    if (task.trim()) {
      setTasks([...tasks, { id: Date.now(), text: task, completed: false }]);
      setTask("");
    }
  };

  // Function to toggle task completion
  const toggleComplete = (id) => {
    setTasks(tasks.map((t) => (t.id === id ? { ...t, completed: !t.completed } : t)));
  };

  // Function to delete a task
  const deleteTask = (id) => {
    setTasks(tasks.filter((t) => t.id !== id));
  };

  // Function to toggle sorting order
  const toggleSortOrder = () => {
    setSortOrder(sortOrder === "asc" ? "desc" : "asc");
  };

  // Sorting tasks based on ID
  const sortedTasks = [...tasks].sort((a, b) =>
    sortOrder === "asc" ? a.id - b.id : b.id - a.id
  );

  // css 
  const shinyBlackStyle = {
    background: 'linear-gradient(145deg, #000000, #ff0000)',
  };

  return (
    <div className="max-w-xl mx-auto mt-10 p-5 rounded-lg shadow-lg max-h-screen overflow-auto" style={shinyBlackStyle}>
      <h1 className="text-2xl font-bold text-center mb-4">To-Do List</h1>
      
      {/* Task Input */}
      <div className="flex gap-2">
        <input
          type="text"
          value={task}
          onChange={(e) => setTask(e.target.value)}
          className="border p-2 flex-grow rounded-md"
          placeholder="Enter a task..."
        />
        <button onClick={addTask} className="bg-blue-500 text-white px-4 py-2 rounded-md">
          Add
        </button>
      </div>

      {/* Sort Button */}
      <div className="flex justify-end mt-3">
        <button onClick={toggleSortOrder} className="bg-gray-300 px-3 py-1 rounded-md">
          Sort by ID ({sortOrder === "asc" ? "Ascending" : "Descending"})
        </button>
      </div>

      {/* Task List */}
      <ul className="mt-4 text-white">
        {sortedTasks.map((t) => (
          <li
            key={t.id}
            className={`p-2 flex justify-between items-center border-b ${
              t.completed ? "line-through text-red-500" : ""
            }`}
          >
            <span>{t.text}</span>
            <div>
              <button onClick={() => toggleComplete(t.id)} className="mr-2 text-green-500">
                ✓
              </button>
              <button onClick={() => deleteTask(t.id)} className="text-red-500">
                ✕
              </button>
            </div>
          </li>
        ))
        }
      </ul>
    </div>
  );
};

export default ToDoList;
