import { NavLink } from "react-router";
import BlogTable from "../../components/backend/BlogTable";
import { useEffect, useState } from "react";
import { deleteBlog, getAllBlogs } from "../../services/backend/blogData";
import { toast } from "react-toastify";

const Blog = () => {
  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    getAllBlogs().then((response) => {
      setBlogs(response);
    });
  }, []);

  const handleDelete = (id) => {
    deleteBlog(id)
      .then((response) => {
        getAllBlogs().then((response) => {
          setBlogs(response);
          toast.warn("Deleted");
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      <div className="blog-section">
        <div className="blog-title">
          <h2>BLOG PAGE</h2>
          <NavLink to={`/admin/blog/create-blog`}>
            <button
              style={{ background: "green", color: "white", border: "none" }}
            >
              Add Blog
            </button>
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
              <BlogTable blogData={blogs} handleDelete={handleDelete} />
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default Blog;
