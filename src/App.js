import React, { useState } from "react";
import "./index.css";
function App() {
  const [count, setCount] = useState(0);
  return (
    <div className="container">
      <div className="card text-center">
        <div className="card-body">
          <h1>Counter</h1>
          <div>
            <h2 className="my-5">{count}</h2>
            <button
              className="btn btn-success mx-3"
              onClick={() => setCount(count + 1)}
            >
              Increase
            </button>
            <button
              className="btn btn-danger mx-3"
              onClick={() => setCount(count - 1)}
            >
              Decrease
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
