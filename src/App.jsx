import { useState } from "react";

function App() {

  const [inputTask , setInputTask] = useState("");
  const [task, setTask] = useState([]);


  const addTask = () => {

      if(inputTask === "") return;
      setTask((prev) => [...prev , inputTask]);
      
      setInputTask("");
  }

  const deleteTask = (index) => {
      setTask((prev) => prev.filter((_ , i) => i !== index))
  }


  const updateTask = (index) => {
    setTask((prev) => prev.map((task , i) => (
      i === index ? <input type="text" placeholder="Enter Update Task"></input> : task
    ))) }
  
  return (
    <>  

      <div className="min-h-screen bg-white-700 text-white flex flex-col justify-center items-center">

        <div className="bg-slate-950 w-150 h-150 rounded-3xl shadow-lg border-black">

          <h1 className="font-sans font-bold flex flex-col justify-center items-center py-5 text-3xl">Todo List</h1>

          <input type="text" placeholder=" Enter Task..." className="border py-2 mx-10 my-10 rounded-md" value={inputTask} onChange={(e) => setInputTask(e.target.value)} />

          <button className="bg-blue-400 rounded-xl p-2 cursor-pointer" onClick={addTask}>Add task</button>

          {task.map((item, index) => (
            <div key={index} className="flex justify-between items-center mx-10 my-2">
              
              {/* Task text on the left */}
              <span className="font-bold">
                {index + 1} : {item}
              </span>

              <div className="flex gap-2"> 
                <button className="bg-red-400 rounded-xl p-2 cursor-pointer" onClick={()=> deleteTask(index)}>Delete</button>
              </div>
              
            </div>
          ))}



        </div>

      </div>

    </>
  );  
}

export default App;