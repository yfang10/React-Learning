import React, { useState } from "react";

function Example2() {
  const [age, setAge] = useState(18);

  const [sex, setSex] = useState("男");

  const [job, setJob] = useState("前端程序员");
  return (
    <div>
      <p>今年: {age}岁</p>
      <p>性别: {sex}</p>
      <p>工作: {job}</p>
    </div>
  );
}

export default Example2;
