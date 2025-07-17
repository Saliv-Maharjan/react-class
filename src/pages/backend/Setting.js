import { NavLink } from "react-router";

const Setting = () => {
  return (
    <>
      <h2 className="setting-title">Setting</h2>
      <ul className="setting-options">
        <li className="setting-btns">
          <NavLink>User Setting</NavLink>
        </li>
        <li className="setting-btns">
          <NavLink>Blog Setting</NavLink>
        </li>
        <li className="setting-btns">
          <NavLink>Server Setting</NavLink>
        </li>
      </ul>
    </>
  );
};

export default Setting;
