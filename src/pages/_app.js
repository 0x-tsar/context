import { useContext, useState } from "react";
import "../../styles/globals.css";
import Counter from "../components/Counter";
import Mirror from "../components/Mirror";

import AuthProvider, { AuthContext } from "../context/provider";

function MyApp({ Component, pageProps }) {
  // const [counter, setCounter] = useState(0);
  const { counter, setCounter } = useContext(AuthContext);

  return (
    <AuthProvider>
      <Counter />
      <Mirror />
      <Component {...pageProps} />
    </AuthProvider>
  );
}

export default MyApp;
