import React, { useContext } from "react";
import { AuthContext } from "../context/provider";

export default function Mirror() {
  const { count, setCount } = useContext(AuthContext);
  return (
    <div>
      <span>Mirror: {count}</span>
    </div>
  );
}
