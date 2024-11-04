import { useRouteError } from "react-router-dom";
import { Link } from "react-router-dom";
import { Result, Button } from "antd";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <Result
      status="403"
      title="Oops!"
      subTitle={error.statusText || error.message}
      extra={
        <Button type="primary">
          {" "}
          <Link href="/">
            <span>Back to Homepage</span>
          </Link>
        </Button>
      }
    />
  );
}
