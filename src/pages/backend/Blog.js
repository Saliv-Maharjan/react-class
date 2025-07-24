import { NavLink } from "react-router";
import BlogTable from "../../components/backend/BlogTable";

const Blog = () => {
  const data = [
    {
      id: 1,
      title: "Blog 1",
      author: "Saliv",
      createdDate: "2025/07/24",
    },
    {
      id: 2,
      title: "Blog 2",
      author: "Saliv",
      createdDate: "2025/07/24",
    },
    {
      id: 3,
      title: "Blog 3",
      author: "Saliv",
      createdDate: "2025/07/24",
    },
  ];

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
              <BlogTable blogData={data} />
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default Blog;
