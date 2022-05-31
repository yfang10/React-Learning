import React, { useState, useMemo } from "react";

function Example7() {
  const [xiaohong, setXiaohong] = useState("小红在代课状态");
  const [zhiling, setZhiling] = useState("志玲在代课状态");
  return (
    <div>
      <button
        onClick={() => {
          setXiaohong(new Date().getTime());
        }}
      >
        小红
      </button>
      <button
        onClick={() => {
          setZhiling(new Date().getTime() + "志玲向我们走来");
        }}
      >
        志玲
      </button>

      <ChildComponent name={xiaohong}>{zhiling}</ChildComponent>
    </div>
  );
}

function ChildComponent({ name, children }) {
  function changeXiaohong() {
    console.log("小红走来了");
    return name + "小红走来了";
  }

  const actionXiaohong = useMemo(() => changeXiaohong(name), [name]);
  return (
    <div>
      <div>{actionXiaohong}</div>

      <div>{children}</div>
    </div>
  );
}

export default Example7;
