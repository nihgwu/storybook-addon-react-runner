import { useState } from "react";
import { Button } from "./Button";

export default function Counter() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>{count}</div>
      <Button label="+" onClick={() => setCount((count) => count + 1)} />
      <Button label="-" onClick={() => setCount((count) => count - 1)} />
    </>
  );
}
