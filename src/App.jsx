import TodoData from "./components/todo/TodoData";
import TodoNew from "./components/todo/TodoNew";

import "./components/todo/todo.css";
import ReactIcon from "./assets/react.svg";

const App = () => {
  const name = "SonNB";
  const age = 24;
  const data = {
    address: "Quang Ninh",
    country: "Vietnam",
  };

  const addNewTodo = (name) => {
    alert(`Call me : ${name}`);
  };

  return (
    <div className="todo-container">
      <div className="todo-title">Todo List</div>
      <TodoNew addNewTodo={addNewTodo} />
      <TodoData name={name} age={age} data={data} />
      <div className="todo-image">
        <img src={ReactIcon} className="logo" alt="react-icon" />
      </div>
    </div>
  );
};

export default App;
