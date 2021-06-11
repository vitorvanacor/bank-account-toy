import { useState } from "react";

import Home from "./Home";
import Login from "./Login";

export default function App() {
  const [username, setUsername] = useState("");

  if (username.length > 0) {
    return <Home username={username} logout={() => setUsername("")} /> 
  } else {
    return <Login loginUser={(u) => setUsername(u)} />;
  } 
}
