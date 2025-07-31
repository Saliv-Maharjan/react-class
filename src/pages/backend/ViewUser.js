import { useEffect, useState } from "react";
import { NavLink, useParams } from "react-router";
import { getUserById } from "../../services/backend/userData";

const ViewUser = () => {
  const { id } = useParams();

  const [data, setData] = useState({
    firstName: "",
    lastName: "",
    contactNum: "",
    emailAddress: "",
    homeAddress: "",
  });

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
        <span>User Data</span>
      </div>

      <div className="user-box">
        <div className="user-field">
          <label>First Name</label>
          <input type="text" name="firstName" value={data.firstName} readOnly />
        </div>
        <div className="user-field">
          <label>Last Name</label>
          <input type="text" name="lastName" value={data.lastName} readOnly />
        </div>
        <div className="user-field">
          <label>Contact Number</label>
          <input
            type="text"
            name="contactNum"
            value={data.contactNum}
            readOnly
          />
        </div>
        <div className="user-field">
          <label>Email Address</label>
          <input
            type="text"
            name="emailAddress"
            value={data.emailAddress}
            readOnly
          />
        </div>
        <div className="user-field">
          <label>Home Address</label>
          <input
            type="text"
            name="homeAddress"
            value={data.homeAddress}
            readOnly
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

export default ViewUser;
