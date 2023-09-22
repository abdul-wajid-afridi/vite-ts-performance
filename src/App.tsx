import React, { useRef, useState } from "react";
import RenderCount from "./RenderTragger";

type DataProps = { name: string; id: number };
const App: React.FC = () => {
  // const [name, setName] = useState<string>("");
  const [data, setData] = useState<DataProps[]>([]);

  const refVal = useRef<HTMLInputElement>(null);

  const handleData = () => {
    setData([
      ...data,
      {
        name: refVal.current?.value || "",
        id: Date.now(),
      },
    ]);
    if (refVal.current) {
      refVal.current.value = "";
    }
    // setName("");
  };

  return (
    <div>
      {data.map((it) => {
        return <p key={it.id}>{it.name}</p>;
      })}
      <input
        type="text"
        // value={name}
        ref={refVal}
        // onChange={(e) => setName(e.target.value)}
      />
      <RenderCount />
      <button onClick={handleData}>Add</button>
    </div>
  );
};

export default App;
