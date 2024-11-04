import { Input, notification, Modal } from "antd";
import { useEffect, useState } from "react";
import { updateUserAPI } from "../../services/apiService";

const UpdateUserModal = ({
  loadUser,
  isModalUpdateOpen,
  setIsModalUpdateOpen,
  dataUpdate,
  setDataUpdate,
}) => {
  const [id, setId] = useState("");
  const [fullName, setFullName] = useState("");
  const [phone, setPhone] = useState("");

  useEffect(() => {
    console.log(dataUpdate);
    if (dataUpdate) {
      setId(dataUpdate._id);
      setFullName(dataUpdate.fullName);
      setPhone(dataUpdate.phone);
    }
  }, [dataUpdate]);

  const handleSubmitBtn = async () => {
    const res = await updateUserAPI(id, fullName, phone);
    if (res.data) {
      notification.success({
        message: "Update User",
        description: "Update user success",
      });
      resetAndCloseModal();
      await loadUser();
    } else {
      notification.error({
        message: "Update user",
        description: JSON.stringify(res.message),
      });
    }
  };

  const resetAndCloseModal = () => {
    setIsModalUpdateOpen(false);
    setId("");
    setFullName("");
    setPhone("");
    setDataUpdate(null);
  };

  return (
    <Modal
      title="Update a User"
      open={isModalUpdateOpen}
      onOk={() => handleSubmitBtn()}
      onCancel={() => resetAndCloseModal()}
      maskClosable={false}
      okText={"Save"}
    >
      <div style={{ display: "flex", gap: "15px", flexDirection: "column" }}>
        <div>
          <span>Id</span>
          <Input value={id} disabled />
        </div>
        <div>
          <span>FullName</span>
          <Input
            value={fullName}
            onChange={(event) => {
              setFullName(event.target.value);
            }}
          />
        </div>
        <div>
          <span>Phone Number</span>
          <Input
            value={phone}
            onChange={(event) => {
              setPhone(event.target.value);
            }}
          />
        </div>
      </div>
    </Modal>
  );
};

export default UpdateUserModal;