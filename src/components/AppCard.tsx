import React, { FormEvent, memo, useCallback } from "react";
import RenderCount from "./RenderTragger";

type DataProps = { name: string; id: number };
type CardProps = {
  text: string;
  id:number,
  setData: React.Dispatch<React.SetStateAction<DataProps[]>>,
  onClick?: () => void;
};

const AppCard: React.FC<CardProps> = ({ text, onClick,id,setData }) => {
  
  const handleDelete = useCallback((): void => {
type DataProps = { name: string; id: number };
    setData((prevData:DataProps[]) => prevData.filter((it: DataProps) => it.id !== id));
  }, []);

  return (
    <div className="flex justify-around bg-slate-100 py-3 rounded-md my-2 items-center w-[400px] gap-3 relative">
      <p>{text}</p>
      <span className="text-red-300" onClick={handleDelete}>
        x
      </span>
      <RenderCount page="appcard"/>
    </div>
  );
};

export default memo(AppCard);
