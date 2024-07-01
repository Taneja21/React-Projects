import React from "react";
import "../css/Header.css";
import Logo from "./Logo";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="box-header">
      <div className="box-header-left">
        <Link to="/">
          <Logo />
        </Link>

        <h2 style={{ color: "#37B7C3", fontWeight: "bolder" }}>WeC@re</h2>
      </div>
      <div className="box-header-middle">
        <Link to="/">
          <button>Home</button>
        </Link>
        <Link to="educators">
          <button>Educators</button>
        </Link>
        <Link to="courses">
          <button>Courses</button>
        </Link>
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
