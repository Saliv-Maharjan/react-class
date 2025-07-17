import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router";

import FrontendLayout from "./components/frontend/FrontendLayout";
import BackendLayout from "./components/backend/BackendLayout";
import Home from "./pages/frontend/Home";
import ContactUs from "./pages/frontend/ContactUs";
import Dashboard from "./pages/backend/Dashboard";
import Blog from "./pages/backend/Blog";
import AdminLogin from "./pages/backend/AdminLogin";
import UserLogin from "./pages/frontend/UserLogin";
import UserSignup from "./pages/frontend/UserSignup";
import Setting from "./pages/backend/Setting";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          {/* Frontend Routes */}
          <Route path="/" element={<FrontendLayout />}>
            <Route index element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/contact-us" element={<ContactUs />} />
            <Route path="/user-login" element={<UserLogin />} />
            <Route path="/user-signup" element={<UserSignup />} />
          </Route>

          {/* Backend Routes */}
          <Route path="/admin" element={<BackendLayout />}>
            <Route index element={<Dashboard />} />
            <Route path="/admin/dashboard" element={<Dashboard />} />
            <Route path="/admin/blog" element={<Blog />} />
            <Route path="/admin/setting" element={<Setting />} />
          </Route>

          <Route path="/admin-login" element={<AdminLogin />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
