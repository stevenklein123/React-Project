import { useRef, useState } from "react";

function App() {
  
  const inputUsername = useRef();
  const inputPassword = useRef();
  const [message , setMessage] = useState("");

  const validationInput = () => {
    
      if(inputUsername.current.value === ""){
        setMessage(inputUsername.current.value = "Please enter username.")
        inputUsername.current.focus();
        return;
      }

      if(inputPassword.current.value === ""){
        setMessage(inputPassword.current.value = "Please enter password.")
        inputPassword.current.focus();
        return;
      }

      
  }

  return (
    <>
    <div className="min-h-screen flex justify-center items-center bg-gray-900">
      <div className="bg-slate-700 text-white font-sans w-full max-w-md p-6 rounded-lg shadow-lg">
        <input
          type="text"
          placeholder="Enter username..."
          className="w-full border-2 border-violet-600 p-2 rounded mb-4"
          autoComplete="username"
        ref={inputUsername} />
        
        <input
          type="password"
          placeholder="Enter password..."
          className="w-full border-2 border-violet-600 p-2 rounded"
          autoComplete="current-password"
         ref={inputPassword}/>
        <div className="flex justify-center items-center">
          <button className="bg-purple-700 rounded-xl px-2 font-semibold mt-2 py-2 cursor-pointer" onClick={validationInput}>Submit</button>
        </div>

      </div>
    </div>
    </>
  );
}

export default App;