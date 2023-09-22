import React, { useRef } from "react";

export default function RenderCount(inputs: { style?: any }) {
  const savedRenderCount = useRef(0);
  console.log(++savedRenderCount.current);

  const size = 30;
  return (
    <div
      // className="h-5 w-5 bg-red-300 rounded-full absolute"
      style={{
        position: "absolute",
        top: 0,
        right: 0,
        textAlign: "center",
        // height: size,
        // width: size,
        lineHeight: size,
        borderRadius: size / 2,
        borderWidth: 1,
        borderColor: "#ddd",
        backgroundColor: "#eee",
        ...inputs.style,
      }}
    >
      {++savedRenderCount.current}
    </div>
  );
}
