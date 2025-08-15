import { useState } from "react";
import { useNavigate } from "react-router";
import { createUser } from "../../services/backend/userData";
import { toast } from "react-toastify";

const CreateUser = () => {
  const navigate = useNavigate();

  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
    num: "",
  });

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    password: "",
    num: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };

  const handleSubmit = () => {
    let hasError = false;
    let validationErrors = {
      name: "",
      email: "",
      password: "",
      num: "",
    };
    if (data.name.trim() === "") {
      validationErrors.name = "Name is Required";
      hasError = true;
    }
    if (data.email.trim() === "") {
      validationErrors.email = "Email is Required";
      hasError = true;
    }
    if (data.password.trim() === "") {
      validationErrors.password = "Password is Required";
      hasError = true;
    }
    if (data.num.trim() === "") {
      validationErrors.num = "Phone is Required";
      hasError = true;
    }

    setErrors(validationErrors);
    if (!hasError) {
      createUser(data)
        .then((response) => {
          navigate("/admin/users");
          toast.success("User created sucessfully!");
        })
        .catch((error) => {
          console.log(error);
        });
    } else {
      console.log("has error");
    }
  };

  return (
    <div className="user-view-section">
      <div className="user-title">
        <span>Add a User</span>
      </div>

      <div className="user-box">
        <div className="user-field">
          <label>Full Name</label>
          <input
            type="text"
            name="name"
            onChange={handleChange}
            value={data.name}
            autoComplete="off"
          />
          {errors.name && <p className="error">{errors.name}</p>}
        </div>
        <div className="user-field">
          <label>Email Address</label>
          <input
            type="text"
            name="email"
            onChange={handleChange}
            value={data.email}
            autoComplete="off"
          />
          {errors.email && <p className="error">{errors.email}</p>}
        </div>
        <div className="user-field">
          <label>Password</label>
          <input
            type="password"
            name="password"
            onChange={handleChange}
            value={data.password}
            autoComplete="off"
          />
          {errors.password && <p className="error">{errors.password}</p>}
        </div>
        <div className="user-field">
          <label>Contact Number</label>
          <input
            type="text"
            name="num"
            onChange={handleChange}
            value={data.num}
            autoComplete="off"
          />
          {errors.num && <p className="error">{errors.num}</p>}
        </div>

        <div className="user-field">
          <button onClick={handleSubmit}>Add User</button>
        </div>
      </div>
    </div>
  );
};

export default CreateUser;
