import React, { useState } from "react";
import styles from "@/styles/index.module.css";

function NewPage() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");
  const [showModal, setShowModal] = useState(false);

  const handleAddTask = () => {
    if (newTask.trim() !== "") {
      setTasks([...tasks, newTask]);
      setNewTask("");
      setShowModal(false);
    }
  };

  const handleRemoveTask = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  };

  return (
    <div className="mainboard flex min-h-screen font-body text-white bg-gray-50">
      <div className="w-72 p-4 bg-indigo-600 flex flex-col">
        <h1 className="p-4 text-3xl font-bold text-center bg-vision rounded-md">
          Dashboard
        </h1>

        <div className="flex-1 flex items-center justify-center">
          <ul className="flex flex-col items-center w-full">
            <li className="mb-5 w-full text-xl font-medium">
              <button
                className="p-4 w-full bg-indigo-400 rounded hover:bg-indigo-500 transition duration:300"
                onClick={() => setShowModal(true)}
              >
                Add Task
              </button>
            </li>
            {/* Modal */}
            {showModal && (
              <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-900 bg-opacity-50">
                <div className="bg-white p-8 rounded shadow-md max-w-md">
                  <h2 className="text-xl font-bold mb-4">Add Task</h2>
                  <input
                    type="text"
                    className="w-full border border-gray-300 text-black rounded px-3 py-2 mb-4"
                    placeholder="Enter task"
                    value={newTask}
                    onChange={(e) => setNewTask(e.target.value)}
                  />
                  <div className="flex justify-end">
                    <button
                      className="px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-500"
                      onClick={handleAddTask}
                    >
                      Add
                    </button>
                    <button
                      className="ml-2 px-4 py-2 bg-gray-300 text-gray-700 rounded hover:bg-gray-200"
                      onClick={() => setShowModal(false)}
                    >
                      Cancel
                    </button>
                  </div>
                </div>
              </div>
            )}
          </ul>
        </div>

        <div className="flex justify-center items-end p-8 bg-vision rounded-md">
          <ul>
            <li>
              <h4 className="mb-4">Important Tasks:</h4>
            </li>
            <li>
              <h4 className="mb-4">Today's Tasks:</h4>
            </li>
            <li>
              <h4 className="mb-4">Completed Tasks:</h4>
            </li>
          </ul>
        </div>
      </div>

      <div className="flex-1 p-4">
        <h2 className="p-4 text-center text-3xl font-bold mb-4 bg-vision rounded-md">
          Tasks
        </h2>
        <div className="grid grid-cols-3 grid-rows-3 gap-12 p-4 text-center text-black">
          {tasks.map((task, index) => (
            <ul key={index} className="border border-1 border-indigo-400">
              <li className="p-4">
                {task}
                <div className="grid grid-cols-3 gap-2 mt-2">
                  <button
                    className="p-1 bg-red-500 text-white rounded hover:bg-red-600"
                    onClick={() => handleRemoveTask(index)}
                  >
                    Remove
                  </button>
                  <button className="p-1 bg-yellow-400 text-white rounded hover:bg-yellow-600">
                    Important
                  </button>
                  <button className="p-1 bg-green-400 text-white rounded hover:bg-green-600">
                    Completed
                  </button>
                </div>
              </li>
            </ul>
          ))}
        </div>
      </div>
    </div>
  );
}

export default NewPage;
