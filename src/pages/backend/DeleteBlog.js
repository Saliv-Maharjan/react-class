import { NavLink } from "react-router";

const DeleteBlog = () => {
  return (
    <div className="delete-section">
      <h2> Delete Current Blog? </h2>
      <div className="delete-btns">
        <NavLink to="/admin/blog">
          <button className="delete-pri">Yes</button>
        </NavLink>
        <NavLink to="/admin/blog">
          <button className="delete-sec">No</button>
        </NavLink>
      </div>
    </div>
  );
};

export default DeleteBlog;
