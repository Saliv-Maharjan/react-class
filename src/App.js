import "./App.css";
import "react-toastify/dist/ReactToastify.css";

import { BrowserRouter, Routes, Route } from "react-router";
import { ToastContainer } from "react-toastify";

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
import CreateBlog from "./pages/backend/CreateBlog";
import EditBlog from "./pages/backend/EditBlog";
import ViewBlog from "./pages/backend/ViewBlog";
import DeleteBlog from "./pages/backend/DeleteBlog";
import Users from "./pages/backend/Users";
import EditUser from "./pages/backend/EditUser";
import CreateUser from "./pages/backend/CreateUser";

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
            <Route path="/user-login" element={<UserLogin />} />p
            <Route path="/user-signup" element={<UserSignup />} />
          </Route>

          {/* Backend Routes */}
          <Route path="/admin" element={<BackendLayout />}>
            <Route index element={<Dashboard />} />
            <Route path="/admin/dashboard" element={<Dashboard />} />

            <Route path="/admin/blog" element={<Blog />} />
            <Route path="/admin/blog/create-blog" element={<CreateBlog />} />
            <Route path="/admin/blog/edit-blog/:id" element={<EditBlog />} />
            <Route path="/admin/blog/view-blog/:id" element={<ViewBlog />} />
            <Route
              path="/admin/blog/delete-blog/:id"
              element={<DeleteBlog />}
            />

            <Route path="/admin/users" element={<Users />} />
            <Route path="/admin/users/create-user" element={<CreateUser />} />
            <Route path="/admin/users/edit-user/:id" element={<EditUser />} />

            <Route path="/admin/setting" element={<Setting />} />
          </Route>

          <Route path="/admin-login" element={<AdminLogin />} />
        </Routes>
      </BrowserRouter>

      <ToastContainer />
    </>
  );
}

export default App;
