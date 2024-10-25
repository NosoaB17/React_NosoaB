const TodoData = (props) => {
  const { name, age, data } = props;

  console.log("CheckProps:", props);

  return (
    <div className="todo-data">
      <div>My name is : {name}</div>
      <div>I am {age} years old</div>
      <div>
        Currently I live in {data.address} {data.country}
      </div>
      <div>Learn React</div>
      <div>Watch Video</div>
      <div>{JSON.stringify(props.todoList)}</div>
    </div>
  );
};

export default TodoData;
