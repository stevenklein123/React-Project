import { useState } from "react";

function App() {

  const [name , setName] = useState("Steven");
  const [age , setAge] = useState(20);
  
  const incrementAge = () => {
    setAge((prevState) => prevState + 1);
  }
  const decrementAge = () => {
    setAge((prevState) => prevState > 0 ? prevState - 1 : 0);
  }
  return (
    <>  
    <div className="bg-gray-700 w-64 h-32 text-white flex flex-col justify-center items-center">
        <h1>Name : {name}</h1>
        <p>Age : {age}</p>
          <div className="flex flex-row gap-2">
            <button className="bg-purple-600 rounded-xl px-2 my-2 cursor-pointer" onClick={incrementAge}>Increment</button>
            <button className="bg-purple-600 rounded-xl px-2 my-2 cursor-pointer" onClick={decrementAge}>Decrement</button>
          </div>
    </div>
    </>
  );  
}

export default App;