import React, { useRef, useState, useTransition } from "react";

const TransitionHook = () => {
  const [text, setText] = useState("");
  const [result, setResult] = useState([]);
  const [isPending, startTransition] = useTransition();

  const handleChange = (e) => {
    //  e.target.value
    setText(e.target.value);
    console.log(text);
    startTransition(() => {
      const filtered = allUsers.filter((user) =>
        user.name.toLowerCase().includes(value.toLowerCase())
      );
      setResult(filtered);
    });
  };

  return (
    <div>
      <input placeholder="Search" value={text} onChange={handleChange} />
      {isPending && <p>Loading results...</p>}

      <ul>
        {result.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default TransitionHook;
