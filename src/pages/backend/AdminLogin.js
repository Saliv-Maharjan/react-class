import { useState } from "react";
import { useNavigate } from "react-router";
import { doLogin } from "../../services/backend/auth";

const AdminLogin = () => {

    const navigate = useNavigate();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const [emailError, setEmailError] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const [loginError, setLoginError] = useState('');

    const handleEmailChange = (e) => {
        const inputEmail = e.target.value;
        setEmail(inputEmail);
    }

    const handlePasswordChange = (e) => {
        const inputPassword = e.target.value;
        setPassword(inputPassword);
    }

    const HandleBtnClick = () => {
        const loginStatus = doLogin(email, password);

        if(email === ''){
            setEmailError("* Email Required");
        }
        
        if(password === ''){
            setPasswordError("* Password Required");
        }

        if(loginStatus){
            navigate('/Admin/Dashboard');
        }else{
            setLoginError("Invalid Email and Password!")
        }
    }

    return(
        <>
            <div className="login-section">
                <div className="login-form">
                    <h2 className="login-title">ADMIN LOGIN</h2>
                    <div className="login-elements">
                        <label>Email</label>
                        <input type="email" placeholder="Enter your email" onChange={(e) => handleEmailChange(e)} value={email} />
                        <span className="error">{emailError}</span>
                    </div>
                    <div className="login-elements">
                        <label>Password</label>
                        <input type="password" placeholder="Enter your password" onChange={(e) => handlePasswordChange(e)} value={password}/>
                        <span className="error">{passwordError}</span>
                    </div>
                    <div className="login-elements">
                        <input className="login-btn" type="submit" value="LOGIN" onClick={() => HandleBtnClick()}/>
                        <span className="error">{loginError}</span>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AdminLogin;