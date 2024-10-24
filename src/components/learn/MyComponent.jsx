import "./style.css";

const MyComponent = () => {
  //   const nosoab = "SonNB";
  //   const nosoab = 17;
  //   const nosoab = true;
  //   const nosoab = undefined;
  //   const nosoab = null;
  const nosoab = [1, 2, 3];
  //   const nosoab = {
  //     name: "NgoBaoSon",
  //     age: 17,
  //   };
  return (
    <>
      <div>{JSON.stringify(nosoab)} & MyComponent</div>
      <div>{console.log("NOSOAB")}</div>
      <div className="child" style={{ borderRadius: "10px" }}>
        Child
      </div>
    </>
  );
};

export default MyComponent;
