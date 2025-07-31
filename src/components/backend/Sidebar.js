import { NavLink } from "react-router";

const Sidebar = () => {
  return (
    <div className="admin-sidebar">
      <ul>
        <li>
          <NavLink className="nav-links" to="/admin/dashboard">
            Dashboard
          </NavLink>
        </li>
        <li>
          <NavLink className="nav-links" to="/admin/blog">
            Blog
          </NavLink>
        </li>
        <li>
          <NavLink className="nav-links" to="/admin/users">
            Users
          </NavLink>
        </li>
        <li>
          <NavLink className="nav-links" to="/admin/setting">
            Setting
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
