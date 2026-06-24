import { useRef, useState } from "react";
import { TextInput } from "../components/TextInput";
import { Button } from "../components/Button";

export function TodoList() {
  const taskRef = useRef();
  const [tasks, setTasks] = useState([]);

  const addTask = () => {
    const taskInput = taskRef.current.value.trim();
    if (taskInput !== "") {
      setTasks((prev) => [...prev, { id: Date.now() + Math.random(), text: taskInput }]);
    }
    taskRef.current.value = "";
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") addTask();
  };

  const deleteTask = (id) => {
    setTasks((prev) => prev.filter((task) => task.id !== id));
  };

  return (
    <div className="flex flex-col gap-4">
      <h1 className="font-bold text-2xl">Todo Application</h1>
      <div className="flex gap-2">
        <TextInput
          placeholder="Enter task"
          inputRef={taskRef}
          onKeyPress={handleKeyPress}
          className="flex-1 text-black"
        />
        <Button variant="secondary" onClick={addTask}>Add</Button>
      </div>
      {tasks.length === 0 ? (
        <p className="text-gray-400 text-center py-4">No tasks yet. Add one to get started!</p>
      ) : (
        <ul className="space-y-2">
          {tasks.map((task, index) => (
            <li key={task.id} className="flex justify-between items-center bg-slate-600 p-3 rounded-lg">
              <span>{index + 1}. {task.text}</span>
              <Button variant="danger" onClick={() => deleteTask(task.id)} className="text-sm px-3 py-1">
                Delete
              </Button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
