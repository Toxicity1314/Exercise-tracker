import { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";

function App() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    fetch("/hello")
      .then((r) => r.json())
      .then((data) => setCount(data.count));
  }, []);

  return (
    <div className="App">
      <Routes>
          <Route 
          path="/testing"
          element = {"Test Route"}
          />
          <Route 
          path="/"
          element= {<h1>Page Count: {count}</h1>}
          />
      </Routes>
    </div>
  );
}

export default App;