import { useEffect, useState } from "react";
import { fetchAllUserAPI } from "../services/apiService";
import UserForm from "../components/user/UserForm";
import UserTable from "../components/user/UserTable";

const UserPage = () => {
  const [dataUsers, setDataUsers] = useState([]);

  useEffect(() => {
    console.log("Run useEffect");
    loadUser();
  }, []);

  const loadUser = async () => {
    const res = await fetchAllUserAPI();
    setDataUsers(res.data);
  };
  console.log("Run render");

  return (
    <div style={{ padding: "20px" }}>
      <UserForm loadUser={loadUser} />
      <UserTable loadUser={loadUser} dataUsers={dataUsers} />
    </div>
  );
};

export default UserPage;
