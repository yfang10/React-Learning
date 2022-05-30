import React, { useContext } from "react";
import { ColorContext, UpdateColor } from "./color";

function Buttons() {
  const { dispatch } = useContext(ColorContext);
  return (
    <div>
      <button
        onClick={() => {
          dispatch({ type: UpdateColor, color: "red" });
        }}
      >
        红色
      </button>

      <button
        onClick={() => {
          dispatch({ type: UpdateColor, color: "yellow" });
        }}
      >
        黄色
      </button>
    </div>
  );
}

export default Buttons;
