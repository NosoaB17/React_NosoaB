import { Space, Table, Tag } from "antd";
import { fetchAllUserAPI } from "../../services/apiService";
import { useState } from "react";

const UserTable = () => {
  const [dataUsers, setDataUsers] = useState([
    { _id: "Son", fullname: "BaoSOn", email: "BaoSOn@gmail.com" },
  ]);

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
    // setDataUsers(res.data);
  };

  loadUser();

  return <Table columns={columns} dataSource={dataUsers} />;
};

export default UserTable;
