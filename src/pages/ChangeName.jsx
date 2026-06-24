import { useState } from "react";
import { Button } from "../components/Button";

export function ChangeName() {
  const [name, setName] = useState("Steven");

  return (
    <>
      <h1 className="text-xl font-bold mb-4">Current Name: {name}</h1>
      <Button onClick={() => setName("React Developer")}>Change Name</Button>
    </>
  );
}
