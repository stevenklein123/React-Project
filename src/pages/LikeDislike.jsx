import { useCounter } from "../hooks/useCounter";
import { Button } from "../components/Button";

export function LikeDislike() {
  const like = useCounter(0, { min: 0 });
  const dislike = useCounter(0, { min: 0 });

  const resetAll = () => {
    like.reset();
    dislike.reset();
  };

  return (
    <div className="flex flex-col gap-2">
      <p>Like : {like.count} <span aria-label="thumbs up">&#x1F44D;</span></p>
      <Button onClick={like.increment}>Like</Button>

      <p>Dislike : {dislike.count} <span aria-label="thumbs down">&#x1F44E;</span></p>
      <Button onClick={dislike.increment}>Dislike</Button>

      <Button variant="secondary" onClick={resetAll}>Reset</Button>
    </div>
  );
}
