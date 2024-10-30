import { Space, Table, Tag } from "antd";
import { fetchAllUserAPI } from "../../services/apiService";
import { useEffect, useState } from "react";

const UserTable = () => {
  const [dataUsers, setDataUsers] = useState([
    { _id: "Son", fullName: "BaoSOn", email: "BaoSOn@gmail.com" },
  ]);

  useEffect(() => {
    console.log("Run useEffect");
    loadUser();
  }, []);

  const columns = [
    {
      title: "Id",
      dataIndex: "_id",
    },
    {
      title: "Full Name",
      dataIndex: "fullName",
    },
    {
      title: "Email",
      dataIndex: "email",
    },
  ];

  const loadUser = async () => {
    const res = await fetchAllUserAPI();
    setDataUsers(res.data);
  };
  console.log("Run render");

  return <Table columns={columns} dataSource={dataUsers} />;
};

export default UserTable;
