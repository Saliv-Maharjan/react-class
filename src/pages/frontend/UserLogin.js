import { useState } from "react";
import { NavLink } from "react-router";

const UserLogin = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    
    const handleEmailChange = (e) => {
        const inputEmail = e.target.value;
        setEmail(inputEmail);
    }
    
    const handlePasswordChange = (e) => {
        const inputPassword = e.target.value;
        setPassword(inputPassword);
    }
    
    const HandleBtnClick = () => {
        console.log(`Email = ${email}`);
        console.log(`Password = ${password}`);
    }

    return(
        <>
            <div className="login-section">
                <div className="login-form">
                    <h2 className="login-title">USER LOGIN</h2>
                    <div className="login-elements">
                        <label>Email</label>
                        <input type="email" placeholder="Enter your email" onChange={(e) => handleEmailChange(e)} value={email} />
                    </div>
                    <div className="login-elements">
                        <label>Password</label>
                        <input type="password" placeholder="Enter your password" onChange={(e) => handlePasswordChange(e)} value={password}/>
                    </div>
                    <div className="login-elements">
                        <input className="login-btn" type="submit" value="LOGIN" onClick={() => HandleBtnClick()}/>
                    </div>
                    <NavLink to="/user-signup">Back to User Signup</NavLink>
                </div>
            </div>
        </>
    )
}
export default UserLogin;