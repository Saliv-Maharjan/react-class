import { NavLink } from "react-router";

const Header = () => {
    return(
        <div className="front-header">
            <h2>React</h2>
            <ul>
                <li><NavLink to="/home">Home</NavLink></li>
                <li><NavLink to="/contact-us">Contact Us</NavLink></li>
                {/* <li><NavLink to="/Adbout-Us">About Us</NavLink></li> */}
                <li><NavLink to="/user-login">Login</NavLink></li>
            </ul>
        </div>
    )
}

export default Header;