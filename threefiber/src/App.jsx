import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Example from "./components/session1/Example";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="app">
      <Example />
    </div>
  );
}

export default App;
