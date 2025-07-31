import { useEffect, useState } from "react";
import UserTable from "../../components/backend/UserTable";
import { getAllUsers } from "../../services/backend/userData";

const Users = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    const userData = getAllUsers();
    setUsers(userData);
  }, []);
  return (
    <>
      <div className="blog-section">
        <div className="blog-title">
          <h2>USER PAGE</h2>
        </div>

        <div className="blog-contents">
          <table>
            <thead>
              <tr>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Contact Number</th>
                <th>Email Address</th>
                <th>Home Address</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              <UserTable userData={users} />
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};
export default Users;
