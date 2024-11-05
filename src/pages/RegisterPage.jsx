import { Button, Input, Form, notification, Row, Col, Divider } from "antd";
import { registerUserAPI } from "../services/apiService";
import { Link, useNavigate } from "react-router-dom";

const RegisterPage = () => {
  const [form] = Form.useForm();
  const navigate = useNavigate();

  const onFinish = async (values) => {
    console.log("Check value:", values);
    const res = await registerUserAPI(
      values.fullName,
      values.email,
      values.password,
      values.phone
    );
    if (res.data) {
      notification.success({
        message: "Register success",
        description: "Sign up success",
      });
      navigate("login");
    } else {
      notification.error({
        message: "Register success",
        description: JSON.stringify(res.message),
      });
    }
  };

  return (
    <Form
      form={form}
      layout="vertical"
      onFinish={onFinish}
      style={{ margin: "30px" }}
      // onFinishFailed={onFinishFailed}
    >
      <h3 style={{ textAlign: "center" }}>Sign up account</h3>
      <Row justify={"center"}>
        <Col xs={24} md={8}>
          {" "}
          <Form.Item
            label="Full Name"
            name="fullName"
            rules={[
              {
                required: true,
                message: "Please input your fullname!",
              },
            ]}
          >
            <Input />
          </Form.Item>
        </Col>
      </Row>
      <Row justify={"center"}>
        <Col xs={24} md={8}>
          <Form.Item
            label="Email"
            name="email"
            rules={[
              {
                required: true,
                message: "Please input your email!",
              },
            ]}
          >
            <Input />
          </Form.Item>
        </Col>
      </Row>
      <Row justify={"center"}>
        <Col xs={24} md={8}>
          <Form.Item
            label="Password"
            name="password"
            rules={[
              {
                required: true,
                message: "Please input your password!",
              },
              {},
            ]}
          >
            <Input.Password />
          </Form.Item>
        </Col>
      </Row>
      <Row justify={"center"}>
        <Col xs={24} md={8}>
          <Form.Item
            label="Phone"
            name="phone"
            rules={[
              {
                pattern: new RegExp(/\d+/g),
                message: "Wrong format!",
              },
            ]}
          >
            <Input />
          </Form.Item>
        </Col>
      </Row>
      <Row justify={"center"}>
        <Col xs={24} md={8}>
          {" "}
          <div>
            <Button
              type="primary"
              onClick={() => {
                form.submit();
              }}
            >
              Register
            </Button>
            <Button
              onClick={() => {
                form.setFieldsValue({
                  email: "ngsn176@gmail.com",
                  fullName: "Ngo Bao Son",
                });
              }}
            >
              Test
            </Button>
          </div>
          <Divider />
          <div>
            Already have an account ? <Link to={"/login"}>Sign in here</Link>
          </div>
        </Col>
      </Row>
    </Form>
  );
};

export default RegisterPage;
