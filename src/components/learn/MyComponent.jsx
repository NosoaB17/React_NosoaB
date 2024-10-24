import "./style.css";

const MyComponent = () => {
  return (
    <>
      <div>MyComponent</div>
      <div className="child" style={{ borderRadius: "10px" }}>
        Child
      </div>
    </>
  );
};

export default MyComponent;
