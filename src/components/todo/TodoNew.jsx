import { useState } from "react";

const TodoNew = (props) => {
  const { addNewTodo } = props;
  const [valueInput, setValueInput] = useState("nosoab");

  const handleClick = () => {
    addNewTodo(valueInput);
  };

  const handleOnChange = (name) => {
    setValueInput(name);
  };

  return (
    <div className="todo-new">
      <input
        type="text"
        onChange={(event) => {
          handleOnChange(event.target.value);
        }}
      />
      <button onClick={handleClick} style={{ cursor: "pointer" }}>
        Add
      </button>
      <div>My Text Input is: {valueInput} </div>
    </div>
  );
};

export default TodoNew;
