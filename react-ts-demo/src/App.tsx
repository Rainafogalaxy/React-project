import React from "react";
// import { useState } from "react";
import List1 from "./List1";
import List2 from './List2';
import RefDemo from './useRefDemo';
// import MemoDemo from "./useMemoDemo";
// import useMouse from "./hooks/useMouse";
import useGetInfo from "./hooks/useGetInfo";
import ClosureTrap from './ClosureTrap'
function App() {

  return (
    <>
      {/* <List1 /> */}
      {/* <List2/> */}
      {/* <RefDemo/> */}
      {/* <MemoDemo/> */}
      <ClosureTrap/>
    </>
  );
}

export default App;
