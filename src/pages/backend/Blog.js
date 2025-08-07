import { NavLink } from "react-router";
import BlogTable from "../../components/backend/BlogTable";
import { useEffect, useState } from "react";
import { getAllBlogs } from "../../services/backend/blogData";

const Blog = () => {
  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    getAllBlogs().then((response) => {
      setBlogs(response);
    });
  }, []);

  return (
    <>
      <div className="blog-section">
        <div className="blog-title">
          <h2>BLOG PAGE</h2>
          <NavLink to={`/admin/blog/create-blog`}>
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
              <BlogTable blogData={blogs} />
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default Blog;
