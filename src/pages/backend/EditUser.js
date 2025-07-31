import { useEffect, useState } from "react";
import { NavLink, useParams } from "react-router";
import { getUserById } from "../../services/backend/userData";

const EditUser = () => {
  const { id } = useParams();

  const [data, setData] = useState({
    firstName: "",
    lastName: "",
    contactNum: "",
    emailAddress: "",
    homeAddress: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };

  useEffect(() => {
    const user = getUserById(id);
    setData({
      ...data,
      firstName: user.firstName,
      lastName: user.lastName,
      contactNum: user.contactNum,
      emailAddress: user.emailAddress,
      homeAddress: user.homeAddress,
    });
  }, []);

  return (
    <div className="user-view-section">
      <div className="user-title">
        <span>Edit User Data</span>
      </div>

      <div className="user-box">
        <div className="user-field">
          <label>First Name</label>
          <input
            type="text"
            name="firstName"
            onChange={handleChange}
            value={data.firstName}
          />
        </div>
        <div className="user-field">
          <label>Last Name</label>
          <input
            type="text"
            name="lastName"
            value={data.lastName}
            onChange={handleChange}
          />
        </div>
        <div className="user-field">
          <label>Contact Number</label>
          <input
            type="text"
            name="contactNum"
            value={data.contactNum}
            onChange={handleChange}
          />
        </div>
        <div className="user-field">
          <label>Email Address</label>
          <input
            type="text"
            name="emailAddress"
            value={data.emailAddress}
            onChange={handleChange}
          />
        </div>
        <div className="user-field">
          <label>Home Address</label>
          <input
            type="text"
            name="homeAddress"
            value={data.homeAddress}
            onChange={handleChange}
          />
        </div>
        <div className="user-field">
          <NavLink to={`/admin/users`}>
            <button>Back</button>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default EditUser;
