import { useState } from "react";

import TodoData from "./components/todo/TodoData";
import TodoNew from "./components/todo/TodoNew";

import "./components/todo/todo.css";
import ReactIcon from "./assets/react.svg";

const App = () => {
  const [todoList, setTodoList] = useState([]);

  const addNewTodo = (name) => {
    const newTodo = {
      id: 17,
      name: name,
    };

    setTodoList([...todoList, newTodo]);
  };

  return (
    <div className="todo-container">
      <div className="todo-title">Todo List</div>
      <TodoNew addNewTodo={addNewTodo} />
      <TodoData todoList={todoList} />
      <div className="todo-image">
        <img src={ReactIcon} className="logo" alt="react-icon" />
      </div>
    </div>
  );
};

export default App;
