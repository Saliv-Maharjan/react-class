import { NavLink } from "react-router";
const UserTable = (props) => {
  return (
    <>
      {props.userData.map((user, key) => {
        return (
          <>
            <tr key={key}>
              <td>{user.firstName}</td>
              <td>{user.lastName}</td>
              <td>{user.contactNum}</td>
              <td>{user.emailAddress}</td>
              <td>{user.homeAddress}</td>
              <td className="action-btns">
                <NavLink to={`/admin/users/view-user/${user.id}`}>
                  <button>View</button>
                </NavLink>
                <NavLink to={`/admin/users/edit-user/${user.id}`}>
                  <button>Edit</button>
                </NavLink>
                <NavLink>
                  <button>Delete</button>
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
