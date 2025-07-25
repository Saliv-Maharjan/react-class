import { NavLink } from "react-router";

const BlogTable = (props) => {
  return (
    <>
      {props.blogData.map((item, key) => {
        return (
          <>
            <tr key={key}>
              <td>{item.title}</td>
              <td>{item.author}</td>
              <td>{item.createdDate}</td>
              <td className="action-btns">
                <NavLink to={`/admin/blog/delete-blog/${item.id}`}>
                  <button>Delete</button>
                </NavLink>
                <NavLink to={`/admin/blog/edit-blog/${item.id}`}>
                  <button>Edit</button>
                </NavLink>
                <NavLink to={`/admin/blog/view-blog/${item.id}`}>
                  <button>View</button>
                </NavLink>
              </td>
            </tr>
          </>
        );
      })}
    </>
  );
};

export default BlogTable;
