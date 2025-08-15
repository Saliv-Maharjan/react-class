import { useState } from "react";
import { NavLink, useNavigate } from "react-router";
import { doLogin } from "../../services/backend/auth";
import { toast } from "react-toastify";

const AdminLogin = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [loginError, setLoginError] = useState("");

  const handleEmailChange = (e) => {
    const inputEmail = e.target.value;
    setEmail(inputEmail);
  };

  const handlePasswordChange = (e) => {
    const inputPassword = e.target.value;
    setPassword(inputPassword);
  };

  // Handle Form Submission
  const HandleBtnClick = async () => {
    let error = false;
    if (email === "") {
      setEmailError("Email is required");
      error = true;
    } else if (password === "") {
      setPasswordError("Password is required");
      error = true;
    }

    if (error) {
      return;
    }
    const loginStatus = await doLogin(email, password);
    if (loginStatus) {
      navigate("/admin/dashboard");
      toast.success("Login Sucessfull");
    } else {
      toast.error("Incorrect email or password!");
    }
  };

  return (
    <>
      <div className="login-section">
        <div className="login-form">
          <h2 className="login-title">ADMIN LOGIN</h2>
          <div className="login-elements">
            <label>Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              onChange={(e) => handleEmailChange(e)}
              value={email}
            />
            <span className="error">{emailError}</span>
          </div>
          <div className="login-elements">
            <label>Password</label>
            <input
              type="password"
              placeholder="Enter your password"
              onChange={(e) => handlePasswordChange(e)}
              value={password}
            />
            <span className="error">{passwordError}</span>
          </div>
          <div className="login-elements">
            <input
              className="login-btn"
              type="submit"
              value="LOGIN"
              onClick={() => HandleBtnClick()}
            />
          </div>
          <div>
            <NavLink to="/">Back to User Page</NavLink>
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminLogin;
