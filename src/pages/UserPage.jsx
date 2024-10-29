import UserForm from "../components/user/UserForm";
import UserTable from "../components/user/UserTable";

const UserPage = () => {
  return (
    <div style={{ padding: "20px" }}>
      <UserForm />
      <UserTable />
    </div>
  );
};

export default UserPage;
