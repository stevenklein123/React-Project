import { useState } from "react";
import { TextInput } from "../components/TextInput";

export function CharacterCounter() {
  const [text, setText] = useState("");

  return (
    <>
      <TextInput
        placeholder="Enter name..."
        onChange={(e) => setText(e.target.value)}
      />
      <h1 className="mt-4 text-xl">Character : {text.length}</h1>
    </>
  );
}
