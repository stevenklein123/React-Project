import { useState } from "react";

function App() {

  const [name , setName] = useState("");

  return (
    <>  

      <input
        type="text"
        placeholder="Enter name..."
        className="border border-gray-400 px-3 py-2 rounded" onChange={(e) => setName(e.target.value)}
      />
      
      <h1>Character : {name.length}</h1>
    </>
  );  
}

export default App;