import { NavLink, Outlet } from "react-router";

const Blog = () => {
  const deleteButtonClicked = () => {
    alert("Are you sure?");
  };
  return (
    <>
      <div className="blog-section">
        <div className="blog-title">
          <h2>BLOG PAGE</h2>
          <NavLink to="/admin/blog/create-blog">
            <button>Add Blog</button>
          </NavLink>
        </div>

        <div className="blog-contents">
          <table>
            <thead>
              <tr>
                <th>Blog Title</th>
                <th>Author</th>
                <th>Created Date</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Post 1</td>
                <td>Saliv</td>
                <td>2025-07-18</td>
                <td className="action-btns">
                  <button onClick={() => deleteButtonClicked()}>Delete</button>
                  <NavLink to="/admin/blog/edit-blog">
                    <button>Edit</button>
                  </NavLink>
                  <NavLink to="/admin/blog/view-blog">
                    <button>View</button>
                  </NavLink>
                </td>
              </tr>
              <tr>
                <td>Post 2</td>
                <td>Saliv</td>
                <td>2025-07-18</td>
                <td className="action-btns">
                  <button onClick={() => deleteButtonClicked()}>Delete</button>
                  <NavLink to="/admin/blog/edit-blog">
                    <button>Edit</button>
                  </NavLink>
                  <NavLink to="/admin/blog/view-blog">
                    <button>View</button>
                  </NavLink>
                </td>
              </tr>
              <tr>
                <td>Post 3</td>
                <td>Saliv</td>
                <td>2025-07-18</td>
                <td className="action-btns">
                  <button onClick={() => deleteButtonClicked()}>Delete</button>
                  <NavLink to="/admin/blog/edit-blog">
                    <button>Edit</button>
                  </NavLink>
                  <NavLink to="/admin/blog/view-blog">
                    <button>View</button>
                  </NavLink>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <Outlet />
      </div>
    </>
  );
};

export default Blog;
