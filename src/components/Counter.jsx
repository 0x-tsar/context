import React, { useContext } from "react";
import { AuthContext } from "../context/provider";

const Counter = () => {
  const { count, setCount } = useContext(AuthContext);
  return (
    <div>
      <button onClick={() => setCount(count + 1)}>add</button>
      <div>{count}</div>
    </div>
  );
};

export default Counter;
