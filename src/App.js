import React, { useState } from "react";

const App = () => {
  let [count, setcount] = useState(0);

  return (
      <div className="col-3 mx-auto text-center">
        <button className="btn btn-primary p-3 me-4" onClick={() => setcount(count - 1)}>-</button>
        <h1 className="text-center d-inline">{count}</h1>
        <button className="btn btn-primary p-3 ms-4" onClick={() => setcount(count + 1)}>+</button>
      </div>
  );
};

export default App;