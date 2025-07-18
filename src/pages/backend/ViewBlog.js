import { NavLink } from "react-router";

const ViewBlog = () => {
  return (
    <div className="create-section">
      <div>
        <h2>BLOG TITLE</h2>
        <div>BLOG DESCRIPTION</div>
      </div>
      <NavLink to="/admin/blog">Back</NavLink>
    </div>
  );
};

export default ViewBlog;
