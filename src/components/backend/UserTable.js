import { NavLink } from "react-router";
const UserTable = (props) => {
  return (
    <>
      {props.userData.map((user, key) => {
        return (
          <>
            <tr key={key}>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.num}</td>
              <td className="action-btns">
                <NavLink to={`/admin/users/edit-user/${user.id}`}>
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
                <NavLink>
                  <button
                    onClick={() => props.handleDelete(user.id)}
                    style={{
                      background: "red",
                      color: "white",
                      border: "none",
                    }}
                  >
                    Delete
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

export default UserTable;
