import { useRef, useState } from "react";

function App() {

  const inputUsername = useRef(null);
  const inputPassword = useRef(null);
  const [message, setMessage] = useState("");

  const validationInput = () => {
    setMessage("");

    if (!inputUsername.current || !inputPassword.current) {
      setMessage("Form failed to load. Please refresh the page.");
      return;
    }

    if (inputUsername.current.value === "") {
      setMessage("Please enter username.");
      inputUsername.current.focus();
      return;
    }

    if (inputPassword.current.value === "") {
      setMessage("Please enter password.");
      inputPassword.current.focus();
      return;
    }

    setMessage("Form submitted successfully!");
  };

  return (
    <>
    <div className="min-h-screen flex justify-center items-center bg-gray-900">
      <div className="bg-slate-700 text-white font-sans w-full max-w-md p-6 rounded-lg shadow-lg">
        <input
          type="text"
          placeholder="Enter username..."
          className="w-full border-2 border-violet-600 p-2 rounded mb-4"
          ref={inputUsername}
        />

        <input
          type="password"
          placeholder="Enter password..."
          className="w-full border-2 border-violet-600 p-2 rounded"
          ref={inputPassword}
        />

        {message && (
          <p className="mt-2 text-sm text-center text-red-400">{message}</p>
        )}

        <div className="flex justify-center items-center">
          <button className="bg-purple-700 rounded-xl px-2 font-semibold mt-2 py-2 cursor-pointer" onClick={validationInput}>Submit</button>
        </div>

      </div>
    </div>
    </>
  );
}

export default App;