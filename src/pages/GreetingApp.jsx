import { useState } from "react";
import { TextInput } from "../components/TextInput";

export function GreetingApp() {
  const [name, setName] = useState("");

  return (
    <>
      <TextInput
        placeholder="Enter name..."
        onChange={(e) => setName(e.target.value)}
      />
      <h1 className="mt-4 text-xl">
        {name ? `Hello ${name}` : "Please enter your name."}
      </h1>
    </>
  );
}
