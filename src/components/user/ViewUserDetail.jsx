import { useState } from "react";
import { Button, Drawer, notification } from "antd";
import {
  handleUploadFile,
  updateUserAvatarAPI,
} from "../../services/apiService";

const ViewUserDetail = (props) => {
  const { dataDetail, setDataDetail, isDetailOpen, setIsDetailOpen, loadUser } =
    props;

  const [selectedFile, setSelectedFile] = useState();
  const [preview, setPreview] = useState();

  const handleOnChangeFile = (event) => {
    if (!event.target.files || event.target.files.length === 0) {
      setSelectedFile(null);
      setPreview(null);
      return;
    }
    const file = event.target.files[0];
    if (file) {
      setSelectedFile(file);
      setPreview(URL.createObjectURL(file));
    }
  };

  const handleUpdateUserAvatar = async () => {
    //Upload file
    const resUpload = await handleUploadFile(selectedFile, "avatar");
    if (resUpload.data) {
      const newAvatar = resUpload.data.fileUploaded;
      const resUpdateAvatar = await updateUserAvatarAPI(
        newAvatar,
        dataDetail._id,
        dataDetail.fullName,
        dataDetail.phone
      );
      if (resUpdateAvatar.data) {
        setIsDetailOpen(false);
        setSelectedFile(null);
        setPreview(null);

        await loadUser();
        notification.success({
          message: "Update user avatar",
          description: "Update avatar success",
        });
      } else {
        notification.error({
          message: "Error update avatar",
          description: JSON.stringify(resUpdateAvatar.message),
        });
      }
    } else {
      notification.error({
        message: "Error upload file",
        description: JSON.stringify(resUpload.message),
      });
    }
  };

  return (
    <Drawer
      width={"40vw"}
      title="Detail User"
      onClose={() => {
        setDataDetail(null);
        setIsDetailOpen(false);
      }}
      open={isDetailOpen}
    >
      {dataDetail ? (
        <>
          <p>Id: {dataDetail._id}</p>
          <br />
          <p>Full name: {dataDetail.fullName}</p>
          <br />
          <p>Email: {dataDetail.email}</p>
          <br />
          <p>Phone number: {dataDetail.phone}</p>
          <br />
          <p>Avatar: </p>
          <div
            style={{
              marginTop: "10px",
              height: "150px",
              width: "150px",
              border: "1px solid #ccc",
            }}
          >
            <img
              style={{ height: "100%", width: "100%", objectFit: "contain" }}
              src={`${import.meta.env.VITE_BACKEND_URL}/images/avatar/${
                dataDetail.avatar
              }`}
            />
          </div>
          <div>
            <label
              htmlFor="btnUpload"
              style={{
                display: "block",
                width: "fit-content",
                marginTop: "15px",
                padding: "5px 10px",
                background: "#3d88ed",
                borderRadius: "5px",
                cursor: "pointer",
              }}
            >
              Upload Avatar
            </label>
            <input
              type="file"
              hidden
              id="btnUpload"
              onChange={(event) => handleOnChangeFile(event)}
            />
          </div>
          {preview && (
            <>
              <div
                style={{
                  marginTop: "10px",
                  marginBottom: "15px",
                  height: "150px",
                  width: "150px",
                }}
              >
                <img
                  style={{
                    height: "100%",
                    width: "100%",
                    objectFit: "contain",
                  }}
                  src={preview}
                />
              </div>
              <Button type="primary" onClick={() => handleUpdateUserAvatar()}>
                Save
              </Button>
            </>
          )}
        </>
      ) : (
        <>
          <p>No Data</p>
        </>
      )}
    </Drawer>
  );
};

export default ViewUserDetail;
