import { useEffect, useState } from "react";
import { testApi } from "./api";

function App() {
  const [msg, setMsg] = useState("");

  useEffect(() => {
    testApi().then(data => setMsg(data.message));
  }, []);

  return <h1>{msg}</h1>;
}

export default App;

