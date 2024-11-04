import { useEffect, useState } from "react";
import { fetchAllUserAPI } from "../services/apiService";
import UserForm from "../components/user/UserForm";
import UserTable from "../components/user/UserTable";

const UserPage = () => {
  const [dataUsers, setDataUsers] = useState([]);
  const [current, setCurrent] = useState(1);
  const [pageSize, setPageSize] = useState(5);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    loadUser();
  }, [current, pageSize]);

  const loadUser = async () => {
    const res = await fetchAllUserAPI(current, pageSize);
    if (res.data) {
      setDataUsers(res.data.result);
      setCurrent(res.data.meta.current);
      setPageSize(res.data.meta.pageSize);
      setTotal(res.data.meta.total);
    }
  };

  console.log("Check pageSize", pageSize);

  return (
    <div style={{ padding: "20px" }}>
      <UserForm loadUser={loadUser} />
      <UserTable
        loadUser={loadUser}
        dataUsers={dataUsers}
        current={current}
        pageSize={pageSize}
        total={total}
        setCurrent={setCurrent}
        setPageSize={setPageSize}
      />
    </div>
  );
};

export default UserPage;
