import React from "react";
// import { useState } from "react";
import List1 from "./List1";
import List2 from './List2';
import RefDemo from './useRefDemo';
// import MemoDemo from "./useMemoDemo";
import useMouse from "./hooks/useMouse";
import useGetInfo from "./hooks/useGetInfo";

function App() {
  // const {x,y} = useMouse();
  const {loading,info} = useGetInfo();
  return (
    <>
    <p>
      {loading?"加载中...":info}
    </p>
      {/* <List1 /> */}
      {/* <List2/> */}
      {/* <RefDemo/> */}
      {/* <MemoDemo/> */}
      {/* <p>App Page {x}+{y}</p> */}

    </>
  );
}

export default App;
