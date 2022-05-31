import React, { useRef, useState, useEffect } from "react";

function Example8() {
  const inputEl = useRef(null);

  const onButtonClick = () => {
    inputEl.current.value = "Hello World";
    console.log(inputEl);
  };

  const [text, setText] = useState("Good Morning");

  const textRef = useRef();

  useEffect(() => {
    textRef.current = text;
    console.log("textRef.current:", textRef.current); //保存变量
  });

  return (
    <div>
      <input ref={inputEl} type="text" />
      <button onClick={onButtonClick}>展示文字</button>
      <br />
      <input
        value={text}
        onChange={(e) => {
          setText(e.target.value);
        }}
      />{" "}
    </div>
  );
}

export default Example8;
