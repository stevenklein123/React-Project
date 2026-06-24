import { useCounter } from "../hooks/useCounter";
import { Button } from "../components/Button";

export function Profile() {
  const age = useCounter(20, { min: 0 });

  return (
    <div className="flex flex-col items-center gap-2">
      <h1 className="text-xl font-bold">Name : Steven</h1>
      <p>Age : {age.count}</p>
      <div className="flex gap-2">
        <Button onClick={age.increment}>Increment</Button>
        <Button onClick={age.decrement}>Decrement</Button>
      </div>
    </div>
  );
}
