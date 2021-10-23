import { useContext, useState } from "react";
import "../../styles/globals.css";
import Counter from "../components/Counter";
import Mirror from "../components/Mirror";

import AuthProvider, { AuthContext } from "../context/provider";

function MyApp({ Component, pageProps }) {
  // const [counter, setCounter] = useState(0);
  const { counter, setCounter } = useContext(AuthContext);
  console.log(counter);

  return (
    <AuthProvider>
      <Counter counter={counter} setCounter={setCounter} />
      {/* <div>Outside Value: {counter}</div> */}
      <Mirror counter={counter} setCounter={setCounter} />
      <Component {...pageProps} />
    </AuthProvider>
  );
}

export default MyApp;
