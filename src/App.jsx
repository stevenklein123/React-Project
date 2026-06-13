import { useState } from "react";


function App() {

  const [showMessage, setShowMessage] = useState(false);

  const toggleMessage = () => {
    setShowMessage(!showMessage);
  }

  return (
    <>  
      <h1>{showMessage ? "Hello React" : "Message Hidden"}</h1>
      <button className="bg-purple-600 text-white font-sans rounded-xl px-3 text-lg cursor-pointer " onClick={toggleMessage}> {
      showMessage ? "Hide" : "Show"}</button>
      
    </>
  );
}

export default App;