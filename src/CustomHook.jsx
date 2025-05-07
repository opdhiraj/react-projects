import { useState } from "react";

const CustomHook = (num) => {
  const [count, setCount] = useState(num);

  const increment = (num) => {
    setCount((n) => n + 1);
  };

  return [count, setCount];
};
