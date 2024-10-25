const TodoNew = (props) => {
  console.log(props);
  const { addNewTodo } = props;
  addNewTodo("Bao");

  const handleClick = () => {
    alert("me");
  };

  const handleOnChange = () => {};

  return (
    <div className="todo-new">
      <input
        type="text"
        onChange={() => {
          handleOnChange();
        }}
      />
      <button onClick={handleClick} style={{ cursor: "pointer" }}>
        Add
      </button>
    </div>
  );
};

export default TodoNew;
