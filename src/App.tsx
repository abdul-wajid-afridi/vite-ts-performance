import React, { memo, useCallback, useMemo, useRef, useState } from "react";
import AppCard from "./components/AppCard";
import RenderCount from "./components/RenderTragger";
import AppInput from "./components/AppInput";

type DataProps = { name: string; id: number };
type AppCardWrapperProps = {
  it: DataProps;
  setData: React.Dispatch<React.SetStateAction<DataProps[]>>;
};
const AppCardWrapper = memo(function AppCardWrapper({
  it,
  setData,
}: AppCardWrapperProps) {
  return (
    <div>
      <AppCard text={it.name} id={it.id} setData={setData} />
      <RenderCount page="AppCardWrapper" />
    </div>
  );
});

const TodoPage = memo(() => {
  const [data, setData] = useState<DataProps[]>([]);

  const refVal = useRef<HTMLInputElement>(null);

  const handleData = useCallback((): void => {
    if (!refVal.current?.value) return;
    if (refVal.current) {
      const newName = refVal.current.value || "";
      const newId = Date.now();

      setData((prevData) => [...prevData, { name: newName, id: newId }]);
      refVal.current.value = "";
    }
  }, [refVal.current]);

  // const handleDelete = useCallback((id: number): void => {
  //   setData((prevData) => prevData.filter((it: DataProps) => it.id !== id));
  // }, []);

  // const appCardComponents = useMemo(
  //   () =>
  //     data.map((it) => (
  //       <AppCard key={it.id} id={it.id} setData={setData} text={it.name} />
  //     //  <AppCardWrapper key={it.id} setData={setData} it={it}/>
  //     )),
  //   [data]
  // );
  return (
    <div className="relative">
      {/* {appCardComponents} */}
      {useMemo(
        () =>
          data.map((it) => (
            <AppCard key={it.id} id={it.id} setData={setData} text={it.name} />
            // <AppCardWrapper key={it.id} setData={setData} it={it}/>
          )),
        [data]
      )}
      {/* <AppTodo data={data} handleDelete={handleDelete} /> */}
      <AppInput type="text" ref={refVal} className="border rounded-md" />
      <button onClick={handleData}>Add2</button>
      <RenderCount color="red" page="Innnermain" />
    </div>
  );
});

export default TodoPage;
