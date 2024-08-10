import { useState } from "react";

const CountButton = () => {
  const [count, setCount] = useState<number>(0);

  return (
    <>
      <button onClick={() => setCount(count + 1)}>Click add</button>
      <p>{count}</p>
    </>
  );
};
export default CountButton;
