import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import { Outlet } from "react-router-dom";
import { getAccountAPI } from "./services/apiService";
import { useEffect, useContext } from "react";
import { AuthContext } from "./components/context/AuthContext";
import { Spin } from "antd";

const App = () => {
  const { setUser, isAppLoading, setIsAppLoading } = useContext(AuthContext);

  useEffect(() => {
    fetchUserInfo();
  }, []);

  const delay = (milSeconds) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve();
      }, milSeconds);
    });
  };

  const fetchUserInfo = async () => {
    const res = await getAccountAPI();
    await delay(3000);
    if (res.data) {
      setUser(res.data.user);
      console.log("Check API data:", res.data);
    }
    setIsAppLoading(false);
  };

  return (
    <>
      {isAppLoading === true ? (
        <div
          style={{
            position: "fixed",
            top: "50%",
            left: " 50%",
            transform: "translate(-50%, -50%",
          }}
        >
          <Spin />
        </div>
      ) : (
        <>
          <Header />
          <Outlet />
          <Footer />
        </>
      )}
    </>
  );
};

export default App;
