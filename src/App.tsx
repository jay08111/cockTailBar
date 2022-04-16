import React, { useEffect, useState } from "react";

const App: React.FC = () => {
  useEffect(() => {
    console.log("hey it works!");
  }, []);
  const [count, setCount] = useState(0);
  return (
    <div className="App">
      <h1>react</h1>
      <p>{count}</p>
      <button onClick={() => setCount(count + 1)}>click !</button>
    </div>
  );
};

export default App;
