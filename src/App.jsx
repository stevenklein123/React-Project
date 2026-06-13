import { useState } from "react";

function App() {
  const [name, setName] = useState("Steven");

  const changeName = () => {
    setName("React Developer");
  };

  return (
    <>
      <h1>Current Name: {name}</h1>

      <button onClick={changeName}>
        Change Name
      </button>
    </>
  );
}

export default App;