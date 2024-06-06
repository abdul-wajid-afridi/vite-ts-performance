// import React, { memo, useMemo } from "react";
// import AppCard from "./AppCard";

// type DataProps = {
//   data: { name: string; id: number }[];
//   handleDelete: (e: number) => void;
// };

// const AppTodo: React.FC<DataProps> = ({ data, handleDelete }) => {
//   const appCardComponents = useMemo(
//     () =>
//       data.map((it) => (
//         <AppCard
//           key={it.id}
//           text={it.name}
//           onClick={() => handleDelete(it.id)}
//         />
//       )),
//     [data]
//   );
//   return <div>{appCardComponents}</div>;
// };

// export default memo(AppTodo);
import React from "react";

const AppTodo = () => {
  return <div>AppTodo</div>;
};

export default AppTodo;
