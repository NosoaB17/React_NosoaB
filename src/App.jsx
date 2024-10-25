import { useState } from "react";

import TodoData from "./components/todo/TodoData";
import TodoNew from "./components/todo/TodoNew";

import "./components/todo/todo.css";
import ReactIcon from "./assets/react.svg";

const App = () => {
  const [todoList, setTodoList] = useState([]);

  const addNewTodo = (name) => {
    const newTodo = {
      id: randomIntFromInterval(1, 100000),
      name: name,
    };

    setTodoList([...todoList, newTodo]);
  };

  function randomIntFromInterval(min, max) {
    // min and max included
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

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
