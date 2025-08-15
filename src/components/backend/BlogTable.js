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
                <button
                  onClick={() => props.handleDelete(item.id)}
                  style={{ background: "red", color: "white", border: "none" }}
                >
                  Delete
                </button>
                <NavLink to={`/admin/blog/edit-blog/${item.id}`}>
                  <button
                    style={{
                      background: "yellow",
                      color: "black",
                      border: "none",
                    }}
                  >
                    Edit
                  </button>
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
