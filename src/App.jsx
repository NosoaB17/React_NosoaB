import { useState } from "react";

import TodoData from "./components/todo/TodoData";
import TodoNew from "./components/todo/TodoNew";

import "./components/todo/todo.css";
import ReactIcon from "./assets/react.svg";

const App = () => {
  const [todoList, setTodoList] = useState([
    { id: 1, name: "Learning React" },
    { id: 2, name: "TodoList" },
  ]);

  const name = "SonNB";
  const age = 24;
  const data = {
    address: "Hanoi",
    country: "Vietnam",
  };

  const addNewTodo = (name) => {
    alert(`Call me : ${name}`);
  };

  return (
    <div className="todo-container">
      <div className="todo-title">Todo List</div>
      <TodoNew addNewTodo={addNewTodo} />
      <TodoData name={name} age={age} data={data} todoList={todoList} />
      <div className="todo-image">
        <img src={ReactIcon} className="logo" alt="react-icon" />
      </div>
    </div>
  );
};

export default App;
