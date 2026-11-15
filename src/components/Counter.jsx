import { useState } from "react";
import Button from "./ui/Button/Button";

export default function Counter() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Button
        type="button"
        className="counter"
        onClick={() => setCount((count) => count + 1)}
        disabled={false}
      >
        Increment
      </Button>
      Count is {count}
      <Button
        type="button"
        className="counter"
        onClick={() => setCount((count) => (count > 0 ? count - 1 : 0))}
        disabled={false}
      >
        Decrement
      </Button>
    </>
  );
}
