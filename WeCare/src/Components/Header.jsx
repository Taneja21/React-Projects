import React from "react";
import "../css/Header.css";
import Logo from "./Logo";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

function Header() {
  const storeStatus = useSelector((state) => state.authentication.status);
  console.log("status ::", storeStatus);

  const navItems = [
    { name: "Home", route: "/", active: storeStatus },
    { name: "Educators", route: "educators", active: storeStatus },
    { name: "courses", route: "courses", active: storeStatus },
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

        {/* <Link to="/">
          <button>Home</button>
        </Link>
        <Link to="educators">
          <button>Educators</button>
        </Link>
        <Link to="courses">
          <button>Courses</button>
        </Link> */}
      </div>
      <div className="box-header-right">
        <Link to="login">
          <button>Login</button>
        </Link>
        <Link to="signup">
          <button>SignUp</button>
        </Link>
      </div>
    </div>
  );
}

export default Header;
