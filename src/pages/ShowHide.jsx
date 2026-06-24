import { useState } from "react";
import { Button } from "../components/Button";

export function ShowHide() {
  const [visible, setVisible] = useState(false);

  return (
    <>
      <h1 className="text-xl mb-4">{visible ? "Hello React" : "Message Hidden"}</h1>
      <Button onClick={() => setVisible(!visible)}>
        {visible ? "Hide" : "Show"}
      </Button>
    </>
  );
}
