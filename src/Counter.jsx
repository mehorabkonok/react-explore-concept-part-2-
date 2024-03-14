import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);
  //   console.log(count, setCount);

  const handleAdd = () => {
    const newCount = count + 1;
    setCount(newCount);
  };

  const handleReduce = () => {
    const newCount = count - 1;
    setCount(newCount);
  };

  const handleMultiplication = () => {
    const newCount = count * 1.000009;
    setCount(newCount);
  };

  const handleDividation = () => {
    const newCount = count / 1.000009;
    setCount(newCount);
  };

  return (
    <div style={{ border: "2px solid yellow" }}>
      <h3>Counter: {count}</h3>
      <button onClick={handleAdd}>Add</button>
      <button onClick={handleReduce}>Reduce</button>
      <button onClick={handleMultiplication}>Mult</button>
      <button onClick={handleDividation}>Reduce</button>
    </div>
  );
}
