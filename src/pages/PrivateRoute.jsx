import { useContext } from "react";
import { AuthContext } from "../components/context/AuthContext";
import { Navigate, Link } from "react-router-dom";
import { Result, Button } from "antd";

const PrivateRoute = (props) => {
  const { user } = useContext(AuthContext);
  if (user && user.id) {
    return <>{props.children}</>;
  }

  //   return <Navigate to="/login" replace />;
  return (
    <Result
      status="403"
      title="Unauthorized!"
      subTitle={"You need to log in to access the resource!"}
      extra={
        <Button type="primary">
          <Link to="/">
            <span>Back to Homepage</span>
          </Link>
        </Button>
      }
    />
  );
};

export default PrivateRoute;
