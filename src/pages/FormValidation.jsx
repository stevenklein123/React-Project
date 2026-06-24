import { useRef, useState } from "react";
import { TextInput } from "../components/TextInput";
import { Button } from "../components/Button";

export function FormValidation() {
  const inputUsername = useRef();
  const inputPassword = useRef();
  const [message, setMessage] = useState("");

  const validate = () => {
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
    <div className="flex flex-col gap-4">
      <TextInput
        placeholder="Enter username..."
        inputRef={inputUsername}
        className="w-full border-violet-600 border-2"
      />
      <TextInput
        type="password"
        placeholder="Enter password..."
        inputRef={inputPassword}
        className="w-full border-violet-600 border-2"
      />
      {message && <p className="text-yellow-300">{message}</p>}
      <Button onClick={validate}>Submit</Button>
    </div>
  );
}
