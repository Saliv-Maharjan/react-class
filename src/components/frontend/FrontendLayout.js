import { Outlet } from "react-router";

import Header from "./Header";
import Footer from "./Footer";

const FrontendLayout = () => {
  return (
    <>
      <div className="layout">
        <Header />
        <div className="front-section">
          <div className="front-content">
            <Outlet />
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default FrontendLayout;
