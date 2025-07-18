import { NavLink } from "react-router";

const Header = () => {
  return (
    <div className="back-header">
      <h2>Header</h2>
      <NavLink to={"/admin"}>Back to Home</NavLink>
    </div>
  );
};

export default Header;
