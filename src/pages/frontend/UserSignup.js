import { useState } from "react";
import { NavLink } from "react-router";

const UserSignup = () => {

    const [Fname, setFname] = useState('');
    const [Lname, setLname] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    
    const handleFnameChange = (e) => {
        const inputFname = e.target.value;
        setFname(inputFname);
    }

    const handleLnameChange = (e) => {
        const inputLname = e.target.value;
        setLname(inputLname);
    }

    const handleEmailChange = (e) => {
        const inputEmail = e.target.value;
        setEmail(inputEmail);
    }
    
    const handlePasswordChange = (e) => {
        const inputPassword = e.target.value;
        setPassword(inputPassword);
    }
    
    const HandleBtnClick = () => {
        console.log(`Fname = ${Fname}`);
        console.log(`Lname = ${Lname}`);
        console.log(`Email = ${email}`);
        console.log(`Password = ${password}`);
    }

    return(
        <>
            <div className="login-section">
                <div className="login-form">
                    <h2 className="login-title">USER REGISTER</h2>
                    <div className="login-elements">
                        <label>First Name</label>
                        <input type="email" placeholder="e.g John" onChange={(e) => handleFnameChange(e)} value={Fname} />
                    </div>
                    <div className="login-elements">
                        <label>Last Name</label>
                        <input type="email" placeholder="e.g Doe" onChange={(e) => handleLnameChange(e)} value={Lname} />
                    </div>
                    <div className="login-elements">
                        <label>Email</label>
                        <input type="email" placeholder="Enter your email" onChange={(e) => handleEmailChange(e)} value={email} />
                    </div>
                    <div className="login-elements">
                        <label>Password</label>
                        <input type="password" placeholder="Enter your password" onChange={(e) => handlePasswordChange(e)} value={password}/>
                    </div>
                    <div className="login-elements">
                        <input className="login-btn" type="submit" value="REGISTER" onClick={() => HandleBtnClick()}/>
                    </div>
                    <NavLink to="/user-login">Back to User Login</NavLink>
                </div>
            </div>
        </>
    )
}

export default UserSignup;