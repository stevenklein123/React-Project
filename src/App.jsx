import { useRef, useState } from "react";

function App() {
  const taskRef = useRef();
  const [tasks, setTasks] = useState([]);

  const addTask = () => {
    const taskInput = taskRef.current.value.trim();
    
    if (taskInput !== "") {
      // Generate unique ID using timestamp + random number
      const newTask = {
        id: Date.now() + Math.random(),
        text: taskInput
      };
      setTasks((prev) => [...prev, newTask]);
    }
    
    taskRef.current.value = "";
  };

  // Add support for Enter key
  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      addTask();
    }
  };

  const deleteTask = (idToDelete) => {
    setTasks((prev) => prev.filter((task) => task.id !== idToDelete));
  };

  return (
    <>
      <div className="min-h-screen flex justify-center items-center bg-gray-900 px-4">
        <div className="bg-slate-700 text-white font-sans w-full max-w-sm sm:max-w-md md:max-w-lg p-6 rounded-lg shadow-lg">
          <h1 className="font-bold text-2xl mb-6">Todo Application</h1>

          {/* Input Section */}
          <div className="flex gap-2 mb-6">
            <input
              type="text"
              placeholder="Enter task"
              className="flex-1 border-2 border-gray-300 rounded-lg px-3 py-2 text-black focus:outline-none focus:border-blue-500"
              ref={taskRef}
              onKeyPress={handleKeyPress}
            />
            <button
              className="bg-blue-500 hover:bg-blue-600 cursor-pointer rounded-lg px-4 py-2 font-semibold transition"
              onClick={addTask}
            >
              Add
            </button>
          </div>

          <div>
            {tasks.length === 0 ? (
              <p className="text-gray-400 text-center py-4">No tasks yet. Add one to get started!</p>
            ) : (
              <ul className="space-y-2">
                {tasks.map((task, index) => (
                  <li
                    key={task.id}
                    className="flex justify-between items-center bg-slate-600 p-3 rounded-lg"
                  >
                    <span>
                      {index + 1}. {task.text}
                    </span>
                    <button
                      className="bg-red-500 hover:bg-red-600 rounded-lg px-3 py-1 cursor-pointer text-sm font-semibold transition"
                      onClick={() => deleteTask(task.id)}
                    >
                      Delete
                    </button>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;