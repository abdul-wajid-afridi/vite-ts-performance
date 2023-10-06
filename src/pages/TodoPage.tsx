// import React, { memo, useCallback, useMemo, useRef, useState } from "react";
// import RenderCount from "../components/RenderTragger";
// import AppInput from "../components/AppInput";
// import AppCard from "../components/AppCard";

// type DataProps = { name: string; id: number };

// const TodoPage: React.FC = () => {
//   // const [name, setName] = useState<string>("");
//   const [data, setData] = useState<DataProps[]>([]);

//   const refVal = useRef<HTMLInputElement>(null);

//   const handleData = useCallback((): void => {
//     if (!refVal.current?.value) return;
//     if (refVal.current) {
//       const newName = refVal.current.value || "";
//       const newId = Date.now();

//       setData((prevData) => [...prevData, { name: newName, id: newId }]);
//       refVal.current.value = "";
//     }
//   }, []);

//   const handleDelete = useCallback((id: number): void => {
//     setData((prevData) => prevData.filter((it: DataProps) => it.id !== id));
//   }, []);

//   const appCardComponents = useMemo(
//     () =>
//       data.map((it) => (
//         <div key={it.id}>
//           <AppCard text={it.name} onClick={() => handleDelete(it.id)} />
//           <RenderCount />
//         </div>
//       )),
//     [data, handleDelete]
//   );
//   return (
//     <div className="relative">
//       {appCardComponents}
//       {/* <AppTodo data={data} handleDelete={handleDelete} /> */}
//       <AppInput type="text" ref={refVal} className="border rounded-md" />
//       <button onClick={handleData}>Add</button>
//     </div>
//   );
// };

// export default memo(TodoPage);

import React, { useState, useCallback, useMemo } from "react";

interface Todo {
  id: number;
  text: string;
}

interface TodoItemProps {
  todo: Todo;
  onDelete: (id: number) => void;
}

const TodoItem: React.FC<TodoItemProps> = React.memo(({ todo, onDelete }) => {
  console.log(`Rendering TodoItem with id: ${todo.id}`);
  return (
    <div>
      {todo.text}
      <button onClick={() => onDelete(todo.id)}>Delete</button>
    </div>
  );
});

interface TodoListProps {
  todos: Todo[];
  onDelete: (id: number) => void;
}

const TodoList: React.FC<TodoListProps> = ({ todos, onDelete }) => {
  console.log("Rendering TodoList");
  return (
    <div>
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} onDelete={onDelete} />
      ))}
    </div>
  );
};

const TodoApp: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [inputText, setInputText] = useState("");

  const handleAddTodo = useCallback(() => {
    if (inputText.trim() !== "") {
      const newTodo: Todo = {
        id: Date.now(),
        text: inputText,
      };
      setTodos((prevTodos) => [...prevTodos, newTodo]);
      setInputText("");
    }
  }, [inputText]);

  const handleDeleteTodo = useCallback((id: number) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
  }, []);

  console.log("Rendering TodoApp");

  return (
    <div>
      <input
        type="text"
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
      />
      <button onClick={handleAddTodo}>Add Todo</button>
      <TodoList todos={todos} onDelete={handleDeleteTodo} />
    </div>
  );
};

export default TodoApp;
