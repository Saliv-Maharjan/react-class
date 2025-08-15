import { useEffect, useState } from "react";
import UserTable from "../../components/backend/UserTable";
import { deleteUser, getAllUsers } from "../../services/backend/userData";
import { NavLink } from "react-router";
import { toast } from "react-toastify";

const Users = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    getAllUsers().then((response) => {
      setUsers(response);
    });
  }, []);

  const handleDelete = (id) => {
    deleteUser(id)
      .then((response) => {
        getAllUsers().then((response) => {
          setUsers(response);
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
          <h2>USER PAGE</h2>
          <NavLink to={`/admin/users/create-user`}>
            <button
              style={{ background: "green", color: "white", border: "none" }}
            >
              Add User
            </button>
          </NavLink>
        </div>

        <div className="blog-contents">
          <table>
            <thead>
              <tr>
                <th>Full Name</th>
                <th>Email Address</th>
                <th>Contact Number</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              <UserTable userData={users} handleDelete={handleDelete} />
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};
export default Users;
