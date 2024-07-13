import React from "react";
import "../css/Header.css";
import Logo from "./Logo";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../store/features/authSlice";

function Header() {
  const storeStatus = useSelector((state) => state.authentication.authStatus);
  const isInstrcutor = useSelector(
    (state) => state.authentication.isInstrcutor
  );
  const isLearner = useSelector((state) => state.authentication.isLearner);
  const userData = useSelector((state) => state.authentication.userData);

  const dispatch = useDispatch();

  const logoutHandler = () => {
    dispatch(logout());
  };

  const navItems = [
    { name: "All Courses", route: "/", active: storeStatus },
    { name: "Instructors", route: "/", active: isLearner },
    { name: "My Learnings", route: "/", active: isLearner },
    { name: "Schedule", route: "/", active: isInstrcutor },
  ];
  return (
    <div className="box-header">
      <div className="box-header-left">
        <Link to="/">
          <Logo />
        </Link>

        <h2 style={{ color: "#37B7C3", fontWeight: "bolder" }}>WeC@re</h2>
      </div>
      <div className="box-header-middle">
        {navItems.map((item) =>
          item.active ? (
            <Link key={item.name} to={item.route}>
              <button>{item.name}</button>
            </Link>
          ) : null
        )}
      </div>
      <div className="box-header-right">
        {storeStatus ? <h1>Welcome {userData.name}!</h1> : null}
        {storeStatus ? (
          <Link to="/">
            <button onClick={logoutHandler}>Logout</button>
          </Link>
        ) : null}
      </div>
    </div>
  );
}

export default Header;
