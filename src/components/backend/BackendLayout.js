import { useEffect } from "react";
import { Outlet, useNavigate } from "react-router";
import Header from "./Header";
import Footer from "./Footer";
import Sidebar from "./Sidebar";
import { AUTH_TOKEN } from "../../services/backend/auth";

const BackendLayout = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const authToken = localStorage.getItem("AUTH_TOKEN");
    if (AUTH_TOKEN !== authToken) {
      navigate("/admin-login");
    }
  }, []);

  return (
    <>
      <div className="layout">
        <Header />
        <div className="section">
          <Sidebar />
          <div className="content">
            <Outlet />
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default BackendLayout;
