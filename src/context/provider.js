import React, { createContext, useState } from "react";

export const AuthContext = createContext({});

export default function AuthProvider(props) {
  const [count, setCount] = useState(0);

  return (
    <AuthContext.Provider value={{ count, setCount }}>
      {props.children}
    </AuthContext.Provider>
  );
}
