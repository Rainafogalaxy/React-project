import React from "react";
import { useState } from "react";
// import List1 from "./List1";

function App() {
  let [love, setLove] = useState(100);
  function add() {
    setLove(love + 10);
  }
  return (
    <>
      {/* <List1 /> */}
      <div>
        <button onClick={add}>Love KyungSoo{love}%</button>
      </div>
    </>
  );
}

export default App;
