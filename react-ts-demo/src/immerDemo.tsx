import React, { FC, useState } from "react";
import {produce} from "immer";
const Demo: FC = () => {
  const [loveKyungSoo, setLoveKyungSoo] = useState({ name: "D.O.", age: 32 });
  function changeIt() {
    setLoveKyungSoo(
      produce((draft: { age: number; name:string}) => {
        draft.age = 18;
        draft.name = "DohKyungSoo"
      })
    );
  }
  return (
    <div>
      <div>{JSON.stringify(loveKyungSoo)}</div>
      <button onClick={changeIt}>Cute D.O.</button>
    </div>
  );
};

export default Demo;
