import { NavLink } from "react-router";

const Header = () => {
  return (
    <div className="back-header">
      <h2>Header</h2>
      <NavLink to={"/"}>Back to Home</NavLink>
    </div>
  );
};

export default Header;
